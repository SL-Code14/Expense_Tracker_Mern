const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const { route } = require('./routes/transactions')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/mark1', require('./routes/' + route)))


const server = () => {
    // console.log("your are listening to the port: ", PORT)
    db()
    app.listen(PORT, ()=>{
        console.log('listening to the port: ', PORT)
    })
}

server()