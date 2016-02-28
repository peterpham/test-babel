var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task("scripts", function () {
  return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('compress', ['scripts'], function() {
  return gulp.src(['dist/*.js', '!dist/*.min.js', '!dist/all.js'])
  	.pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('dist'))
    ;
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['scripts', 'compress']);
});

// Default Task
gulp.task('default', ['scripts', 'compress', 'watch']);