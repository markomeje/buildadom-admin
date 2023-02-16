const Dotenv = require('dotenv-webpack');

module.exports = {

   plugins: [
      new Dotenv({
         allowEmptyValues: true,
         systemvars: true,
         silent: true,
      })
   ]
};