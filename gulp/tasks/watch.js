var gulp            = require("gulp"),
    watch           = require("gulp-watch");
    
gulp.task("default", function() {
    console.log("default gulp task");
});

gulp.task("watch", function() {
    watch("./app/assets/styles/**/*.css", function() {
        console.log("updated styles.css");
        gulp.start("styles"); 
    });
});