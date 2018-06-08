
// Constante globale
console.log('Répertoire de base : ' + __dirname);
global.__basedir = __dirname;

// Gestion des imports
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let cors = require('cors');

// Imports des routeurs
const productRouter = require('./routes/product-routeur');
const userRouter = require('./routes/user-routeur');
// Création de l'application
let app = express();

// Paramétrage des connexions entrantes
const corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// Middlewares de base
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/fulljs');
let database = mongoose.connection;
database.on('error', (err) => console.log('[mongoose]  Connexion à MongoDB : echouée'));
database.once('open', () => console.log('[mongoose]  Connexion à MongoDB : réussie'));

// Routage
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

// Gestion erreur 404 : dans le cas où aucune route n'est trouvée
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log('[errorHandler] Erreur détectée');
  console.log(err);
  res.json(err);
});

module.exports = app;
