var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function () {
    browserify('./src/js/main.js')
        .transform('babelify', {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
});


gulp.task('default', ['browserify', 'copy'], function () {
    return gulp.watch('./src/**/*.*', ['browserify', 'copy'])
});
