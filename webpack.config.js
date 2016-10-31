module.exports = {
    entry: "./src/entry.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['es2015','react']
         }
        },{
          test: /\.scss$/,
          loader: 'style!css?sourceMap!postcss!sass?outputStyle=expanded',
        },{
          test: /\.css$/,
          loader: 'style!css!postcss'
        }
      ]
    }
};
