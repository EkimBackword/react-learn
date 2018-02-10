import React, { Component } from 'react';

import MySVG from '../MySVG/MySVG';
import Clock from '../Clock/Clock';
import Secret from '../Secret/Secret';

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
                {/* <header>
                    <h1>
                        Hello World
                    </h1>
                    <MySVG svg={logo} size={'max'} />
                </header>
                <Clock /> */}
                <Secret />
                <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        );
    }
}