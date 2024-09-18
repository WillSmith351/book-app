const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const dbURL = process.env.DB_URL || 'mongodb://admin:password@localhost:27017/bookapp';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connecté'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.use('/api', bookRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});