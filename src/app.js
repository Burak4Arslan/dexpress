const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const fd = path.join(__dirname,'../public');
const viewDirectory = path.join(__dirname,'../templates/views');
const partialDirectory = path.join(__dirname,'../templates/partials');

app.set('views',viewDirectory);
app.set('view engine','hbs');
hbs.registerPartials(partialDirectory);

app.use(express.static(fd));


app.get('',(req,res) => {

    res.render('index', {
        title: 'HomePage',
        name: ')('
    })

});

app.get('/about',(req,res) => {

    res.render('about', {
        title: 'ABOUT',
        name: 'Burası boş :(',
        mal: `${fd}`
    })

});
app.get('/o',(req,res) => {

    res.render('☺')

});

app.get('*',(req,res) => {

    res.render('404', {
        title: '404 Not Found'
    })

});


app.listen(3000, () => {

    console.log("Server is up and running");

})