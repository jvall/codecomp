app.controller("NavController", function($scope){
    $scope.selectedPage = 0;
    $scope.pages = [
    {
        name: "Home",
        pagename: "home"
    },
    {
        name: "Problems",
        pagename: "problems"
    },
    {
        name: "Results",
        pagename: "Results"
    }
    ];
});
