let mongoose = require("mongoose");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let User = require("../../models/user");

//const User = mongoose.model('User')

const register = (req, res) => {
  const newUser = new User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({ message: err });
    } else {
      user.hashPassword = null; // don't expose hashed password!!!!!!!
      return res.json(user);
    }
  });
};

const login = (req, res) => {
  console.log("Login try... ", req);
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      if (err) throw err;
      console.log("User value ... ", user[0]);
      if (!user) {
        console.log("Email verified ", req.body.email);

        res.status(401).json({
          message: "Authentication failed, No credentials coincidence"
        });
      } else if (user) {
        if (!user.comparePassword(req.body.password, user.hashPassword)) {
          res.status(401).json({
            message: "Authentication failed, No password coincidence"
          });
        } else {
          res.json({
            token: jwt.sign(
              {
                email: user.email,
                username: user.username,
                _id: user.id
              },
              "Restful API"
            )
          });
        }
      }
    }
  );
};

//THIS IS a MIDDLEWARE
const loginRequired = (req, res, next) => {
  //console.log(req);
  //  UNSECURE!!!!!
  if (req.user) {
    next();
  } else {
    res.status(401).json({
      message: "Authentication failed, Unauthorized user"
    });
  }
};

module.exports = {
  register,
  loginRequired,
  login
};
