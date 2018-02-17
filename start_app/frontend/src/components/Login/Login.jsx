import * as React from 'react';
import './Login.css';
import { Form, Text } from 'react-form';

export default class Login extends React.Component {

    async handleSubmit(values) {
        await this.props.login(values);
    }

    render() {
        return (
            <Form>{
                formApi => (
                    <form onSubmit={() => this.handleSubmit(formApi.values) }
                          id="login-form"
                          className="layout-column layout-align-space-around-center login-form"
                          autoComplete="off"
                    >
                        <label htmlFor="login">Логин:</label>
                        <Text field="login" id="login" />
                        <label htmlFor="password">Пароль:</label>
                        <Text field="password" id="password" type="password" />
                        <button type="submit">Войти</button>
                    </form>
                )
            }</Form>
        )
    }
}