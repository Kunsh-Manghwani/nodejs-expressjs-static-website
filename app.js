const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

/*
app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>');
});
app.get('/users/:name',(req,res)=>{
    let user = req.params.name;

    res.send('<h1>'+user+'</h1>');
});*/

//set static path

app.use(express.static(path.join(__dirname,'public')));

app.get('/users',(req , res)=>{
    let users = [
        {
            first_name:"Kunsh",
            last_name:"Manghwani",
            age: 19,
            gender: "male"
        },
        {
            first_name:"Kirti",
            last_name:"Manghwani",
            age: 55,
            gender: "female"
        },
        {
            first_name:"Ashok",
            last_name:"Manghwani",
            age: 60,
            gender: "male"
        }
    ];

    res.json(users);
});

app.get('/downloads',(req,res)=>{
    res.download(path.join(__dirname,'/downloads/pdf.pdf'));
});
//for changes in link section in gooogle chrome bar
app.get('/about',(req,res)=>{
    res.redirect('/about.html');
});
app.get('/home',(req,res)=>{
    res.redirect('/index.html');
});
app.get('/services',(req,res)=>{
    res.redirect('/services.html');
});
// till here

//to subscribe of newletter

app.post('/subscribe',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;

    console.log(name+'has subscribed with email ='+email);
});

app.listen(3000,function(){
    console.log('server started at port 3000...');
});
