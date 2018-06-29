// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const passport = require("passport"),
LocalStrategy = require("passport-local").Strategy

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var db

// PRODUCTION ONLY
// app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

//Security and Login Strategy
passport.use(
    new LocalStrategy(function(username, password, done) {
        db.collection('User').find({ username: username }).toArray(function(err, user) {
            if (!user) {
            console.log("No User");
            return done(null, false);
            }
            if(password === user[0].password) {
                console.log("Success Local Strategy");
                currentUser = {username: user[0].username, ID: user[0]._id};
                return done(null, user);
            } else {
                console.log("Password Fail");
                return done(null, false);
            }
        })
    })
);

passport.serializeUser(function(user, done) {
    done(null, user[0]._id);
    console.log("Success Serialize");
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(user => {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
        })
        .catch(err => done(err, false));
    console.log("Success deserialize");
});

app.use(passport.initialize());
app.use(passport.session());

// PRODUCTION ONLY
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// Development mode port

app.set("port", process.env.PORT || 5000);

MongoClient.connect('mongodb://user1:L36e21o707@ds221271.mlab.com:21271/propertymanagement', (err, client) => {
    if (err) { return console.log(err) }
    db = client.db('propertymanagement');
    app.listen(app.get("port"), () => {
        console.log(
            "Express started on http://localhost:" +
            app.get("port") +
            "; press Ctrl-C to terminate."
        );
    })
});

module.exports = app;
