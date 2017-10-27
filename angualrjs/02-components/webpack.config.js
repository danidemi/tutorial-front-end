const path = require('path');

module.exports = {

    // entry tells Webpack which files are the entry points of your application.
    // Those are your main files, that sit at the top of your dependency tree.
    entry: ['./src/app/index.js', "./src/index.html", "./src/app/components/stepper/stepper.html"],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/dist')
    },

    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'file-loader',

                // only our files, not the libraries from npm!
                include: path.resolve(__dirname + '/src'),

                options: {
                    //name: '[path][name].[ext]'
                    name: '[name].[ext]'
                }

            },

            {
                // A condition may be
                // - a RegExp (tested against absolute path),
                // - a string containing the absolute path,
                // - a function(absPath): bool,
                // or an array of one of these combined with “and”.

                // only files ending with .js
                test: /\.js/,

                loader: 'babel-loader',

                // only our files, not the libraries from npm!
                include: path.resolve(__dirname + '/src')
            }
        ]
    },

    stats: "verbose"

};

