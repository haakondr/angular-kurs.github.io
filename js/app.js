'use strict'

var app = angular.module("AngularKurs", ['ng', 'ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "pages/home.html",
        controller: "homeController"
    }).when('/data-bindings', {
        templateUrl: "/pages/data_bindings.html",
        controller: 'dataBindingsController'
    }).when('/controllers', {
        templateUrl: "pages/controllers.html",
        controller: 'controllersController'
    }).when('/services', {
        templateUrl: "pages/"
    }).when('/filters', {
        templateUrl: "pages/filters.html"
    }).otherwise({redirectTo: '/'});;
});
