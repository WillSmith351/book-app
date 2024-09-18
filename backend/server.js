const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/book-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connecté'))
    .catch(err => console.error(err));

app.use('/api', bookRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});