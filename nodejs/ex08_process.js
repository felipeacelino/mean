function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--nointro')) {
    console.log('Sem introdução!')
} else {
    console.log('Com introdução!')
}