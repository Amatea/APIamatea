var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');
var sass          = require('gulp-sass');

// Where our files are located
var jsFiles   = "src/js/**/*.js";
// var viewFiles = "src/js/**/*.html";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


gulp.task('browserify', function() {
  return browserify('./public/js/app2.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./public/build/'));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

// gulp.task('img', function() {
//   return gulp.src("./public/img/**/*.*")
//       .on('error', interceptErrors)
//       .pipe(gulp.dest('./public/build/img'));
// });

// gulp.task('views', function() {
//   return gulp.src(viewFiles)
//       .pipe(templateCache({
//         standalone: true
//       }))
//       .on('error', interceptErrors)
//       .pipe(rename("app.templates.js"))
//       .pipe(gulp.dest('./src/js/config/'));
// });

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("public/src/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(js, html);
});

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/build'));
});


gulp.task('default', ['html', 'browserify', 'sass']);
