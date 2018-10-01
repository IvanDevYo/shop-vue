var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    gutil          = require("gulp-util"),
    notify         = require("gulp-notify"),
    autoprefixer   = require('gulp-autoprefixer'),
    rename         = require('gulp-rename'),
    webpack        = require('webpack');

    gulp.task("webpack", function(callback) {
        // run webpack
        webpack(require('./webpack.config.js'), function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
        browserSync.reload();
    });

    gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: 'src'
			},
			notify: false,
			// tunnel: true,
			// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
		});
	});

    gulp.task('styles', function() {
        return gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['last 15 versions']))
        //.pipe(cleanCSS()) // Опционально, закомментировать при отладке
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
    });

    gulp.task('watch', ['styles', 'webpack', 'browser-sync'], function() {
        gulp.watch('src/sass/**/*.scss', ['styles']);
        gulp.watch(['src/common.js', 'src/router.js'], ['webpack']);
        gulp.watch('src/**/*.vue', ['webpack']);
        gulp.watch('src/*.html', browserSync.reload);
    });

    gulp.task('default', ['watch']);