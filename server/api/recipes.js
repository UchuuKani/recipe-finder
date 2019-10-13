const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    //GET stuff
    const data = await router //wtf is this placeholder

    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {placeholder} = await router.create('req.body stuff') //wtf

    res.json(placeholder)
  } catch (err) {
    next(err)
  }
})

module.exports = router
