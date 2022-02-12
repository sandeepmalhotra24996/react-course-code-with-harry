import React from 'react'
// import React, { Component } from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day:"numeric"
        }
        return (
                <p>{this.state.date.toLocaleDateString('en', options)} - {this.state.date.toLocaleTimeString()}</p>
        );
    }
}

export default Clock