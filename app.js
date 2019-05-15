import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import exhbs from 'express-handlebars';
import router from './api/charge';

// create server
const app = express();

// handlebars middleware
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, './public/')));

// set index route
// @route   /
// @desc     Get Home page
// @access   Public
// @method   GET
app.get('/', (req, res) => { res.render('index'); });

// set server to use router
app.use(router);

// declare port variable
const port = process.env.PORT || 8080;

// set server to listen on corresponding port
app.listen(port, () => { console.log(`Server started on port ${port}`); }); // eslint-disable-line no-console
