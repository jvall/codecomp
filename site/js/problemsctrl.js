app.controller('ProblemsCtrl', function($scope) {
    $scope.problems = [
        {
           title: "Graph Theory",
           score: 90,
           description: "Make Google maps",
           isCollapsed: true
        },
        {
            title: "Tukey Ninether",
            score: 0,
            description: "Take your entire life to get this problem working",
            isCollapsed: true
        }
    ];
})
