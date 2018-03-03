var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models/');
var apiRoutes = require('./routes/apiRoutes.js');
var puerto = process.env.PORT || 3001;

// Sets up the Express up to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//apiRoutes(app,db);
apiRoutes(app);
db.sequelize.sync().then(() => {
    app.listen(puerto, () => {
        console.log(`\n ==========> Escucha en el Puerto ${puerto}`);
    });
});


