import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipePreview from './recipePreview'

class RecipeList extends Component {
  render() {
    const {recipes} = this.props

    return recipes.meals ? (
      <div>
        {recipes.meals.map(recipe => {
          return (
            <RecipePreview
              key={recipe.idMeal}
              dishName={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          )
        })}
      </div>
    ) : (
      <div />
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, null)(RecipeList)
