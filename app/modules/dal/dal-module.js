'use strict';

angular.module('adsSystem.dal', []).
    config(function () {

    })
    .value('API_PUBLIC_ENDPOINT', 'http://softuni-ads.azurewebsites.net/api/')
    .value('API_USER_ENDPOINT', 'http://softuni-ads.azurewebsites.net/api/user/')
    .value('API_ADMIN_ENDPOINT', 'http://softuni-ads.azurewebsites.net/api/admin');
