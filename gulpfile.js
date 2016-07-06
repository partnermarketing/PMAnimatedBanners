// Build tools
const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel');

// Compilers
const browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer');

// Package Object
const pkg = require('./package.json');

// Build JS
gulp.task('js', function() {
	return browserify()
		.transform("babelify", {
			presets: ["es2015"]
		})
		.add('./src/index.js')
		.bundle()
		.pipe(source('pmAnimatedBanners.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.*', ['js']);
});

gulp.task('default', ['js', 'watch']);