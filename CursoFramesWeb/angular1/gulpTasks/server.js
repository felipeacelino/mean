// Importa as dependências
const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

// Cria a task 'watch'
gulp.task('watch', () => {
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

// Cria a task 'server'
gulp.task('server', ['watch'], () => {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }))
})