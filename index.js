const express = require('express');
const bodyparser = require('body-parser');
const { render } = require('ejs');

let app = express();
const ejs = require('ejs');

let port = 3000;
app.set('view engine', 'ejs');

//localhost : 3000

app.get('/', (req, res) => {
    //if (err) throw err
    res.render('pages/accueil.ejs');
})


app.use('/assets', express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})