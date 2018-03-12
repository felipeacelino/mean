// Importa as dependências
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

// Cria a task 'app'
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])

// Cria a task do HTML
gulp.task('app.html', () => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
})

// Cria a task do CSS
gulp.task('app.css', () => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

// Cria a task do JS
gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

// Cria a task do ASSETS
gulp.task('app.assets', () => {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})