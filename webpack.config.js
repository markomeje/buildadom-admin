const Dotenv = require('dotenv-webpack');

module.exports = {
   module: {
      rules: [
         {
         test: /\.css$/i,
         use: [
            // The `injectType`  option can be avoided because it is default behaviour
            { loader: "style-loader", options: { injectType: "styleTag" } },
            "css-loader",
         ],
         },
      ],
   },
   plugins: [
      new Dotenv({
         allowEmptyValues: true,
         systemvars: true,
         silent: true,
      })
   ]
};