"use strict";
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('Default task!');
});

gulp.task('copy-files', function(){
    gulp.src('client/**/*')
        .pipe(gulp.dest('build'));
});