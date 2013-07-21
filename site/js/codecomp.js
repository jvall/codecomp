var app = angular.module('CodeComp', []);
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
