var app = angular.module('ExampleApp', [])
app.controller('ExampleController', function($scope, $window){
    $scope.username = 'maria';
    $scope.pass = 'maria123';
    $scope.inputPass = ' ';
    $scope.inputUsername = ' ';
    $scope.mistake = 'Wrong credentials!';

    $scope.login = function(){
        //if(($scope.username != $scope.inputUsername) || ($scope.pass != $scope.inputPass)){
            $window.alert("wrong credentials");
            return;
        //}
    };
});