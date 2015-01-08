'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsEditController', ['$rootScope', '$scope', '$state', 'userService', '$stateParams',
        function ($rootScope, $scope, $state, userService, $stateParams) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');

            userService.getUserAdById($stateParams.id)
                .success(function(data){
                    $scope.ad = data;
                })
                .error(function(error){
                    //TODO: notify in case not able to fetch the selected Ad and redirect to userMyAds
                });

            // Event handler for editing selected Ad
            $scope.editAd = function () {
                userService.deleteUserAdById($scope.ad.id)
                    .success(function (data) {
                        $rootScope.$broadcast('userAdDeleted');
                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        //TODO: notify in case of error on deletion Ad
                    });

            };
        }]);