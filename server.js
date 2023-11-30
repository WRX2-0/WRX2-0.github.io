const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3003;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

const { books } = require('./data/Books')


function createNewBooks(body, booksArray) { 
  const book = body; 
  booksArray.push(book); 
  fs.writeFileSync(
    path.join(__dirname, './data/Books.json'),
    JSON.stringify({ books: booksArray}, null, 2)
  ); 
  return book; 
}


app.get('/api/books', (req, res) => {
  let results = books;  
  res.json(results);
});

app.post('/api/books', (req, res) => {
  
  req.body.id = books.length.toString();
  const book = createNewBooks(req.body, books);
  res.json(book);
  }
);

app.get('/create-post', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index2.html'));
});

app.get('/view-all-books', (req, res) => {
  res.sendFile(path.join(__dirname, './public/view-all-books.html'));
});



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});