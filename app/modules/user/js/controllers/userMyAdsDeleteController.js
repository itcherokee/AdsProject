'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsController', ['$rootScope', '$scope', '$state', 'userService', '$stateParams',
        function ($rootScope, $scope, $state, userService, $stateParams) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');

            // Event handler for deleting selected Ad
            $scope.deleteAd = function (ad) {
                userService.deleteUserAdById(ad.id)
                    .success(function (data) {
                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        //TODO: notify in case of error on deletion Ad
                    });

            };



        }]);