var myApp = angular.module('app', []);
myApp.controller('MainController', function($scope, $http) {
    var getUserDataCompleted = function(response) {
        $scope.person = response.data;
    }

    var getUserDataError = function(response) {
        $scope.error = "Error ocurred while downloading data from server!";
    }
    
    $scope.message = 'World!';
    $http.get("http://localhost:5000/api/values/Person").then(getUserDataCompleted, getUserDataError);
});