import React from 'react';
import './MySVG.css';

export default class MySVG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            svg: ''
        }
    }

    componentWillMount() {
        fetch(this.props.svg)
            .then(res => res.text())
            .then(svg => {
                this.setState({
                    svg: svg
                })
            })
    }

    render() {
        const newClassName = !this.props.size ? 'my-svg' : `my-svg my-svg--${this.props.size}`;
        return (
            <div className={newClassName} dangerouslySetInnerHTML={{ __html: this.state.svg }}></div>
        )
    }
}