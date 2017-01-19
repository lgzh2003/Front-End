/**
 * Created by max on 11/14/16.
 */

var app = angular.module("myApp",[]);

app.controller("nameController",function ($scope) {
    $scope.count = 0;
    $scope.username = "Max";
    $scope.$watch('username',function(newValue,oldValue){
        ++$scope.count;
        if($scope.count>=5){
            $scope.username = "Only have 5 times trial";
        }
    });
});