import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Recipe Finder</h1>
    <AppBar position="static">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/*<Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>*/}
          <Toolbar>
            <Typography variant="subtitle1" color="inherit">
              <Link to="/login">Login</Link>
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              <Link to="/signup">Sign Up</Link>
              <Link to="/">Back to Recipe Search</Link>
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              <Link to="/">Back to Recipe Search</Link>
            </Typography>
          </Toolbar>
        </div>
      )}
    </AppBar>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
