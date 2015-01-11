'use strict';

angular.module('adsSystem.user')
    .controller('AdminUsersListController',
    ['$rootScope', '$scope', '$state', 'adminService', 'infoService',
        function ($rootScope, $scope, $state, adminService,infoService) {
            $rootScope.$broadcast("PageChanged", 'Ads Administration - Users');


            adminService.getAdById($stateParams.id)
                .success(function (data) {
                    $scope.ad = data;
                })
                .error(function (error) {
                    infoService.error('Error fetching from server the requested Ad for editing.');
                });

            $scope.convertImage = function ($file) {
                delete $scope.ad.imageDataUrl;
                var file = $file.file;
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        $scope.ad.imageDataUrl = reader.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    infoService.warning('File type not supported!');
                }
            };

            // Event handler for editing selected Ad
            $scope.editAd = function () {
                if ($scope.form.$valid) {
                    if ($scope.image.flow.files.length) {
                        $scope.imageStatus = 'update';
                    }

                    adminService.editAd($scope.ad, $scope.imageStatus ? $scope.imageStatus : undefined)
                        .success(function (data) {
                            $rootScope.$broadcast('userAdEdited');
                            infoService.success('Advertisement successfully edited.');
                        })
                        .error(function (error) {
                            infoService.error('An error occurred. Advertisement changes has not been saved.');
                        })
                        .finally(function(){
                            $state.go('adminHome');
                        });
                } else {
                    infoService.error('All fields marked in red are mandatory!');
                }
            };

            $scope.deleteImage = function () {
                $scope.imageStatus = 'delete';
                $scope.image.flow.cancel();
                $scope.ad.imageDataUrl = 'img/noimage.png';
            };
        }]);