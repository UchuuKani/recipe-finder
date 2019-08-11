const axios = require('axios')
const $ = require('cheerio')
const rp = require('request-promise')

const siteUrl =
  'https://www.seriouseats.com/recipes/2015/11/pan-roasted-pork-tenderloin-bourbon-fig-glaze-recipe.html'

// const fetchData = async () => {
//   try {
//     const {data} = await axios.get(siteUrl)
//     return cheerio.load(data)
//   } catch(err) {
//     console.error(err)
//   }
// }

// const $ = fetchData()
// const someElement = $('.title-section').text()
// console.log(someElement)
rp(siteUrl)
  .then(function(html) {
    //success!
    console.log($('#relish-button', html).length)
    console.log($('#relish-button', html.attribs))
  })
  .catch(function(err) {
    console.error(err)
  })
