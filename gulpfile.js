const gulp = require("gulp");
const clean = require("del");

gulp.task("clean", function(){
  return clean("./build");
});

gulp.task("html", function(){
  return gulp.src("./source/**/*.html").pipe(gulp.dest("./build"));
});

gulp.task("css", function(){
  return gulp.src("./source/**/*.css").pipe(gulp.dest("./build"));
});

gulp.task("javascript", function(){
  return gulp.src("./source/**/*.js").pipe(gulp.dest("./build"));
});

gulp.task("images", function(){
  return gulp.src(["./source/**/*.png", "./source/**/*.jpg"]).pipe(gulp.dest("./build"));
});

gulp.task("build", gulp.series("clean", gulp.parallel("html", "css", "javascript", "images")));