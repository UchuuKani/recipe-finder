import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipePreview from './recipePreview'

class RecipeList extends Component {
  render() {
    const {recipes} = this.props

    return recipes.length ? (
      <div>
        {recipes.map(recipe => {
          return (
            <RecipePreview
              key={recipe.recipe_id}
              dishName={recipe.title}
              image={recipe.image_url}
              originalSource={recipe.source_url}
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
