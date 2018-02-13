import { Document, Schema, Model, model } from 'mongoose';
const passwordHash = require('password-hash');

export interface IUser {
    id?: any;
    login?: string;
    avatarUri?: string;
    role?: string;
    hash?: string;
    password?: string;
    hidden?: boolean;
}

export const UserSchema: Schema = new Schema({
    login: String,
    avatarUri: String,
    role: String,
    hash: String,
    hidden: Boolean
});

UserSchema.methods.verifyPassword = function(password: string): boolean {
    return passwordHash.verifyPassword(password, this.hash);
};

export interface IUserModel extends IUser, Document {
    verifyPassword(password: string): boolean;
}

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);