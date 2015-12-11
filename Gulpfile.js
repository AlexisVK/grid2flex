var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	gulp.src('src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./demo/'));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('src/**/*.scss',['styles']);
});