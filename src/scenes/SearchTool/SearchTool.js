import React, {Component} from 'react';
import './SearchTool.css';

import RepoList from '../../components/RepoList/RepoList'
import InputText from '../../components/InputText/InputText'
import InputButton from '../../components/InputButton/InputButton'

import {urlConfig} from '../../constants/constant'

export default class SearchTool extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            username: "",
            fetchedRepositoryList: [],
            filteredRepositoryList: [],
            filteredText: ""
        };
    }

    // Fetch repo from api
    fetchRepositories = () => {
        let self = this;
        let baseUrl = urlConfig.apiBaseURL
        fetch(baseUrl+'/users/'+this.state.username+'/repos', {
              method: 'GET',
              headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
              }
            })
            .then(res => res.json())
            .then(
                (result) => {
                    self.setState({
                        fetchedRepositoryList: result,
                        filteredRepositoryList: result
                    })
                },
                (error) => {
                    console.log(error);
                }
            )
            .catch(function() {
                console.log("error");
            })
    }

    // clear all user with repo
    clearUser = () => {
        this.setState({
            username: "",
            fetchedRepositoryList: [],
            filteredRepositoryList: []
        })
    }


    setUsername = (username) => {
        this.setState({username})
    }

    // filter logic enabled
    filterRepositoryList = (text) =>{
        if(text && this.state.fetchedRepositoryList.length > 0){
            let repoList = this.state.fetchedRepositoryList
            let filteredRepoList = []
            for(let i in repoList){
                if(repoList[i].name.toLowerCase().includes(text.toLowerCase())){
                    filteredRepoList.push(repoList[i])
                }
            }
            this.setState({
                filteredRepositoryList: filteredRepoList,
                filteredText: text
            })
        }
        else{
            this.setState({
                filteredRepositoryList: this.state.fetchedRepositoryList,
                filteredText: ""
            })
        }
    }

    // clearing filtered text
    clearFilterText = () => {
        this.setState({
            filteredRepositoryList: this.state.fetchedRepositoryList,
            filteredText: ""
        })
    }

    // looping and rendering repo list
    renderRepoList = () => {
        let list = []
        for(let i in this.state.filteredRepositoryList){
            list.push(<RepoList key={this.state.filteredRepositoryList[i].id} name={this.state.filteredRepositoryList[i].name} />)
        }

        return list
    }


    render(){
        return(
            <div className="ghs-st">
                <div className="ghs-search-header">
                    <div className="ghs-p-1">
                        <InputText placeholder="Enter username" onChange={this.setUsername} value={this.state.username} />
                        <InputButton btnType="primary" btnText="Go" callBack={this.fetchRepositories} />
                        <InputButton btnType="secondary" btnText="Clear" callBack={this.clearUser} />
                    </div>
                    <div className="ghs-p-2">
                        <InputText placeholder="Enter some keywords to filter. Eg: algo" onChange={this.filterRepositoryList} value={this.state.filteredText} />
                        <InputButton btnType="secondary" btnText="Clear" callBack={this.clearFilterText}  />
                    </div>
                </div>
                {this.renderRepoList()}
            </div>
        )
    }
}