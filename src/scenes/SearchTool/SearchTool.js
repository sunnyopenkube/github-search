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
        return(
            <RepoList />
        )
    }

    render(){
        return(
            <div className="ghs-st">
                <div className="ghs-search-header">
                    <div className="ghs-p-1">
                        <div className="ghs-p-1-it">
                            <InputText />
                        </div>
                        <div className="ghs-p-1-ib-1">
                            <InputButton />
                        </div>
                        <div className="ghs-p-1-ib-2">
                            <InputButton />
                        </div>
                    </div>
                    <div className="ghs-p-2">
                        <div className="ghs-p-2-it">
                            <InputText />
                        </div>
                        <div className="ghs-p-2-ib">
                            <InputButton />
                        </div>
                    </div>
                </div>
                {this.renderRepoList()}
            </div>
        )
    }
}