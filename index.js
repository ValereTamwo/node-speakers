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
        try {
            return await axios.get('http://localhost:3001/speakers');

        } catch (error) {
            console.log(error);
        }
    }

    const speakers = async () => {
        const data = await speaker()
       // console.log(data.data);
        res.render('pages/accueil.ejs', { data:data.data});
    }

    speakers()

    })
app.get('/:speakerId', (req, res) => {
    const speaker = async () => {
        try {
            return await axios.get(`http://localhost:3001/speakers/${req.params.speakerId}`);
        } catch(err) {
            console.log(err);
        }
    }
    const details = async () => {
        const data = await speaker();
        console.log(data.data);
        res.render('pages/details.ejs',{data:data.data});
    }

    details();
})
app.use('/assets', express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})