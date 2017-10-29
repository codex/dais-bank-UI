const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const systemjsBuilder = require('gulp-systemjs-builder');
const del = require('del');
const shell = require('gulp-shell');

gulp.task('server', () => {
    gulp.src('./dev')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html',
        }));
});

gulp.task('scss-compile', () => {
    gulp.src('./dev/scss/**/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'));
});

gulp.task('clean-maincss', () => del('./dev/css/main.css'));

gulp.task('scss-watch', () => {
    gulp.watch('./dev/scss/**/*.scss', ['clean-maincss', 'scss-compile']);
});

gulp.task('compileJS', () => {
    const builder = systemjsBuilder('./', './dist/config/systemjs-build.config.js');
    builder.buildStatic('./dev/app/app.js', 'bundle.js', {
        minify: true,
        mangle: false,
    })
        .pipe(gulp.dest('./dist'));
});

gulp.task('cleanCSS', () => {
    gulp.src('./dev/css/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['compileJS', 'cleanCSS'], () => {
    gulp.src(['./dev/assets/**/*', './dev/views/**/*'], { base: './dev' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', shell.task([
    'firebase deploy',
]));

gulp.task('dev', ['scss-compile', 'scss-watch', 'server']);
