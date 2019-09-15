import React, {Component} from 'react';
import './LoadingScreen.css';

export default class LoadingScreen extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="ghs-loading-screen">{this.props.message}</div>
        )
    }
}