import React, {Component} from 'react';
import './SearchTool.css';

import RepoList from '../../components/RepoList/RepoList'
import InputText from '../../components/InputText/InputText'
import InputButton from '../../components/InputButton/InputButton'

export default class SearchTool extends Component{
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    componentDidMount(){

    }

    renderRepoList = () => {
        let a = [1,2,3,4,5]
        let list = []
        for(let i in a){
            list.push(<RepoList key={i} />)
        }

        return list
    }

    render(){
        return(
            <div className="ghs-st">
                <div className="ghs-search-header">
                    <div className="ghs-p-1">
                        <InputText placeholder="Enter username" />
                        <InputButton btnType="primary" btnText="Go" />
                        <InputButton btnType="secondary" btnText="Clear" />
                    </div>
                    <div className="ghs-p-2">
                        <InputText placeholder="Enter some keywords to filter. Eg: algo" />
                        <InputButton btnType="secondary" btnText="Clear" />
                    </div>
                </div>
                {this.renderRepoList()}
            </div>
        )
    }
}