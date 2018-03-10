process.stdout.write('Como foi seu dia? ')
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua resposta foi ${data}Obrigado!\n`)
    process.exit()
})

