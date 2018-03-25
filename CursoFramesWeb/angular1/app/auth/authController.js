(function() {
    angular.module('primeiraApp').controller('AuthCtrl', [
        '$location',
        'msgs',
        AuthController
    ])

    function AuthController($location, msgs) {
        const vm = this

        vm.getUser = () => ({
            name: 'Felipe Acelino',
            email: 'felipeacelino@hotmail.com'
        })

        vm.logout = () => {
            console.log('Logout...')
        }
    }
})()