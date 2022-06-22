const express = require('express');
const bodyparser = require('body-parser');
const { render } = require('ejs');
let port = 3000;
let app = express();
const ejs = require('ejs');
const axios = require('axios');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const speaker = async () => {
        return await axios.get('http://localhost:3001/speakers');
    }


    const speakers = async () => {
        const data = await speaker()
        console.log(data.data);
        res.render('pages/accueil.ejs', { data:data.data});
    }
    speakers()

    })

app.use('/assets', express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})