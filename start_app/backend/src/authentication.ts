import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import { User, IUser, IUserModel } from './models/User';

passport.serializeUser((user: IUserModel, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ _id: id }).populate('tournaments').exec();
    const profile: IUser = user.toJSON();
    delete profile.hash;
    done(null, profile);
});

passport.use(new Strategy({
        usernameField: 'login',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            console.log(1);
            const user = await User.findOne({login : username}).exec();
            if (!user) {
                return done(null, false, { message: 'Некорректый Логин' });
            }
            if (!user.verifyPassword(password)) {
                return done(null, false, { message: 'Некорректый Пароль' });
            }
            const profile: IUser = user.toJSON();
            delete profile.hash;
            console.log(profile);
            done(null, profile);
        } catch (error) {
            return done(error);
        }
    })
);

const findUser = async (username: string, callback: (err: any, user?: IUser) => any) => {
    try {
        const _user = await User.findOne({login : username});
        callback(null, _user.toJSON());
    } catch (err) {
        callback(err);
    }
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isUnauthenticated()) {
        return res.status(401).json();
    }
    next();
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.isUnauthenticated()) {
        return res.status(401).json();
    }
    if (req.user.Role !== 'admin') {
        return res.status(403).json({message: 'Доступно только администратору'});
    }
    next();
};
