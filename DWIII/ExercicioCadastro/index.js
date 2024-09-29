const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const indexRoutes = require('./routes/indexRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');
const emailRoutes = require('./routes/emailRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/', indexRoutes);
app.use('/cadastro', cadastroRoutes);
app.use('/emails', emailRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});