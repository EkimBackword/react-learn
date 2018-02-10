import React from 'react';
import MySVG from '../MySVG/MySVG'
import './Secret.css'
import like from './like.svg'

export default class Secret extends React.PureComponent {
    render() {
        return (
            <div className='secret'>
                <h1>I</h1>
                <div className='secret__svg'>
                    <MySVG svg={like} size={'mega-max'} />
                </div>
                <h1>YOU</h1>
            </div>
        )
    }
}