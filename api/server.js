import app from './src/app.js'; 

//Server apenas para inicializar o servidor
const port = process.env.PORT || 8080 //caso utilize em servidores de hospedagem ou na porta 3000




app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})