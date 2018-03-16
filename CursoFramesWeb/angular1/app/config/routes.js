angular.module('primeiraApp').config([

    '$stateProvider',
    '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // Estado do 'dashboard'
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        })
        // Estado do 'Ciclo de pagamentos'
        .state('billingCycle', {
            url: '/billingCycles',
            templateUrl: 'billingCycle/tabs.html'
        })

        // Estado padrão
        $urlRouterProvider.otherwise('/dashboard')
    }
])