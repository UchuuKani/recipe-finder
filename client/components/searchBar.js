import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBar = props => {
  return (
    <div>
      <TextField
        label={
          !props.serious ? "What's in your fridge?" : 'SeriousEats Results'
        }
        name="ingredients"
        onChange={() => {
          props.handleChange(event)
        }}
        value={props.ingredients}
      />
      <Button
        variant="contained"
        onClick={() => props.handleClick(props.ingredientList)}
      >
        Find Recipes
      </Button>
    </div>
  )
}

export default SearchBar
