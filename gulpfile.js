var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function () {
    gulp.watch('**/*.pug', function() {
        gulp.run('pug');
    });
    gulp.watch('**/*.less', function() {
        gulp.run('less');
    });
    gulp.run('pug');
    gulp.run('less');
});

gulp.task('less', function() {
    return gulp.src('./style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('pug', function() {
    return gulp.src('index.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('./build'))
});
