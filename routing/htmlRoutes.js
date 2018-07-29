var express = require('express'),
    router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))
})

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
});

module.exports = router;



