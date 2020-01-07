const path = require('path');

module.exports = env => ({
    entry: './src/LevelEditor.ts',
    mode: env.production ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'leveleditor.js',
        path: path.resolve(__dirname, 'public',),
        library: 'leveleditor',
        libraryTarget: 'window'
    },
    watch: env.production ? false : true,
});