const path = require('path');

module.exports = {

    // entry tells Webpack which files are the entry points of your application.
    // Those are your main files, that sit at the top of your dependency tree.
    entry: './client/js/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        loaders: [
            {
                // only files ending with .js
                test: /\.js/,

                loader: 'babel-loader',

                // only files in client
                include: path.resolve(__dirname + '/client')
            }
        ]
    }

};

