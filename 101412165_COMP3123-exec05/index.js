const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const router = express.Router();
app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
  const userFilePath = path.join(__dirname, 'user.json');

  fs.readFile(userFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read user data' });
    }
    
    try {
      const userData = JSON.parse(data); 
      res.json(userData); 
    } catch (parseError) {
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});
/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Reading the file using fs
  fs.readFile('user.json', 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ error: "Server error" });
      }
      const user = JSON.parse(data);
      // Checking if the username matches the one passed by client
      if (username !== user.username) {
          res.json({ status: false, message: "User Name is invalid" });
          // Checking if the password matches the one passed by client
      } else if (password !== user.password) {
          res.json({ status: false, message: "Password is invalid" });
          // Response if both are valid
      } else {
          res.json({ status: true, message: "User Is valid" });
      }
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
// Open ended message when some if logging out
router.get('/logout/:username', (req, res) => {
  const { username } = req.params;

  // Read user data from user.json
  fs.readFile('user.json', 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ error: "Unable to read user data" });
      }

      const user = JSON.parse(data);

      // Check if the username matches the one in user.json
      if (username === user.username) {
          res.send(`<b>${username} successfully logged out.<b>`);
      } else {
          res.status(403).send('Invalid username. You are not allowed to log out this user.');
      }
  });
});
/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error'); 
});

router.get('/cause-error', (req, res) => {
  // Manually throw an error
  throw new Error('This is a manually triggered error!');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));