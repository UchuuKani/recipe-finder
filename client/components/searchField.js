import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {getRecipesThunk} from '../store/recipes'
import RecipeList from './recipeList'

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: ''
    }
  }

  handleClick = ingredients => {
    const test = ingredients

    this.props.fetchRecipes(test)
  }

  render() {
    return (
      <div>
        <TextField label="What's in your fridge?" />
        <Button variant="contained" onClick={() => this.handleClick()}>
          Find Recipes
        </Button>
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
