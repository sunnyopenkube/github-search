import React, {Component} from 'react';
import './InputButton.css';

export default class InputButton extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <button className={'ghs-button '+this.props.btnType} onClick={() => this.props.callBack()}>{this.props.btnText}</button>
        )
    }
}