'use strict';
var app = angular
    .module('myApp', ['ui.router', 'ngAnimate'])
    .config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function ($httpProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                authorize: true,
                views: {
                    '': {
                        controller: 'homeController',
                        controllerAs: 'vm'
                    }
                }
            })
    }]);

