(function() {

    'use strict';

    var hotMilhasApp = angular

        .module('hotMilhasApp', [
            'ui.router',
            'ngAnimate'
        ])

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider.state('home', { url: '/home' });
        }]);

})();