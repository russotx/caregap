const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const configDB = require('./config/database.js')
 
const app = express()

//const events = require('./src/events.js')

const localPORT = 3001
app.set('port', (process.env.PORT || localPORT))

const localMongo = 'mongodb://localhost/caregap'
const mongoURI = 'mongodb://'
mongoose.connect(localMongo)
const db = mongoose.connection

const schema = mongoose.Schema
const userSchema = schema({
  user : { 
    username : {
      type: String,
      trim: true,
      required: "username is required"
    },
    password : {
      type: Number,
      trim: false,
      required: "password is required"
    }
  }
  
})

let user = mongoose.model('user', userSchema)
//require('./config/passport')(passport) // pass passport for configuration

//app.use(morgan('dev')) // log every request to the console
app.use(cookieParser()) // read cookies for auth
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//app.use(session({secret:'takecareofyourfriends'})) // session secret
//app.use(passport.initialize()) 
//app.use(passport.session()) // persistent login sessions
//app.use(flash()) // flash messages stored in session

// load routes and pass in the app and 
// fully configured passport
//require('./app/routes.js')(app, passport) 

db.on('error', console.error.bind(console,'# Mongo DB: connection error:'))

app.post('/login',(req,res)=>{

})

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(app.get('port'),function(){
  console.log("Express server started on port",app.get('port'));
})
