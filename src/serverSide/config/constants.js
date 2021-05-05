'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var devConfig = {
  MONGO_URL: "mongodb://127.0.0.1:27017/",
  // `mongodb://${process.env.DB_USER}:${process.env
  // 	.DB_PASS}@ds141368.mlab.com:41368/votingapp`,
  TWITTER_STRATEGY: {
    consumerKey: "iyN0ZYxpXkekCZ1Vn0VrqA4aN",
    consumerSecret: "klPlUap1WmKjurpWNETM9bF5KS13b1luPW1O3U1RK2L74APpGl",
    callbackURL: "http://localhost:3000/api/auth/twitter/callback",
    passReqToCallback: true
  }
};
var prodConfig = {
  MONGO_URL: "mongodb://127.0.0.1:27017/",
  // `mongodb://${process.env.DB_USER}:${process.env
  // 	.DB_PASS}@ds141368.mlab.com:41368/votingapp`,
  TWITTER_STRATEGY: {
    consumerKey: "iyN0ZYxpXkekCZ1Vn0VrqA4aN",
    consumerSecret: "klPlUap1WmKjurpWNETM9bF5KS13b1luPW1O3U1RK2L74APpGl",
    callbackURL: "http://localhost:3000/api/auth/twitter/callback",
    passReqToCallback: true
  }
};

var defaultConfig = {
  PORT: process.env.PORT || 3000,
  LOCAL_STRATEGY: {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));