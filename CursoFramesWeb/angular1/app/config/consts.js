angular.module('primeiraApp').constant('consts', {
    appName: 'Primeira App',
    version: '1.0',
    owner: 'Felip Acelino',
    year: '2018',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
}])