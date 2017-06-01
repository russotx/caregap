const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')

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

app.post('/login',(req,res)=>{

})


