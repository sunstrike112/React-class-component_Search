import './App.css';
import SignIn from './components/SignIn';
import Search from './components/Search'
import NumOfResults from './components/NumOfResult'
import TableResult from './components/TableResult'

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      isNotEmptyList: false,
      listDrinks: [],
      noOfDrinks:[],
      idDrinks: [],
      nameDrinks: [],
      thumbnailDrinks: [],
      isFisrtSearch: true,
      isSearching: true
    }
  }

  getListDrinks = (listDrinks) => {
    this.setState({
      listDrinks: listDrinks,
    })
    this.loadDrinksDetail()
  }

  loadDrinksDetail = () => {
    this.setState({
      noOfDrinks: Array.from(Array(this.state.listDrinks.length + 1).keys()).slice(1),
      idDrinks: this.state.listDrinks.map(idDrinks => idDrinks.idDrink),
      nameDrinks: this.state.listDrinks.map(nameDrinks => nameDrinks.strDrink),
      thumbnailDrinks: this.state.listDrinks.map(thumbnailDrinks => thumbnailDrinks.strDrinkThumb)
    })
  }

  render() {
    const {isSearching, isFisrtSearch, isNotEmptyList} = this.state
    return (
      <div>
        {
          this.state.isLoggedIn ?
          <div className="search-container">
            <Search checkNotEmptyListCallback={() => this.setState({isNotEmptyList: true})}
                    resetNotEmptyListCallback={() => this.setState({isNotEmptyList: false})}
                    checkSearchingCallback={() => this.setState({isSearching: false})}
                    resetSearchingCallback={() => this.setState({isSearching: true})}
                    checkFirstSearchCallback={() => this.setState({isFisrtSearch: false})}
                    getListDrinks={this.getListDrinks}/>
            {
              isFisrtSearch ?
                <div className="warning">Please enter something to search</div>
              :
                isSearching ?
                  <div className="warning">Searching ... </div>
                :
                  isNotEmptyList ?
                    <div className="detail-result">                 
                      <NumOfResults numOfResult={this.state.listDrinks.length}/>
                      <TableResult listDrinks={this.state}/>
                    </div>
                  :
                    <div className="warning">No result is found </div>
            }
          </div>
            :
            <SignIn loginCallback={() => this.setState({isLoggedIn: true})}/>
        }
      </div>
    );
  }
}

export default App;

