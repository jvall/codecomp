app.controller('ProblemsCtrl', function($scope) {
    $scope.problems = [
        {
           title: "Graph Theory",
           score: 90,
           description: "Make Google maps"
        },
        {
            title: "Tukey Ninether",
            score: 0,
            description: "Take your entire life to get this problem working"
        }
    ];
    $scope.toggle = function() {
        $scope.$broadcast('event:toggle');
    }
})
.directive('toggle', function() {
    return function(scope, elem, attrs) {
        scope.$on('event:toggle', function() {
            elem.slideToggle();
        });
    };
});
