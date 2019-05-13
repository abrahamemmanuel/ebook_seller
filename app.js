import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import exhbs from 'express-handlebars';
import Stripe from 'stripe';

const stripe = Stripe('sk_test_uIqCbzlQpxpJSRU1BD3clJ2m00qicSok3M');

// create server
const app = express();

// handlebars middleware
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// set static folder
app.use(express.static(path.join(__dirname, './public/')));

// set index route
app.get('/', (req, res) => { res.render('index'); });

// declare port variable
const port = process.env.PORT || 8080;

app.listen(port, () => { console.log(`Server started on port ${port}`); }); // eslint-disable-line no-console
