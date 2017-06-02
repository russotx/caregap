const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const configDB = require('./config/database.js')

const app = express()

const localMongo = 'mongodb://localhost/caregap'
const mongoURI = 'mongodb://'

const localPORT = 3001

app.set('port', (process.env.PORT || localPORT))

mongoose.connect(localMongo)

const userSchema = new schema({
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
app.use(morgan('dev')) // log every request to the console
app.use(cookieParser()) // read cookies for auth
app.use(bodyParser()) // get info from html forms

app.use(session({secret:'takecareofyourfriends'})) // session secret
app.use(passport.initialize()) 
app.use(passport.session()) // persistent login sessions
app.use(flash()) // flash messages stored in session

// load routes and pass in the app and 
// fully configured passport
require('./app/routes.js')(app, passport) 

app.listen(app.get('port'), () => console.log('listening port', app.get('port')))

app.post('/login',(req,res)=>{

})


