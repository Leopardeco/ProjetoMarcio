const express = require ("express")

const app = express()

app.get ('/', (requisicao, resposta)=> {
    resposta.send ('Ola mundo')
})

app.listen(3000, () => {
    console.log('ola')
})