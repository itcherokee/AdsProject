'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router', 'adsSystem.public', 'adsSystem.dal', 'adsSystem.user', 'adsSystem.admin', 'flow'])
    .run(['$state', '$rootScope', '$stateParams',
        function ($state, $rootScope, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            if (sessionStorage['user']) {
                $rootScope.$broadcast("UserLoggedIn", sessionStorage.user);

                if (sessionStorage['isAdmin'] == true){
                    $state.go('userHome');
                } else {
                    $state.go('adminHome');
                }
            } else {
                $state.go('home');
            }
        }]);