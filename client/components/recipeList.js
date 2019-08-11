import React, {Component} from 'react'
import {connect} from 'react-redux'
import RecipePreview from './recipePreview'
import Grid from '@material-ui/core/Grid'

class RecipeList extends Component {
  render() {
    const {recipes} = this.props

    return recipes.length ? (
      <div>
        <Grid container justify="center" spacing={3}>
          {recipes.map((recipe, idx) => {
            return (
              <Grid item xs={3} key={recipe.recipe_id ? recipe.recipe_id : idx}>
                <RecipePreview
                  dishName={recipe.title}
                  image={
                    recipe.image_url
                      ? recipe.image_url
                      : recipe.pagemap.cse_thumbnail
                        ? recipe.pagemap.cse_thumbnail[0].src
                        : 'https://image.roku.com/channels/images/da5f0a74d140489d95266c9c3c7c8ecc-hd.jpg'
                  }
                  originalSource={
                    recipe.source_url ? recipe.source_url : recipe.link
                  }
                />
              </Grid>
            )
          })}
        </Grid>
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
