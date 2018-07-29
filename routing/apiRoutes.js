var express = require('express'),
    router = express.Router();
var bodyParser = require('body-parser');
var friends = require('./../data/friends.js');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


router.get('/', function (req, res) {
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var ss = [];
    var difference = [];
    for (i = 0; i < friends.length; i++) {
        ss.push(friends[i].scores.reduce(reducer));
    }
    for (j = 0; j < ss.length - 1; j++) {
        difference.push(Math.abs(ss[j] - ss[ss.length - 1]));
    }
    var bestMatch = Math.min(...difference);
    let bestMatchIndex = difference.indexOf(bestMatch);
    friends[friends.length - 1].bestMatchIndex = bestMatchIndex;
    res.json(friends);

})

router.post('/', function (req, res) {
    var newProfile = req.body;
    newProfile.scores = newProfile.scores.map(x => parseInt(x));
    friends.push(newProfile);
    res.json(newProfile);
})


module.exports = router;


// module.exports = function(appli) {
//     app.get('/api/friends', function(req, res) {
//         res.friends(friends)
//     });

// }