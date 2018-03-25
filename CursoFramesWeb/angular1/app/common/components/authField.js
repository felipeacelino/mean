// Cria o component 'field'
(function () {
    angular.module('primeiraApp').component('authField', {
        bindings: {
            id: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            iconClass: '@',
            hide: '<'
        },
        template: `
        <div class="form-group">
            <input type="{{ $ctrl.type }}" id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" ng-model="$ctrl.model" ng-hide="$ctrl.hide" />       
        </div>
        `
    })
})()
