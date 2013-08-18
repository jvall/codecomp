app.controller('ProblemsCtrl', function($scope, $http) {
    $scope.files = [];

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

    $scope.gradeFile = function() {
        $http({method: 'POST',
            url: '/api/grade',
            headers: {'Content-Type': undefined},
            transformRequest: function(data) {
                var formData = new FormData();
                for (var i = 0; i < data.files; i++)
                    formData.append("teamfile" + i, data.files[i]);
                return formData;
            },
            data: {files: $scope.files}
        })
        .success(function(data, status, headers, config) {
            return data;
        });
    };

    $scope.oldgradeFile = function() {
        var src = $scope.sourceFile;
        if (typeof src === 'undefined')
            return;

        var ext = src.val().split('.').pop();
        if (src.val() != '' || $scope.acceptedExtensions.indexOf(ext) > -1) {
            GraderService.upload(src).then(function(response) {
                console.log(response);
            });
        } else {
            console.log("Error. Eventually replace this on page.");
        }
    };

    $scope.$on("fileSelected", function(event, args) {
        $scope.$apply(function() {
            $scope.files.push(args.file);
        });
    });
});

app.directive('fileUpload', function() {
    return {
        scope: true,
        link: function(scope, el, attrs) {
            el.bind('change', function(event) {
                var files = event.target.files;
                for (var i = 0; i < files.length; i++)
                    scope.$emit("fileSelected", {file: files[i]});
            });
        }
    };
});
