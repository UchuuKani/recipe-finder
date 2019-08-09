import axios from 'axios'

//Action types
const GET_RECIPES = 'GET_RECIPES'

//Action creators
const getRecipes = recipes => {
  return {
    type: GET_RECIPES,
    recipes
  }
}

export const getRecipesThunk = ingredients => {
  return async dispatch => {
    try {
      const testIng = 'chicken_breast'
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${testIng}`
      const {data} = await axios.get(url)
      if (!data.meals) {
        //if ingredient not found from api call, throw error
        const error = new Error()
        error.message = 'No meals found for this ingredient'
        throw error
      }

      dispatch(getRecipes(data))
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
