'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router', 'adsSystem.public', 'adsSystem.dal', 'adsSystem.user'])
    .run(['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('home');
    }]);