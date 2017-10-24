"use strict";
const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const filter = require('gulp-filter');

// gulp.task('default', function() {
//     gulp
//         .src('client/**/*.js')
//         .pipe(watch('**/*.js'))
//         .pipe(babel({presets: ['env']}))
//         .pipe(gulp.dest('build'));
//
//     // gulp
//     //     .src('client/**/*.html')
//     //     .pipe(watch('**/*.js'))
//     //     .pipe(gulp.dest('build'));
// });

gulp.task('default', function() {

    const jsFilter = filter('**/*.js', {restore: true});
    const htmlFilter = filter('**/*.html', {restore: true});

    return gulp
        .src('client/**/*')
        .pipe(watch('client/**/*'))

        .pipe(jsFilter)
        .pipe(babel({presets: ['env']}))
        .pipe(gulp.dest('build'))
        .pipe(jsFilter.restore)

        .pipe(htmlFilter)
        .pipe(gulp.dest('build'))
        .pipe(htmlFilter.restore)

    // gulp
    //     .src('client/**/*.html')
    //     .pipe(watch('**/*.js'))
    //     .pipe(gulp.dest('build'));
});

