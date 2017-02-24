var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var sass = require ('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename'); 
var concat = require('gulp-concat');  


gulp.task('sass', function () {
  return gulp.src([
    './src/*.scss',
    './src/css/*.scss',
    './src/app/*.scss',
    './src/app/banner/*.scss',
    './src/app/footer/*.scss',
    './src/app/navigator/*.scss',
    './src/app/content/about/*.scss',
    './src/app/content/adventure/*.scss',
    './src/app/content/findus/*.scss',
    './src/app/content/journal/*.scss',
    './src/app/content/post.entry/*.scss',
    './src/app/content/read/*.scss',
    './src/app/content/shop/*.scss'

    ])
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))

    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./src/dist/'));
});

gulp.task('css', function () {
  gulp.src([
    './src/*.css',
    './src/css/*css',
    './src/app/*.css',
    './src/app/banner/*.css',
    './src/app/footer/*.css',
    './src/app/navigator/*.css',
    './src/app/content/about/*.css',
    './src/app/content/adventure/*.css',
    './src/app/content/findus/*.css',
    './src/app/content/journal/*.css',
    './src/app/content/post.entry/*.css',
    './src/app/content/read/*.css',
    './src/app/content/shop/*.css'

    ])
    .pipe(concat('all.css'))
    .pipe(rename('style.min.css'))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./src/dist/'));
});

gulp.task('watch', function () {
    // Endless stream mode 
     gulp.watch([
    './src/*.scss',
    './src/css/*.scss',
    './src/app/*.scss',
    './src/app/banner/*.scss',
    './src/app/footer/*.scss',
    './src/app/navigator/*.scss',
    './src/app/content/about/*.scss',
    './src/app/content/adventure/*.scss',
    './src/app/content/findus/*.scss',
    './src/app/content/journal/*.scss',
    './src/app/content/post.entry/*.scss',
    './src/app/content/read/*.scss',
    './src/app/content/shop/*.scss'

    ], ['sass'])
     gulp.watch([
    './src/*.css',
    './src/css/*css',
    './src/app/*.css',
    './src/app/banner/*.css',
    './src/app/footer/*.css',
    './src/app/navigator/*.css',
    './src/app/content/about/*.css',
    './src/app/content/adventure/*.css',
    './src/app/content/findus/*.css',
    './src/app/content/journal/*.css',
    './src/app/content/post.entry/*.css',
    './src/app/content/read/*.css',
    './src/app/content/shop/*.css'

    ], ['css'])
        });