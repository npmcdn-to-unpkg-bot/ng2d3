var gulp = require('gulp');
var del = require('del');

var paths = {
	scripts: ['App/**/*.js', 'App/**/*.map'],
	libs: ['node_modules/angular2/bundles/angular2.js',
		'node_modules/angular2/bundles/angular2-polyfills.js',
		'node_modules/systemjs/dist/system.src.js',
		'node_modules/rxjs/bundles/Rx.js']
};

gulp.task('lib', function () {
	gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
});

gulp.task('clean', function () {
	return (del(['wwwroot/scripts/**/*']));
});


gulp.task('default', function () {
	gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});