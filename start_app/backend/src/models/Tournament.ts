import { Document, Schema, Model, model } from 'mongoose';
import { IUser } from './User';

export interface ITournament {
    // _id: any;
    name?: string;
    matches?: IMatch[];
    groups?: IGroup[];
    gamersClasses?: IGamerInTournament[];
    gamers?: IUser[];
    isOpen?: boolean;
}

export interface IMatch {
    _id?: any;
    gamerOneID: any;
    gamerOneBlockedClasses: string;
    gamerOneValue: number;

    gamerTwoID: any;
    gamerTwoBlockedClasses: string;
    gamerTwoValue: number;

    round: string;
    groupID?: any;
    winnerID: any;
}

export interface IGroup {
    _id: any;
    name: string;
    winnersCount: number;
    gamers: IGamerInGroup[];
}

export interface IGamerInGroup {
    gamerID: any;
    score: number;
    win: number;
    lose: number;
}

export interface IGamerInTournament {
    gamerID: any;
    classes: string[];
}

export const TournamentSchema: Schema = new Schema({
    name: String,
    matches: [{
        _id: Schema.Types.ObjectId,
        gamerOneID: Schema.Types.ObjectId,
        gamerOneBlockedClasses: String,
        gamerOneValue: Number,
        gamerTwoID: Schema.Types.ObjectId,
        gamerTwoBlockedClasses: String,
        gamerTwoValue: Number,
        round: String,
        groupID: Schema.Types.ObjectId,
        winnerID: Schema.Types.ObjectId
    }],
    groups: [{
        _id: Schema.Types.ObjectId,
        name: String,
        winnersCount: Number,
        gamers: [{
            gamerID: Schema.Types.ObjectId,
            score: Number,
            win: Number,
            lose: Number
        }]
    }],
    gamersClasses: [{
        gamerID: Schema.Types.ObjectId,
        classes: [ String ]
    }],
    gamers: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
    isOpen: Boolean
});

export interface ITournamentModel extends ITournament, Document { }

export const Tournament: Model<ITournamentModel> = model<ITournamentModel>('Tournament', TournamentSchema);