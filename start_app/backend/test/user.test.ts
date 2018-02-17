import { IUserModel, IUser } from './../src/models/User';
import * as supertest from 'supertest';
import {} from 'jest';

const request = supertest('http://localhost:35123/user');

describe('Добавление нового пользователя', () => {
    it('204 (Добавить в БД)', (done) => {
        const user: IUser = {
            login: 'test',
            avatarUri: 'https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-test-user.png',
            role: 'admin',
            password: 'test123',
            hidden: false
        };
        request.post('/add')
            .send(user)
            .expect(204, done);
    });
    it('204 (Добавить в БД)', (done) => {
        const user: IUser = {
            login: 'test1',
            avatarUri: 'https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-test-user.png',
            role: 'admin',
            password: 'test123',
            hidden: false
        };
        request.post('/add')
            .send(user)
            .expect(204, done);
    });
});



