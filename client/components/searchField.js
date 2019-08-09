import React, {Component} from 'react'
import {connect} from 'react-redux'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
import {getRecipesThunk} from '../store/recipes'
import RecipeList from './recipeList'
import SearchBar from './searchBar'

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: ''
    }
  }

  handleClick = ingredients => {
    this.props.fetchRecipes(ingredients)
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
        {/*<TextField label="What's in your fridge?" name="ingredients" onChange={() => {this.handleChange(event)}} />
        <Button variant="contained" onClick={() => this.handleClick()}>
          Find Recipes
        </Button>*/}
        <SearchBar
          handleClick={() => this.handleClick(this.state.ingredients)}
          handleChange={this.handleChange}
        />
        <RecipeList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: ingredients => {
      dispatch(getRecipesThunk(ingredients))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchField)
