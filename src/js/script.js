var myApp = angular.module('app', []);
myApp.controller('MainController', function($scope, github, $interval, $log, $anchorScroll, $location) {
    var getUserDataCompleted = function(data) {
        $scope.person = data;
        github.getRepos(data).then(onReposGet, getUserDataError);
    }

    var getUserDataError = function(response) {
        $scope.error = "Error ocurred while downloading data from server!";
    }

    var onReposGet = function(data) {
        $scope.repos = data;
        $location.hash("userDetails");
        $anchorScroll();
    }
    
    var countdownInterval = null;

    $scope.search = function(username) {
        $log.info("Searching for an user: " + username);
        github.getUser(username).then(getUserDataCompleted, getUserDataError);
        if(countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
    }

    var decrementCountdown = function() {
        $scope.countdown -= 1;
        if($scope.countdown < 1) {
            $scope.search($scope.username)
        }
    }

    var startInterval = function() {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    $scope.countdown = 5;
    $scope.username = '';
    $scope.repoSortOrder = '-stargazers_count';
    startInterval();
});