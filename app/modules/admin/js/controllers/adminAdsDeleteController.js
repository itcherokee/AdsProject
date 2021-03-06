'use strict';

angular.module('adsSystem.user')
    .controller('AdminAdsDeleteController', ['$rootScope', '$scope', '$state', 'adminService', '$stateParams', 'infoService',
        function ($rootScope, $scope, $state, adminService, $stateParams, infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads Administration - Delete Ad');

            adminService.getAdById($stateParams.id)
                .success(function (data) {
                    $scope.ad = data;
                })
                .error(function (error) {
                    infoService.error('Unable to get data from server - requested Advertisement.')
                });

            // Event handler for deleting selected Ad
            $scope.deleteAd = function (ad) {
                adminService.deleteAdById(ad.id)
                    .success(function (data) {
                        $rootScope.$broadcast('userAdDeleted');
                        infoService.success('Advertisement has been deleted successfully.');

                        $state.go('adminHome');
                    })
                    .error(function (error) {
                        infoService.error('Error occurred. Advertisement cannot be deleted.');
                        $state.go('adminHome');

                    });

            };
        }]);