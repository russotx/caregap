const path = require('path')

module.exports = function(app,passport) {

  app.get('/', (req,res) => {   
    res.sendFile(path.join(__dirname,'../Build','index.html'))
  })

  app.get('/login', (req,res) => {
    // send to login.html and flash data if it exists
    res.sendFile(path.join(__dirname,'../Build','login.html'), {message: req.flash('loginMessage') })
  })

  // process login form
  //  app.post('/login', /* do stuff here */ )

  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'../Build','signup.html'), {message: req.flash('singupMessage') })
  })

  // process signup form
  //  app.post('/signup', /* do stuff here */)

  app.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
  })

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { 
      // user is logged in = proceed
      return next()
    }
    // not logged in = go back to /
    else {
        res.redirect('/')
    }
  }

}
