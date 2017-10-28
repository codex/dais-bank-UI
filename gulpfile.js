const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html',
        }));
});

gulp.task('scss-compile', () => {
    gulp.src('./scss/**/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('clean-maincss', () => del('./css/main.css'));

gulp.task('dev-styles', ['clean-maincss'], () => {
    gulp.src('./css/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('scss-watch', () => {
    gulp.watch('./scss/**/*.scss', ['clean-maincss', 'scss-compile']);
});

gulp.task('dev', ['scss-compile', 'scss-watch', 'server']);
