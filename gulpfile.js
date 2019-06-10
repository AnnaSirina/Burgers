const { src, dest, task, series, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;
sassGlob = require('gulp-sass-glob');


sass.compiler = require('node-sass');


task("clean", () => {
    return src( "dist/**/*", { read: false }).pipe(rm())
  })

  task("copy:html", () => {
    return src("src/**/*.html").pipe(dest("dist")).pipe(reload({stream:true}));
  });

  task("copy:img", () => {
    return src("src/img/*.*").pipe(dest("dist/img")).pipe(reload({stream:true}));
  });

  task("styles", () => {
    return src("src/styles/main.scss")
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat("main.min.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest("dist"))
    .pipe(reload({stream: true}));
  });

const libs = [
    "node_modules/jquery/dist/jquery.js",
    "src/scripts/*.js"
]

  task("scripts", () =>{
    return src(libs)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    //.pipe(uglify())
    .pipe(dest("dist"))
    .pipe(reload({stream: true}));
  })

  task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


  watch("./src/styles/**/*.scss", series("styles"));
  watch("./src/*.html", series("copy:html"));
  watch("./src/scripts/*.js", series("scripts"));
  task("default", series("clean", "copy:html", "styles", "scripts", "copy:img", "server"))
  task("build", series("clean", "copy:html", "styles", "scripts", "copy:img"))