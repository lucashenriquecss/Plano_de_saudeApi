const bodyParser = require('body-Parser');
const beneficiarios = require('./beneficiariosRoute')
const precos = require('./precosRoute');
const planos = require('./planosRoute');
module.exports = app => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      beneficiarios,
      precos,
      planos,
     
    )
}