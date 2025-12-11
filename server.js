const port = 8000;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("Sorteio legal", {msg: "aguardando número"});
});

let x = 0

app.post("/sorteio", (req, res) => {

    x = Number((Math.floor(Math.random() * 21)));
    console.log(x)
    res.render("Sorteio legal", {msg: "aguardando número"})
})

app.post("/sorteiolegal", (req, res) =>{
    nome = Number(req.body.usuario)
    
    msg = ""
    if( nome == x  ){
    msg = "Parábens você acertou."       
    } else if( nome < x){
    msg = " Seu número está abaixo do sorteado."
    } else{
     msg = "Seu número está acima do sorteado."
    }
    res.render("Sorteio legal", {msg})
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});

