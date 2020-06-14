const express = require('express')
const cors = require('cors')
const port = process.env.PORT
const userRouter = require('./routers/user')
require('./db/db')

const app = express()

var corsOptions = {
    origin: "https://stocklist.abrahamzakharov.com"  
  };

app.use(cors(corsOptions))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})