const { PORT, API } = require('./config/server.config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routers/userRouter')

const corsOptions = {
  origin: "http://localhost:8082"
}
const app = express()
const db = require('./models/index')

app.use(cors(corsOptions))
app.use(express.json())

db.sequelize.sync()


// User router 
app.use(`${API.path}`, userRouter)


app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(PORT, () => {
  console.log(API.path)
  console.log("App started an port " + PORT)
})
