import React, {Component} from 'react';
import './InputText.css';

export default class InputText extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <input className="ghs-input-text" type="text" placeholder={this.props.placeholder} onChange={(e) => this.props.onChange(e.target.value)} value={this.props.value} />
        )
    }
}