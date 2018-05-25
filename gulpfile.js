var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy', function() {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist/'))
});

gulp.task('copycss', function() {
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('sass', function() {
	return gulp.src('app/style/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/style/'))
});

gulp.task('watch', function() {
	gulp.watch('app/**/*', ['copy', 'sass'])
});
