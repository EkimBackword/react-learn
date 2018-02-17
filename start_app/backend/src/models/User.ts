import { Document, Schema, Model, model } from 'mongoose';
import { Tournament, ITournament } from './Tournament';
const passwordHash = require('password-hash');

export interface IUser {
    login?: string;
    avatarUri?: string;
    role?: string;
    hash?: string;
    password?: string;
    hidden?: boolean;
    tournaments?: ITournament[];
}

export const UserSchema: Schema = new Schema({
    login: String,
    avatarUri: String,
    role: String,
    hash: String,
    hidden: Boolean,
    tournaments: [ { type: Schema.Types.ObjectId, ref: 'Tournament' } ]
});

UserSchema.methods.verifyPassword = function(password: string): boolean {
    return passwordHash.verify(password, this.hash);
};

export interface IUserModel extends IUser, Document {
    verifyPassword(password: string): boolean;
}

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);