import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const headerStyle = {
  fontFamily: 'Open Sans',
  color: '#555',
  textDecoration: 'none',
  textTransform: 'uppercase',
  position: 'center'
}

const barStyle = {
  background: '#DCDCDC'
}

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <AppBar style={barStyle} position="static">
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
            <h1 style={headerStyle}>Recipe Finder</h1>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={2}>
                <Typography variant="subtitle1" color="inherit">
                  <Link to="/login">Login</Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography item variant="subtitle1" color="inherit">
                  <Link to="/signup">Sign Up</Link>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography item variant="subtitle1" color="inherit">
                  <Link to="/">Back to Recipe Search</Link>
                </Typography>
              </Grid>
            </Grid>
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
