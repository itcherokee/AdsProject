'use strict';

angular.module('adsSystem.user')
    .controller('UserEditProfileController',
    ['$rootScope', '$scope', '$state', 'userService', '$stateParams', 'infoService', 'townService',
        function ($rootScope, $scope, $state, userService, $stateParams, infoService, townService) {
            $rootScope.$broadcast("PageChanged", 'Edit Ad');

            var pass = {
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            };

            $scope.pass = pass;

            $scope.cancelProfileEdit = function () {
                $rootScope.$broadcast('userProfileChanged');
                $state.go('userHome');
            };

            $scope.updateProfile = function () {
                if ($scope.profileForm.$valid) {
                    userService.editUserProfile($scope.profile)
                        .success(function (data) {
                            infoService.success('Profile successfully updated.');
                        })
                        .error(function (error) {
                            infoService.error('There was some error and profile was not updated..');
                        });
                } else {

                }
            };

            $scope.changePassword = function () {
                if ($scope.passwordForm.$valid) {
                    if ($scope.passwordForm.newPassword.$modelValue !== $scope.passwordForm.confirmPassword.$modelValue) {
                        infoService.error('Passwords do not match!!');
                    } else {
                        userService.changeUserPassword($scope.pass)
                            .success(function (data) {
                                infoService.success('Password successfully changed.');
                            })
                            .error(function (error) {
                                infoService.error('There was some error and password was not changed..');
                            });
                    }
                } else if ($scope.passwordForm.$error.minlength) {
                    infoService.error('Password must be at least 2 characters!');
                } else {
                    infoService.error('All fields marked in red are mandatory!');
                }
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
        }
    ])
;