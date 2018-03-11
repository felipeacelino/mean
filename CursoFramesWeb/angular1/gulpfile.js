// Importa as dependências
const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

// Importa as tasks
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

// Cria a task 'default'
gulp.task('default', () => {
    // Verifica se está rodando em 'production'
    if (util.env.production) {
        sequence('deps', 'app')
    }
    // Caso contrário é executado em 'dev'
    else {
        sequence('deps', 'app', 'server')
    }
})