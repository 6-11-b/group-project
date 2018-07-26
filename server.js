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
var userType = "";
var currentUser = {};

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

app.set("port", process.env.PORT || 5000);

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

//Security and Login Strategy
passport.use(
    new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        console.log("Starting Login");
        if ( userType == "tenant") {
            db.collection('tenant').find({ email: email }).toArray(function(err, user) {
                console.log(user);
                if (!user) {
                console.log("No User");
                return done(null, false);
                }
                if(password === user[0].password) {
                    console.log("Success Local Strategy");
                    currentUser = {email: user[0].email, ID: user[0]._id};
                    return done(null, user);
                } else {
                    console.log("Password Fail");
                    return done(null, false);
                }
            })
        }
        else if ( userType == 'owner' ) {
            db.collection('owner').find({ email: username }).toArray(function(err, user) {
                console.log(user);
                if (!user) {
                console.log("No User");
                return done(null, false);
                }
                if(password === user[0].password) {
                    console.log("Success Local Strategy");
                    currentUser = {email: user[0].email, ID: user[0]._id};
                    return done(null, user);
                } else {
                    console.log("Password Fail");
                    return done(null, false);
                }
            })
        }
        else {
            console.log('Login Error');
        }
    })
);

passport.serializeUser(function(user, done) {
    done(null, user[0]._id);
    console.log("Success Serialize");
});

/* needs to be integrated to mongodb */
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
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
*/
// Development mode port

app.get("/api/hello", (req, res) => {
    console.log("Fetching /api/hello");
    console.log(currentUser);
    res.send({message: ""});
});

app.post("/api/signup", function (req, res) {
    console.log("Posting /api/signup");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.user);
    if (req.body.user == "tenant") {
        db.collection('tenant').save({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(
            console.log('Successful tenant creation')
        ).then(
            res.redirect(303, '/')
        ).catch(function(err) {
            console.log(err, req.body)
        });
    }
    else if (req.body.user == 'owner') {
        db.collection('owner').save({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(
            console.log('Successful owner creation')
        ).then(
            res.redirect(303, '/')
        ).catch(function(err) {
            console.log(err, req.body)
        });
    }
    else {
        res.send({message: "Choose user type"});
    }
});

app.post('/api/login', function( req, res, next) {
    console.log(req.body.email);
    console.log(req.body.password);
    userType = req.body.user;
    console.log(userType);
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
      })(req, res, next);
      console.log(currentUser);
});

app.post('/api/request', function( req, res, next) {
    db.collection('maintenance').save({
        user: req.body.user,
        name: req.body.firstlastname,
        email: req.body.email,
        address: req.body.address,
        date: req.body.date,
        request: req.body.maintenancerequest
    }).then(
        console.log('Successful mantinence request generation')
    ).then(
        res.redirect(303, '/')
    ).catch(function(err) {
        console.log(err, req.body)
    });

});

app.post('/api/rental', function( req, res, next) {
    db.collection('rentalApplication').save({
        todaysDate: req.body.todaysDate,
        address: req.body.address,
        rent: req.body.rent,
        deposit: req.body.deposit,
        moveInDate: req.body.moveInDate,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        applicantdob: req.body.applicantdob,
        applicantsocial: req.body.applicantsocial,
        applicantlicense: req.body.applicantlicense,
        applicantphone: req.body.applicantphone,
        applicantemail: req.body.applicantemail,
        coapplicant: req.body.coapplicant,
        codob: req.body.codob,
        cosocial: req.body.cosocial,
        colicense: req.body.colicense,
        cophone: req.body.cophone,
        coemail: req.body.coemail,
        currentaddress: req.body.currentaddress,
        currentpayment: req.body.currentpayment,
        currentowner: req.body.currentowner,
        currenttype: req.body.currenttype,
        currentfromdate: req.body.currentfromdate,
        currenttodate: req.body.currenttodate,
        currentlandlordname: req.body.currentlandlordname,
        currentphone: req.body.currentphone,
        prioraddress: req.body.prioraddress,
        priorpayment: req.body.priorpayment,
        priorowner: req.body.priorowner,
        priortype: req.body.priortype,
        priorfromdate: req.body.priorfromdate,
        priortodate: req.body.priortodate,
        priorlandlordname: req.body.priorlandlordname,
        priorphone: req.body.priorphone,
        oc1firstlastname: req.body.oc1firstlastname,
        oc1dob: req.body.oc1dob,
        oc2firstlastname: req.body.oc2firstlastname,
        oc2dob: req.body.oc2dob,
        oc3firstlastname: req.body.oc3firstlastname,
        oc3dob: req.body.oc3dob,
        felony: req.body.felony,
        evicted: req.body.evicted,
        defaulted: req.body.defaulted,
        smoke: req.body.smoke,
        pets: req.body.pets,
        numberofpets: req.body.numberofpets,
        pettype: req.body.pettype,
        currentemployer: req.body.currentemployer,
        currentsupervisor: req.body.currentsupervisor,
        currentemployerphone: req.body.currentemployerphone,
        currentemployeraddress: req.body.currentemployeraddress,
        currentposition: req.body.currentposition,
        currentbusiness: req.body.currentbusiness,
        currentincome: req.body.currentincome,
        currentemploymentfromdate: req.body.currentemploymentfromdate,
        currentemploymenttodate: req.body.currentemploymenttodate,
        currentincome: req.body.currentincome,
        currentsource: req.body.currentsource,
        prioremployer: req.body.prioremployer,
        priorsupervisor: req.body.priorsupervisor,
        prioremployerphone: req.body.employerphone,
        prioremployeraddress: req.body.prioremployeraddress,
        priorposition: req.body.priorposition,
        priorbusiness: req.body.priorbusiness,
        priorincome: req.body.priorincome,
        prioremploymentfromdate: req.body.prioremploymentfromdate,
        prioremploymenttodate: req.body.prioremploymenttodate,
        bank: req.body.bank,
        checkingbankamount: req.body.checkingbankamount,
        savingbankamount: req.body.savingbankamount,
        cobank: req.body.cobank,
        cocheckingbankamount: req.body.cocheckingbankamount,
        cosavingbankamount: req.body.cosavingbankamount
    }).then(
        console.log('Successful tenant application')
    ).then(
        res.redirect(303, '/')
    ).catch(function(err) {
        console.log(err, req.body)
    });

});

MongoClient.connect('mongodb://user1:L36e21o707@ds221271.mlab.com:21271/propertymanagement', { useNewUrlParser: true }, (err, client) => {
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
