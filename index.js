const express=require("express");

const app=express();

const multer=require("multer");

const upload=multer();

const bodyParser=require("body-parser");
const jsonParser=bodyParser.json();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.use(express.static("public"));
app.use(express.static("css"));

app.get("/index",(request,response)=>{
    response.sendFile(`${__dirname}/views/index.html`);
});
//GET Request
app.get("/ex1",(request,response)=>{
    response.sendFile(`${__dirname}/views/ex1.html`);
});

app.get("/api/countries",(request,response)=>{
    response.sendFile(`${__dirname}/views/ex2.html`);
});

//POST
app.post("/ex1",upload.array(),(request,response)=>{
    const name=request.body.name;
    const email=request.body.email;
    response.send(` ${name}, Thnak you for the order. We will keep you posted on delivery status at ${email}`);
});


app.post("/api/countries",jsonParser,(request,response)=>{
    const travel_info=request.body;
    response.send( `Your name is ${travel_info.name} and you visited ${travel_info.countries.length} countries. Keep traveling!`
    );
});

const listener=app.listen(process.env.PORT||3000,()=>{
    console.log(`Your app is listening on port ${listener.address().port}`);
});
