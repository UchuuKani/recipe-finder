import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRecipesThunk} from '../store/recipes'
import RecipeList from './recipeList'
import SearchBar from './searchBar'
import RecipeField from './recipeField'

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: '',
      searchSite: ''
    }
  }
  //currently hard coded to only get google results for seriouseats
  handleClick = ingredients => {
    this.props.fetchRecipes(ingredients, this.state.searchSite)
    this.setState({
      ingredients: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label>Where do you want results from?</label>
        <select
          value={this.state.searchSite}
          name="searchSite"
          onChange={() => this.handleChange(event)}
        >
          <option value="">Super Secret Database</option>
          <option value="serious">SeriousEats</option>
        </select>
        <br />
        <SearchBar
          handleClick={() => this.handleClick(this.state.ingredients)}
          handleChange={this.handleChange}
          ingredients={this.state.ingredients}
          serious={this.state.searchSite}
        />
        <br />
        <RecipeField />
        <br />
        <RecipeList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: (ingredients, recipeSite) => {
      dispatch(getRecipesThunk(ingredients, recipeSite))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchField)
