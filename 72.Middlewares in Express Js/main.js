const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))


app.use('/blog', blog)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {  // Source: https://expressjs.com/en/guide/writing-middleware.html
    console.log(req.headers)
    req.ishan = "I am Ishan"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
})


//Middleware 2
app.use((req, res, next) => {  // Source: https://expressjs.com/en/guide/writing-middleware.html
    console.log('m2')
    req.ishan = "I am Wasee"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.ishan)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})