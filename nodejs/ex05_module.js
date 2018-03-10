/* console.log(global == this)
console.log(module == this)
console.log(module.exports == this) */

const digaOi = () => console.log('Oiii! ^^')

//module.exports.digaOi = digaOi;
this.digaOi = digaOi; // Mesma coisa que o de cima