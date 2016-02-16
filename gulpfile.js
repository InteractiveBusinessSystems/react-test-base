var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    connect = require('gulp-connect');

gulp.task('browserify', function () {
    browserify('./src/js/main.js')
        .transform('babelify', {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', ['browserify'], function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('serve', ['copy'], function() {
    gulp.watch('./src/**/*.*', ['copy']);
    connect.server({
        root: 'dist',
        port: 3003
    });
});

gulp.task('default', ['copy']);
