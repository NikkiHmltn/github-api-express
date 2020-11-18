const express = require('express')
const axios = require('axios')

const app = express();

// create a port 
const PORT = process.env.PORT || 3000;

//create a route
app.get('/', (req, res) => {

    axios.get('hhtps://api.github.com/users/NikkiHmltn')
    .then(response => {

        const nikkiObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(nikkiObject)
        res.send(nikkiObject)
    })
})

app.get('/nitish', (req, res) => {

    axios.get('hhtps://api.github.com/users/nitishdayal')
    .then(response => {

        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(nitishObject)
        res.send(nitishObject)
    })
})

app.get('/carolina', (req, res) => {

    axios.get('hhtps://api.github.com/users/canourrea23')
    .then(response => {

        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(carolinaObject)
        res.send(carolinaObject)
    })
})

app.get('/ariel', (req, res) => {

    axios.get('hhtps://api.github.com/users/ajstrizzy')
    .then(response => {

        const arielObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(arielObject)
        res.send(arielObject)
    })
})
app.get('/jaxon', (req, res) => {

    axios.get('hhtps://api.github.com/users/JaxonNarramore')
    .then(response => {

        const jaxonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(jaxonObject)
        res.send(jaxonObject)
    })
})

app.get('/ruben', (req, res) => {

    axios.get('hhtps://api.github.com/users/anonyymous1')
    .then(response => {

        const rubenObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(rubenObject)
        res.send(rubenObject)
    })
})

app.get('/ashton', (req, res) => {

    axios.get('hhtps://api.github.com/users/Swolepenguin')
    .then(response => {

        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }

        console.log(ashtonObject)
        res.send(ashtonObject)
    })
})

//listen to a port 
app.listen(PORT, () => {
    console.log('server started')
})