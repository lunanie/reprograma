'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
// var watch = require('gulp-watch');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', ()=> {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/'));
});
 
gulp.task('watch',  function()  {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
});
