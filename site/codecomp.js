angular.module('CodeComp', [])
    .config(function($routeProvider) {
        $routeProvider
            .when('/problems', {
                templateUrl:'assets/partials/problems.html',
            })
            .when('/results', {
                templateUrl:'assets/partials/results.html',
            })
            .otherwise({
                redirectTo:'/',
                templateUrl:'assets/partials/home.html',
            });
    });

function NavCtrl($scope, $location){
    $scope.pages = [
    {
        name: "Home",
        pagename: "home",
    },
    {
        name: "Problems",
        pagename: "problems",
    },
    {
        name: "Results",
        pagename: "results",
    }
    ];

    $scope.navClass = function(page) {
        console.log($location.path().substring(1));
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
}
