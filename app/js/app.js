'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router', 'adsSystem.public', 'adsSystem.dal'])
    .run(['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
        $rootScope.$state = $state;
//        $rootScope.user = {username:"pesho"};
        $rootScope.$stateParams = $stateParams;
        $state.go('home');
    }]);