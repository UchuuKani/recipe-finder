import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBar = props => {
  console.log('all my props', props)
  return (
    <div>
      <TextField
        label="What's in your fridge?"
        name="ingredients"
        onChange={() => {
          props.handleChange(event)
        }}
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
