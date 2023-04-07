import express from 'express';

const app = express()

app.get('/', (req, res) => {
    
})

app.get('/api/', (req, res) => {
    res.send([{
        id: 1,
        nome: "diogo"
    }])
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Listening in port ${port}.`))