import { Document, Schema, Model, model } from 'mongoose';
const passwordHash = require('password-hash');

export interface IUser {
    ID?: string;
    login?: string;
    avatarUri?: string;
    role?: string;
    hash?: string;
    password?: string;
    hidden?: boolean;
}

export const UserSchema: Schema = new Schema({
    ID: String,
    login: String,
    avatarUri: String,
    role: String,
    hash: String,
    hidden: Boolean
});

UserSchema.methods.verifyPassword = function(password: string): boolean {
    return passwordHash.verify(password, this.hash);
};

export interface IUserModel extends IUser, Document {
    verifyPassword(password: string): boolean;
}

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);