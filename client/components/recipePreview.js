import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'

const headerStyle = {
  'font-family': 'Open Sans',
  color: '#555',
  'text-decoration': 'none',
  'text-transform': 'uppercase',
  position: 'center'
}

const cardStyle = {
  position: 'center',
  background: '#DCDCDC'
}

const RecipePreview = props => {
  const {dishName, image, originalSource} = props

  return (
    <Card style={cardStyle}>
      <CardContent variant="h1">
        <h3 style={headerStyle}>{dishName}</h3>
      </CardContent>
      <CardContent>
        <img src={image} />
        <Typography>
          <a style={headerStyle} href={originalSource}>
            Get Recipe!
          </a>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipePreview
