'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');

gulp.task('sass-compile', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(concatCss("main.css"))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass-compile'))
})