// Build tools
const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel')
  rename = require('gulp-rename');

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
		.pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function(done) {
  const port = 4000;
  const express = require('express');
  const app = express();
  app.use(express.static(__dirname));
  app.listen(port, function () {
     done();
  });
  console.log('Site served on http://localhost:' + port)
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.*', ['js']);
});

gulp.task('default', ['js', 'watch']);
gulp.task('dist', ['js']);