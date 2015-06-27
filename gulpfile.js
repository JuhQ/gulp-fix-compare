var gulp = require("gulp");

var fix = require("./index.js");

gulp.task("default", function() {
  return gulp.src("example/example.js")
    .pipe(fix())
    .pipe(gulp.dest("example/dest"));
});
