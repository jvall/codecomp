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
    $scope.highlightError = true;

    $scope.updateProblemSubmit = function(prob) {
        $scope.showSubmitPane = true;
        $scope.selectedProb = prob;
    };

    $scope.gradeFile = function() {
        $http({method: 'POST',
            url: '/api/grade',
            headers: {'Content-Type': false},
            transformRequest: function(data) {
                var formData = new FormData();
                for (var i = 0; i < data.files.length; i++)
                    formData.append("file" + i, data.files[i]);
                return formData;
            },
            data: {files: $scope.files}
        })
        .success(function(data, status, headers, config) {
            return data;
        });
    };

    $scope.$on("fileSelected", function(event, args) {
        $scope.$apply(function() {
            var ext = args.file.name.split('.').pop();
            if (ext != '' && $scope.acceptedExtensions.indexOf(ext) > -1) {
                $scope.files.push(args.file);
                $scope.highlightError = false;
            }
            else {
                $scope.highlightError = true;
            }
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
