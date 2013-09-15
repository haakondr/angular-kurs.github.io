'use strict'

function navController($scope, $rootScope, $location) {
    $scope.pages = ["home", "data-bindings", "controllers", "filters"];
    $scope.pageNum = 1;
    $scope.totalPages = $scope.pages.length;

    $scope.next = function() {
        if ($scope.pageNum < $scope.totalPages) {
            $location.path($scope.pages[++$scope.pageNum - 1]);
        };
    };

    $scope.previous = function() {
        if ($scope.pageNum > 1) {
            $location.path($scope.pages[--$scope.pageNum - 1]);
        };
    };

    $scope.showPrev = function() {
        return $scope.pageNum > 1;
    };

    $scope.showNext = function() {
        return $scope.pageNum < $scope.totalPages;
    };
};


function homeController($scope) {

    $scope.tweet = function() {
        console.log($scope.message);
    };

};

function dataBindingsController($scope) {
    $scope.items = [{
        color: "blue"
    }, {
        color: "red"
    }, {
        color: "green"
    }];

    $scope.login = function() {}
}

function controllersController($scope, $http, $location) {
    $http.post('/register', $scope.user).success(function(response) {
        $scope.user = response.data.user;
        $location.path("/");
    }).error(function(errorResponse) {
        $scope.errors = errorResponse.data.errors;
    });
};
