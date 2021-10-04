const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  
  const items = [
    { 
      title: "D",
      message: "Desenvolver Aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "EJS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito fácil de usar"
    },
    {
      title: "A",
      message: "Amorzinho"
    },
    {
      title: "I",
      message: "install ejs"
    },
    {
      title: "S",
      message: "Sintaxe simples"
    }
  ]

  res.render("pages/index", { //não precisa colocar a pasta "view"
    qualitys: items,
  });
})

app.get("/sobre", function (req, res) {
  res.render("pages/about")
})

app.listen(8080)
console.log("rodando")