import React, { Component } from 'react';
import Item from "./components/Item"
import './App.css';
import axios from "axios/index";
import _ from 'lodash';
import Header from "./components/Header";

const apiURL = 'http://www.recipepuppy.com/api/?q=';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            recipeList: [],
            selectedRecipe: null,
            maxResults: 20,
        }
    }

    componentDidMount() {
        //testing
        // this.updateSearch('onion');
    }

    updateSearch = query => {
        //save the query
        this.setState({ query: query })

        //get the data
        if(query) {
            axios.get(apiURL + query)
                .then((response) => {
                    this.setState({recipeList: response.data.results});
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
        }
        else {
            this.setState({ recipeList:[] })
        }
    }

    renderRecipeItem = (recipeItem, index) => {
        return (
            <Item key={index} data={recipeItem} />
        )
    }

    renderList = () => {
        const {recipeList, maxResults} = this.state;
        let length = recipeList.length >= maxResults ? maxResults : recipeList.length;
        return (
            _.times(length , i =>
                this.renderRecipeItem(recipeList[i], i)
            )
        )
    }

    render() {
        return (
          <div className="App">
              <div><Header updateSearch={this.updateSearch}/></div>
              <div className='ListContainer'>{this.renderList()}</div>
          </div>
        );
    }
}

export default App;
