const gulp = require("gulp");
const clean = require("del");
const htmlMin = require("gulp-htmlmin");
const cssMin = require("gulp-csso");
const jsUglify = require("gulp-uglify");
const babel = require("gulp-babel");
const autoPrefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const replace = require("gulp-html-replace");
const browserSync = require("browser-sync").create();

gulp.task("clean", function () {
  return clean("./build");
});

gulp.task("html", function () {
  return gulp.src("./source/**/*.html")
    .pipe(replace({
      javascript: "js/script.min.js"
    }))
    .pipe(htmlMin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./build"));
});

gulp.task("css", function () {
  return gulp.src("./source/**/*.css")
    .pipe(autoPrefixer())
    .pipe(cssMin())
    .pipe(gulp.dest("./build"));
});

gulp.task("javascript", function () {
  return gulp.src(["./source/js/utils.js", "./source/js/functions.js", "./source/js/script.js"])
    .pipe(concat("script.min.js"))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(jsUglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("images", function () {
  return gulp.src(["./source/**/*.png", "./source/**/*.jpg"]).pipe(gulp.dest("./build"));
});

gulp.task("build", gulp.series("clean", gulp.parallel("html", "css", "javascript", "images")));

gulp.task("server", function(){
  browserSync.init({
    server: "./source/"
  });
  gulp.watch("./source/**/*", function(finalizar){
    browserSync.reload();
    finalizar();
  });
});