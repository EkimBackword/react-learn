import { IGroup, ITournamentModel } from './../models/Tournament';
import { IUserModel } from './../models/User';
import { Application, Request, Response, NextFunction, Router } from 'express';
import * as passport from 'passport';
import * as mongoose from 'mongoose';
import { isAuth, requireAdmin } from '../authentication';
import { User, IUser } from '../models/User';
import * as uuid from 'uuid';
import { Tournament, ITournament, IGamerInTournament, IMatch } from '../models/Tournament';
const passwordHash = require('password-hash');

export class TournamentController {
    constructor(app: Application) {
        const router = Router();
        router.post('/add', this.add);
        router.post('/:tournament_id/add-gamer', isAuth, this.add_gamer);
        router.delete('/:tournament_id/:gamer_id', isAuth, this.remove_gamer);
        router.post('/:tournament_id/add-match', isAuth, this.add_match);
        router.post('/:tournament_id/change-match', isAuth, this.change_match);
        router.post('/:tournament_id/add-groups', isAuth, this.add_group);
        router.post('/:tournament_id/change-groups', isAuth, this.change_group);

        app.use('/tournament', router);
    }

    private async add(req: Request, res: Response) {
        if (req.body !== void 0) {
            try {
                const data: ITournament =  {
                    name: req.body.name,
                    isOpen: true,
                    matches: [],
                    groups: [],
                    gamersClasses: [],
                    gamers: [],
                };
                const tournament = new Tournament(data);
                await tournament.save();
                return res.status(204).json(tournament.toJSON());
            } catch (error) {
                return res.status(500).json({
                    message: 'Произошла ошибка',
                    error
                });
            }
        } else {
            return res.status(400).json({
                message: 'Отсутствует тело запроса'
            });
        }
    }

    private async add_gamer(req: Request, res: Response) {
        try {
            const data: IGamerInTournament = req.body;
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            const user = await User.findById( data.gamerID ).populate('tournaments').exec();
            if (tournament.gamers.some((gamer: IUserModel) => gamer._id === user._id )) {
                return res.status(400).json({
                    message: 'Данный пользователь уже заявлен в турнире'
                });
            }
            tournament.gamers.push(user);
            tournament.gamersClasses.push(data);
            user.tournaments.push(tournament);
            await user.save();
            await tournament.save();

            return res.json(tournament.toJSON());
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }

    private async remove_gamer(req: Request, res: Response) {
        try {
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            const user = await User.findById( req.params.gamer_id ).populate('tournaments').exec();
            const gamer = tournament.gamers.find((gamer: IUserModel) => gamer._id === user._id );
            const gamerClasses = tournament.gamersClasses.find(gamer => gamer.gamerID === user._id );
            const removeTour = user.tournaments.find((_tournament: ITournamentModel) => _tournament._id === tournament._id);
            if ( gamer !== void 0 ) {
                tournament.gamers.splice(tournament.gamers.indexOf(gamer), 1);
                tournament.gamersClasses.splice(tournament.gamersClasses.indexOf(gamerClasses), 1);
                user.tournaments.splice(user.tournaments.indexOf(removeTour), 1);
                await user.save();
                await tournament.save();
                return res.json(tournament.toJSON());
            }
            return res.status(400).json({
                message: 'Данный пользователь отсутствует в турнире'
            });
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }

    private async add_match(req: Request, res: Response) {
        try {
            const data: IMatch = req.body;
            data._id = mongoose.Types.ObjectId();
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            tournament.matches.push(data);
            await tournament.save();
            return res.json(tournament);
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }

    private async change_match(req: Request, res: Response) {
        try {
            const data: IMatch = req.body;
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            const currentMatch = tournament.matches.find(match => match._id === data._id);
            if ( currentMatch === void 0 ) {
                return res.status(400).json({
                    message: 'Матч не найден в турнире'
                });
            }
            const idx = tournament.matches.indexOf(currentMatch);
            tournament.matches[idx] = data;
            await tournament.save();
            return res.json(tournament);
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }

    private async add_group(req: Request, res: Response) {
        try {
            const data: IGroup = req.body;
            data._id = mongoose.Types.ObjectId();
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            tournament.groups.push(data);
            await tournament.save();
            return res.json(tournament);
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }
    private async change_group(req: Request, res: Response) {
        try {
            const data: IGroup = req.body;
            const tournament = await Tournament.findById(req.params.tournament_id).populate('gamers').exec();
            const currentGroup = tournament.groups.find(match => match._id === data._id);
            if ( currentGroup === void 0 ) {
                return res.status(400).json({
                    message: 'Матч не найден в турнире'
                });
            }
            const idx = tournament.groups.indexOf(currentGroup);
            tournament.groups[idx] = data;
            await tournament.save();
            return res.json(tournament);
        } catch (error) {
            return res.status(500).json({ message: 'Произошла ошибка', error });
        }
    }
}