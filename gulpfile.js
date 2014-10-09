gulp = require('gulp')
gutil = require('gulp-util')

jade = require('jade')
fs = require('fs')

gulp.task('jade', function() {
  html = jade.renderFile('./index.jade');
  fs.writeFileSync('./index.html', html);
})

gulp.task('watch', function () {
  gulp.watch('./index.jade', ['jade']);
})

gulp.task('default', ['jade', 'watch'])