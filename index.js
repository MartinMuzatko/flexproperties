var sass = require('node-sass');
var fs = require('fs');
var autoprefixer = require('autoprefixer');
var postcss      = require('postcss');



sass.render(
	{
		file: './src/flex-grid.scss',
		outputStyle: 'compressed'
	}, (err, result) => {
		console.log(err);
		console.log(result)
		fs.writeFile('./dist/flex-grid.min.css', result.css);
		postcss([ autoprefixer ]).process(result.css).then(function (result) {
			result.warnings().forEach(function (warn) {
				console.warn(warn.toString());
			});
			fs.writeFile('./dist/flex-grid.prefixed.min.css', result.css);
		});
	}
)
