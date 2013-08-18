app.controller('NavCtrl', function($scope, $location){
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
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
});
