import React, {Component} from 'react';
import './RepoList.css';

export default class RepoList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    renderSuggestionText = (text) => {
        let name= text;
        if(this.props.filteredText){
            name = name.replace(this.props.filteredText, "<span>"+this.props.filteredText+"</span>")
        }

        return name
    }

    render(){
        return(
            <div className="ghs-rl" dangerouslySetInnerHTML={{__html: this.renderSuggestionText(this.props.name)}}></div>
        )
    }
}