angular.module('CodeComp', [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/problems', {templateUrl:'partials/problems.html'})
            .when('/results', {templateUrl:'partials/results.html'})
            .otherwise({redirectTo:'/', templateUrl:'partials/home.html'});
    });

function NavCtrl($scope){
    $scope.pages = [
    {
        "name": "Home",
        "pagename": "home"
    },
    {
        "name": "Problems",
        "pagename": "problems"
    },
    {
        "name": "Results",
        "pagename": "results"
    }
    ];
}

