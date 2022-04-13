const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 80;

const staticPath = path.join(__dirname ,"../public");
const viewPath = path.join(__dirname ,"../template/views");
const partialPath = path.join(__dirname ,"../template/partials");


// viewEngine
app.set("view engine" , "hbs");
// set view path
app.set("views",viewPath);


// Using Partial file
hbs.registerPartials(partialPath);
//build in middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    // res.send("This is home page")
    res.render("index");
});

app.get("/weather",(req,res)=>{
    // res.send("This is weather page")
    res.render("weather");
});

app.get("/about",(req,res)=>{
    // res.send("This is about page")
    res.render("about");
});

app.get("*",(req,res)=>{
    // res.send("404 page not found")
    res.render("404");
});


app.listen(port , ()=>{
    console.log(`Listing on the port ${port}`);
})
