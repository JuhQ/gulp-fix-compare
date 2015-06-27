# gulp-fix-compare


Changes == and != to === and !==


```
var fix = require("gulp-fix-compare");

gulp.task("default", function() {
  return gulp.src("example/example.js")
    .pipe(fix())
    .pipe(gulp.dest("example/dest"));
});

```