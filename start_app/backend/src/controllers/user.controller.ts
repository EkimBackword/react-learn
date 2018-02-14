import { Application, Request, Response, NextFunction, Router } from 'express';
import * as passport from 'passport';
import { isAuth, requireAdmin } from '../authentication';
import { User, IUser } from '../models/User';
import * as uuid from 'uuid';
const passwordHash = require('password-hash');

export class UserController {
    constructor(app: Application) {
        const router = Router();
        router.post('/login', passport.authenticate('local'), this.login);
        router.post('/add', this.add);
        router.get('/profile', isAuth, this.profile);
        router.get('/logout', this.logout);

        app.use('/user', router);
    }

    private async login(req: Request, res: Response) {
        console.log(req.body);
        if (req.user) {
            req.login(req.user, (err) => {
                if (err) {
                    return res.status(500).json({message: 'не сработал passport.authenticate'});
                }
                return res.json(req.user);
            });
        }
        else {
            return res.status(500).json({message: 'не сработал passport.authenticate'});
        }
    }

    private async logout(req: Request, res: Response) {
        req.logout();
        return res.json();
    }

    private async profile(req: Request, res: Response) {
        if ( req.user !== void 0 ) {
            return res.json(req.user);
        } else {
            return res.status(404).json({
                message: 'Профиль отсутствует'
            });
        }
    }

    private async add(req: Request, res: Response) {
        if (req.body !== void 0) {
            try {
                const data = req.body;
                data.hash = passwordHash.generate(data.password);
                data.ID = uuid.v1();
                delete data.password;
                let newUser = new User(data);
                newUser = await newUser.save();
                return res.status(204).json(newUser.toJSON());
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
}