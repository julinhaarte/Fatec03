const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const setupSwagger = require('./swagger');

const app = express();
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/exercicio5', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Rotas
app.use('/api', userRoutes);
app.use('/api', projectRoutes);

// Swagger
setupSwagger(app);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta 3000`);
});
