const cilindro= require('./cilindro.js');
const circulo = require('./circulo.js');
const http = require('http');
const express = require('express');
const app = express();

//rota para circulo entao localhost:8082/cilindro
app.get ("/cilindro",(req,res) =>{
    res.send("Um cilindro de raio 2 e altura 4 possui volume de " + cilindro.volume(4) + 
        " e area externa igual a "  + cilindro.areaExt(2,4));
    
}) 
//rota para circulo entao localhost:8082/circulo
app.get("/circulo",(req,res)=>{
    res.send("Um circulo de raio 4 tem area de " + circulo.area(4));
})

app.get("/",(req,res)=>{
    res.send("Digite uma rota após o local host com /circulo ou /cilindro");
})

//servidor
app.listen(8182,function(){
    console.log('servidor rodando');
})

