import React, {Component} from 'react';
import './RepoList.css';

export default class RepoList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="ghs-rl">{this.props.name}</div>
        )
    }
}