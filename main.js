var todolist = angular.module("todolist", []);


todolist.factory('Taskfactory', function ($http, $q) {

   return{
       getItems: function () {
           var deferred = $q.defer();
           $http({
               method:"GET",
               url: "https://jsonplaceholder.typicode.com/posts"
           }).then(function (response) {
               deferred.resolve(response.data);
           }).catch(function (err) {
               deferred.reject(err);
           });
           return deferred.promise;
       }
   }

});

todolist.service('Taskservice', function ($http, $q) {

    return{
        getItem: function () {
            var deferred = $q.defer();
            $http({
                method:"GET",
                url: "https://jsonplaceholder.typicode.com/posts"
            }).then(function (response) {
                deferred.resolve(response.data);
            }).catch(function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }

});


todolist.controller('mainCtrl', function(Taskfactory, Taskservice, $scope){

    Taskfactory.getItems().then(function (res) {
            $scope.blogs=res;
        }).catch(function (err) {
            console.log(err);
        });


    Taskservice.getItem().then(function (res) {
        $scope.posts=res;
    }).catch(function (err) {
        console.log(err);
    });

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

