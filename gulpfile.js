var gulp            = require("gulp"),
    watch           = require("gulp-watch"),
    postcss         = require("gulp-postcss"),
    autoprefixer    = require("autoprefixer"),
    cssvars         = require("postcss-simple-vars"),
    nested          = require("postcss-nested"),
    cssimport       = require("postcss-import"),
    browserSync     = require("browser-sync").create();

gulp.task("default", function() {
    console.log("Hoorah");
});

gulp.task("styles", function() {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: "app"
        } 
    });
    watch("./app/index.html", function() {
        gulp.start("default");
    });
    watch("./app/assets/styles/**/*.css", function() {
        gulp.start("styles"); 
    });
});