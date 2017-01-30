var webpack = require('webpack')
var prism = require('./js/prism')
var autoprefixer = require('autoprefixer')

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var marked = require('marked')
var renderer = new marked.Renderer()
renderer.code = (code, language) => {
    if (!prism.languages.hasOwnProperty(language)) {
        language = 'js'
    }
    var html = prism.highlight(code, prism.languages[language])
    return `<pre class="language-${language}"><code class="language-${language}">${html}</code></pre>`
}


module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: '[name].js',
        sourceMapFilename: "[name].js.map",
    },
    module: {
        preLoaders: [
            { test: /\.html$/, loader: 'riotjs' },
            { test: /\.js$/, loader: 'eslint!source-map' },
        ],
        loaders: [
            { test: /\.md$/, loader: 'html!markdown'},
            { test: /\.(jpe?g|png|gif|svg|mp4)$/i, loader: 'file'},
            { test: /\.html$|\.js$/, loader: 'babel', query: { presets: 'es2015-riot' }},
            { test: /\.less$/, loader: ExtractTextPlugin.extract('raw!postcss!less')}, //'style!css?minimize!postcss!less'
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('raw!postcss!sass')}, //'style!css?minimize!postcss!sass'
        ]
    },
    markdownLoader: {
        renderer: renderer
    },
    postcss: () => {
        return [
            autoprefixer({browsers: 'last 2 versions'})
        ];
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        //new webpack.optimize.UglifyJsPlugin({warnings: false}),
        new ExtractTextPlugin("css/[name].css")
    ],
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
}
