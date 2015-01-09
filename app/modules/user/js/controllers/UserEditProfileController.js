'use strict';

angular.module('adsSystem.user')
    .controller('UserEditProfileController',
    ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'infoService', 'townService',
        function ($rootScope, $scope, $state, userService, $stateParams, infoService, townService) {
            $rootScope.$broadcast("PageChanged", 'Edit Ad');

            $scope.cancelProfileEdit = function () {
                $rootScope.$broadcast('userProfileChanged');
                $state.go('userHome');
            };

            $scope.updateProfile = function () {
                userService.editUserProfile($scope.profile)
                    .success(function (data) {
                        infoService.success('Profile successfully updated.');
                    })
                    .error(function (error) {
                        infoService.error('There was some error and profile was not updated..');
                    });
            };

            $scope.changePassword = function () {

            };

            townService.getAllTowns()
                .success(function (data) {
                    $scope.towns = data;
                })
                .error(function (error) {
                    infoService.warning('Unable to fetch from server the towns.');
                });

            userService.getUserProfile()
                .success(function (data) {
                    $scope.profile = data;
                })
                .error(function (error) {
                    infoService.error('Unable to fetch from server the requested User Profile.');
                });
        }]);