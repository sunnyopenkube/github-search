import React, {Component} from 'react';
import './ErrorScreen.css';

export default class ErrorScreen extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="ghs-error-screen">{this.props.message}</div>
        )
    }
}