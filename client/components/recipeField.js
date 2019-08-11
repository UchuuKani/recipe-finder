import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Redirect} from 'react-router-dom'

class RecipeField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeUrl: '',
      redirect: false
    }
  }

  handleClick = () => {
    this.setState({
      redirect: true
    })
  }

  handleChange = event => {
    this.setState({
      recipeUrl: event.target.value
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <TextField
          label="Cut the Cruft"
          name="recipeUrl"
          value={this.state.recipeUrl}
          onChange={this.handleChange}
        />
        <Button variant="contained" onClick={this.handleClick}>
          Decruft
        </Button>
      </div>
    )
  }
}

export default RecipeField
