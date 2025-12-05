const port = 8000;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/Sorteiolegal", (request, response) => {
    response.render("Sorteio legal");
});

let x

app.get("/sorteio", (req, res) => {

    x = (Math.floor(Math.random() * 21));
    res.send('Novo número sorteado')
})


app.get("/", (req, res) =>{
    nome = req.query.usuario
    let msg = "Aguardando número ser enviado"
    if( usuario == x  ){
    msg = "Parábens você acertou."       
    } else if( usuario < x){
    msg = " Seu número está abaixo do sorteado."
    } else if(usuario > x){
     msg = "Seu número está acima do sorteado."
    }    
        res.render("Sorteio legal",{usuario, x, msg})
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});

