'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router', 'adsSystem.dal', 'adsSystem.public', 'adsSystem.user', 'adsSystem.admin', 'flow'])
    .run(['$state', '$rootScope', '$stateParams', 'authService',
        function ($state, $rootScope, $stateParams, authService) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

//            if (sessionStorage['user']) {
            if (authService.isLoggedIn()) {
                $rootScope.$broadcast("UserLoggedIn", authService.username);

                if (authService.isAdmin) {
                    $state.go('adminHome');
                } else {
                    $state.go('userHome');
                }
            } else {
                $state.go('home');
            }

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                if (error.unAuthorized) {
                    $state.go('home');
                } else if (error.authorized) {
                    if (authService.isAdmin) {
                        $state.go('adminHome');
                    } else {
                        $state.go('userHome');
                    }
                }
            });

            //authService.loadUserDataFromSession();
        }]);
