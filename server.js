//CONFIGURAÇÃO DO BACK-END

const express = require('express')
const app = express()

//Rota para FRONT-END
app.use(express.static('public'))

//INICIAR COM A LOCALHOST 3.000
app.listen(3000, () => {
    console.log(`Servidor rodando, acesse o link: http://localhost:3000`)
})