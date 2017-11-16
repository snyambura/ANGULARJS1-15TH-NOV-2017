var angularApp = angular.module("angularApp", []);

angularApp.controller("mainCtrl", function ($scope) {
    $scope.names = "Salome";

    $scope.colors = [
        {
            "Name" : "Blue",
            "hexcode" : "0000ff"
        },
        {
            "Name" : "Green",
            "hexcode" : "008000"
        },
        {
            "Name" : "red",
            "hexcode" : "ff0000"
        },
        {
            "Name" : "black",
            "hexcode" : "000000"
        }
    ];
});

