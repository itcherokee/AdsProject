'use strict';

angular.module('adsSystem.public', []).
    config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                templateUrl: 'modules/public/views/public.html'
            })
            .state('home', {
                url: '/',
                parent: 'root',
                controller: 'PublicHomeController',
                templateUrl: 'modules/public/views/public-home.html'
            })
            .state('login', {
                url: '/login',
                parent: 'root',
                controller: 'PublicLoginController',
                templateUrl: 'modules/public/views/public-login.html'
            })
            .state('register', {
                url: '/register',
                parent: 'root',
                controller: 'PublicRegisterController',
                templateUrl: 'modules/public/views/public-register.html'
            });
        $urlRouterProvider.otherwise('home');
    }).run(['$rootScope', '$state', 'authenticateService',
        function ($rootScope, authenticateService, $state) {
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                if (error.unAuthorized){
                    $state.go('home')
                } else if(error.authorized){
                    if (authenticateService.isAdmin){
                        $state.go('adminHome');
                    } else {
                        $state.go('userHome');
                    }
                }
            });

            authenticateService.loadUserDataFromSession();
        }]);