import axios from 'axios'
import {gapiKey, gCse, normalApiFork, throwAwayApiFork} from '../../secrets'

//Action types
const GET_RECIPES = 'GET_RECIPES'

//Action creators
const getRecipes = recipes => {
  return {
    type: GET_RECIPES,
    recipes
  }
}

const errorThrower = () => {
  const error = new Error()
  error.message = 'No meals found for this ingredient'
  throw error
}
//TODO: remove commit history that has api keys in public files
export const getRecipesThunk = (ingredients, recipeSite) => {
  return async dispatch => {
    try {
      const ingredientList = ingredients.split(' ').join('+')

      if (!ingredientList.length) errorThrower()

      const food2ForkUrl = `https://www.food2fork.com/api/search?key=${throwAwayApiFork}&q=${ingredientList}`

      const seriousEatsUrl = `https://www.googleapis.com/customsearch/v1?key=${gapiKey}&cx=${gCse}&q=${ingredientList}`

      let res

      if (!recipeSite) {
        res = await axios.get(food2ForkUrl)
      } else {
        res = await axios.get(seriousEatsUrl)
      }

      if (!recipeSite) {
        if (!res.data.recipes.length) {
          //if ingredient not found from api call, throw error
          errorThrower()
        }
      } else if (recipeSite) {
        if (res.data.items.length === 0) {
          //if ingredient not found from api call, throw error
          errorThrower()
        }
      }
      if (res.data.recipes) {
        dispatch(getRecipes(res.data.recipes))
      } else {
        dispatch(getRecipes(res.data.items))
      }
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }
}

export default (recipes = {}, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes
    default:
      return recipes
  }
}

//google json =>
//res.data.items is an array of objects
//a single item has:
//link: link to recipe
//title: name of recipe, sort of a description
//pagemap.cse_image[0].src: full size image
//pagemap.cse_thumbnail[0].src: thumbnail

//food2fork json =>
//res.data.recipes is an array of objects
//
