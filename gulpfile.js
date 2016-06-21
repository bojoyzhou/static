var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    gulp.watch('**/*.pug', function() {
        try{
            gulp.run('pug');
        }catch(e){

        }
    });
    gulp.watch('**/*.less', function() {
        try{
            gulp.run('less');
        }catch(e){

        }
    });
    gulp.run('pug');
    gulp.run('less');
});

gulp.task('less', function() {
    return gulp.src('./all.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
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
