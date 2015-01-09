'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsEditController',
                ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'townService', 'categoryService',
        function ($rootScope, $scope, $state, userService, $stateParams, townService, categoryService) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');



            townService.getAllTowns()
                .success(function (data) {
                    $scope.towns = data;
                })
                .error(function (error) {
                    infoService.warning('Unable to fetch from server the towns.');
                });

            categoryService.getAllCategories()
                .success(function (data) {
                    $scope.categories = data;
                })
                .error(function (error) {
                    infoService.warning('Unable to fetch from server the categories.');
                });

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