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
            url: '/billingCycles?page',
            templateUrl: 'billingCycle/tabs.html'
        })

        // Estado padrão
        //$urlRouterProvider.otherwise('/dashboard')
    }
])
.run([
    '$rootScope',
    '$http',
    '$location',
    '$window',
    'auth',
    function($rootScope, $http, $location, $window, auth) {
        validaUser()
        $rootScope.$on('$locationChangeStart', () => validaUser())

        function validaUser() {
            const user = auth.getUser()
            const authPage = '/auth.html'
            const isAuthPage = $window.location.href.includes(authPage)

            if (!user && !isAuthPage) {
                $window.location.href = authPage
            } else if (user && !user.isValid) {
                auth.validateToken(user.token, (err, valid) => {
                    if (!valid) {
                        $window.location.href = authPage
                    } else {
                        user.isValid = true
                        $http.defaults.headers.common.Authorization = user.token
                        isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')
                    }
                })
            }
        }        
    }
])