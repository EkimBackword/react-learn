import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        };
    }

    tick() {
        this.setState({
          now: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <h3> { this.state.now.toLocaleTimeString() } </h3>
        )
    }
}