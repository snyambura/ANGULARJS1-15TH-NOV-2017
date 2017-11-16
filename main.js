var todolist = angular.module("todolist", []);

todolist.controller('mainCtrl', function($scope){

        $scope.todos = [
            {
                "name": "attend training"
            },
            {
                "name": "write today's daily blog"
            },
            {
                "name": "do the vuejs report"
            },
            {
                "name": "write a simple vuejs application"
            },
            {
                "name": "complete the styling challenge"
            }

            ];

    $scope.Add = function () {
        //Add the new item to the Array.
        var task = {};
        task.name = $scope.name;
        $scope.todos.push(task);

        $scope.name = "";
    };

    $scope.Remove = function (index) {
        $scope.todos.splice(index, 1);

    }
    });

