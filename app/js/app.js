'use strict';

angular.module('adsSystem', ['ui.bootstrap', 'ui.router']).
    config(function ($stateProvider, $urlRouterProvider) {
        //$stateProvider and $urlRouterProvider are from ui.router module
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: '/index.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginController as login',
                templateUrl: '/login/views/login.html'
            })
            .state('register', {
                url: '/register',
                controller: 'RegisterController as register',
                templateUrl: '/login/views/register.html'
            });
//            .state('user', {
//                url: '/user',
//                controller: 'UserController as user',
//                templateUrl: '/user/views/user.html'
//            });
//            .state('view2', {
//                url: '/view2/:firstname/:lastname',
//                controller: 'Controller2',
//                resolve: {
//                    names: function () {
//                        return;
//                    }
//                },
//                templateUrl: '/partials/view2.html'
//            });
        $urlRouterProvider.otherwise('/');
    })
    .run(['$state', '$rootScope', '$stateParams', function ($state, $rootScope, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.on('/')
    }]);