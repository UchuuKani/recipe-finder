import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const RecipePreview = props => {
  const {dishName, image, originalSource} = props

  return (
    <Card>
      <CardContent>
        <Typography>{dishName}</Typography>
        <img src={image} />
        <Typography>
          <a href={originalSource}>Get Recipe!</a>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipePreview
