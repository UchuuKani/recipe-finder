import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const RecipePreview = props => {
  const {dishName, image, key} = props
  return (
    <Card>
      <CardContent>
        <Typography>{dishName}</Typography>
        <img src={image} />
        <Typography>Get Recipe!</Typography>
      </CardContent>
    </Card>
  )
}

export default RecipePreview
