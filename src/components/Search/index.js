import React, { Component } from 'react';
import './Search.css'


const axios = require('axios')

class index extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            enteredWord: '',
            urlAPI: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
            listDrinks: []
        }
    }

    handleSearchInput = (enteredWord) => {
        this.setState({enteredWord: enteredWord.target.value})
    }

    handleSearchClick = async() => {
        const{resetSearchingCallback, checkFirstSearchCallback, checkSearchingCallback, checkNotEmptyListCallback, getListDrinks, resetNotEmptyListCallback} = this.props
        resetSearchingCallback()
        checkFirstSearchCallback()
        this.setState({
            listDrinks: await this.handleGetDrinks()
        })

        checkSearchingCallback()
        
        if (this.state.listDrinks !== null) {
            checkNotEmptyListCallback()
            getListDrinks(this.state.listDrinks)
        }
        else {
            resetNotEmptyListCallback()
        }
    }

    handleGetDrinks = () => {
    const {enteredWord, urlAPI} = this.state
    return new Promise((resolve) => {
        axios.get(`${urlAPI}${enteredWord}`)
            .then(response => {
                resolve(response.data.drinks)
            })
            .catch(err => {
                console.log(err)
            })
        })
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Enter to search" onChange={this.handleSearchInput}/>
                <button onClick={this.handleSearchClick}>Search</button>
            </div>
        );
    }
}

export default index;
