var myApp = angular.module('app', []);
myApp.controller('MainController', function($scope, $http) {
    var getUserDataCompleted = function(response) {
        $scope.person = response.data;
        $http.get($scope.person.repos_url).then(onReposGet,getUserDataError);
    }

    var getUserDataError = function(response) {
        $scope.error = "Error ocurred while downloading data from server!";
    }

    var onReposGet = function(response) {
        $scope.repos = response.data;
    }
    
    $scope.search = function(username) {
        $http.get("https://api.github.com/users/"+username).then(getUserDataCompleted, getUserDataError);
    }

    $scope.username = 'Azkel';
    $scope.repoSortOrder = '-stargazers_count';
    
});