import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipePreview from './recipePreview'

class RecipeList extends Component {
  render() {
    const {recipes} = this.props

    return recipes.length ? (
      <div>
        {recipes.map((recipe, idx) => {
          return (
            <RecipePreview
              key={recipe.recipe_id ? recipe.recipe_id : idx}
              dishName={recipe.title}
              image={
                recipe.image_url
                  ? recipe.image_url
                  : recipe.pagemap.cse_thumbnail[0].src
              }
              originalSource={
                recipe.source_url ? recipe.source_url : recipe.link
              }
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
