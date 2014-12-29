'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router', 'adsSystem.ads'])
    .run(['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('home');
    }]);