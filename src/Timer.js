import React, { Component, Fragment } from 'react';

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.maxCount,
            ended: false,
        };
    }

    componentDidMount(){
        this.time = setInterval(()=>{
            this.setState({count: (this.state.count -1)});
        }, 1000);
    }

    componentDidUpdate(){
        const { timerEnded } = this.props;
        if (this.state.count <= 0 && !this.state.ended){
            clearInterval(this.time);
            if(timerEnded){
                timerEnded(this);
            }
            this.setState({ended: true});
        }
    }

    render(){
        const { count } = this.state;
        return (
            <Fragment>
                {count}
            </Fragment>
        );
    }


}