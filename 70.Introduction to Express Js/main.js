const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

// app.get or app.post ot app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from db

    //For URL: http://localhost:4000/blog/intro-to-wasee?mode=dark&region=bd
    console.log(req.params)  // will output { slug: 'intro-to-wasee' }
    console.log(req.query)  // will output { mode: 'dark', region: 'bd' }

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch into to js from db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch into to python from db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})