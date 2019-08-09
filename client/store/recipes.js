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
      const ingredientList = ingredients.split(' ').join('+')
      // const mealDBUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${testIng}`
      //<------------protect food2Fork API key later ------------------------------->
      const normalApiFork = 'ac0b9311a5dcf5e54c36b45d5a3d007f'
      const throwAwayApi = '0205afdc28f8f45152304937539f4685'
      const food2ForkUrl = `https://www.food2fork.com/api/search?key=${throwAwayApi}&q=${ingredientList}`
      const {data} = await axios.get(food2ForkUrl)

      if (!data.recipes) {
        //if ingredient not found from api call, throw error
        const error = new Error()
        error.message = 'No meals found for this ingredient'
        throw error
      }

      dispatch(getRecipes(data.recipes))
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
