const express = require('express');
const http = require('http');
const app = express();

app.use(express.urlencoded({extended:true}))
// serve static contents
app.use(express.static('static'));


//Import data  file
//-----
let jobList = require('./jobs.json');

//Html pages
let jobPage = require('./jobPage')
let getJobPage = require('./getJobPage')
let categoriesPage = require('./categoriesPage')
let getCategoriesPage = require('./getCategoriesPage')
let cityPage = require('./cityPage');
const req = require('express/lib/request');


app.get('/jobPage', (req,res) =>{
    res.send(jobPage.markup());
} )

app.get('/jobPage/:slctCtgry', (req,res) =>{
    res.send(jobPage.markup(req.query.slctCtgry));
} )

function mid (req, res, next) {

    category = req.query.slctCtgry;
    next();
    return category;  
}


app.get('/categoriesPage', (req,res) =>{
    res.send(categoriesPage.markup);
} )

app.post('/getCategoriesPage', (req,res) =>{
    res.send(getCategoriesPage.markup(req.body.category));
} )

app.get('/cityPage', (req,res) =>{

    res.send(cityPage.markup(req.query.city));
} )


app.listen(2000);