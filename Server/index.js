const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('express-async-errors')

PORT = 3001

const emailRoute = require('./Controller.js');



app.use(cors({
    origin: ['http://localhost:3000', '*'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use(bodyParser.json());


app.use('/sendMail', emailRoute);



app.get('/', (req, res) => {
    return res.json({ status: "Success" })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})