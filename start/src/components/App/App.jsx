import React, { Component } from 'react';

import MySVG from '../MySVG/MySVG';
import Clock from '../Clock/Clock';

import './App.css';
import logo from './logo.svg';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            logo: null
        }
        this.logo = null;  
    }

    render() {
        return (
            <div className='main'>
                <header>
                    <h1>
                        Hello World
                    </h1>
                    <MySVG svg={logo} size={'max'} />
                </header>
                <Clock />
            </div>
        );
    }
}