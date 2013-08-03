app.controller('ProblemsCtrl', function($scope) {
    $scope.problems = [
        {
           title: "Graph Theory",
           score: 90,
           description: "Make Google maps",
           isCollapsed: true,
           submissions: 3
        },
        {
            title: "Tukey Ninether",
            score: 100,
            description: "Take your entire life to get this problem working",
            isCollapsed: true,
            submissions: 0

        }
    ];


    $scope.acceptedExtensions = ['c', 'java', 'py'];

    $scope.probClass = function(prob) {
        if (prob.score === 100)
            return "sliding-header-complete";
        else
            return "sliding-header";
    };

    $scope.showSubmitPane = false;

    $scope.updateProblemSubmit = function(prob) {
        $scope.showSubmitPane = true;
        $scope.selectedProb = prob;
    };

    $scope.gradeFile = function(src) {
        if (typeof src === 'undefined')
            return;

        var form = $(src).parents('form');
        var ext = $(src).val().split('.').pop();
        if ($(src).val() != '' || $scope.acceptedExtensions.indexOf(ext) > -1) {
            console.log("I did it! " + ext);
        }
    };
});
