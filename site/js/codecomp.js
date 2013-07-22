var app = angular.module('CodeComp', ['ui.bootstrap']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/problems', {
        templateUrl:'./partials/problems.html',
    })
    .when('/results', {
        templateUrl:'./partials/results.html',
    })
    .otherwise({
        redirectTo:'/',
        templateUrl:'./partials/home.html',
    });
});
