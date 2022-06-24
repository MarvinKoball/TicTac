
const express = require('express')
const cors = require('cors')
const imageToBase64 = require('image-to-base64');

const app = express()
app.use(cors())
const port = 9090


app.get('/api/welpen', async (req, res) => {
  console.log("new request")
  /**
   * bei request finde jpeg,
   *  wandle in base64 um
   *  dann sende ab. 
   */
  let convertedImage = await imageToBase64("./resources/welpen.jpg")
  res.send(convertedImage)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})