'use strict';

angular.module('adsSystem.user')
    .controller('UserMyAdsDeleteController', ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'infoService',
        function ($rootScope, $scope, $state, userService, $stateParams, infoService) {
            $rootScope.$broadcast("PageChanged", 'Delete Ad');

            userService.getUserAdById($stateParams.id)
                .success(function (data) {
                    $scope.ad = data;
                })
                .error(function (error) {
                    infoService.error('Unable to get data from server - requested Advertisement.')
                });

            // Event handler for deleting selected Ad
            $scope.deleteAd = function () {
                userService.deleteUserAdById($scope.ad.id)
                    .success(function (data) {
                        $rootScope.$broadcast('userAdDeleted');
                        infoService.success('Advertisement has been deleted successfully.');

                        $state.go('userMyAds');
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be deleted.')
                    });

            };
        }]);