var refugeeApp = angular.module('refugeeApp', [
    'ngRoute',
    'refugeeControllers',
    'refugeeDirectives',
    'refugeeServices',
    'ngResource'
]);

refugeeApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      }).
      when('/refugees', {
        templateUrl: 'views/refugees.html',
        controller: 'refugeesController'
      }).
      when('/refugeeedit', {
        templateUrl: 'views/refugee-edit.html',
        controller: 'refugeeEditController'
      }).
      when('/refugeeadd', {
        templateUrl: 'views/refugee-add.html',
        controller: 'refugeeAddController'
      }).
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
      }).
      when('/help', {
        templateUrl: 'views/help.html',
        controller: 'helpController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


refugeeControllers.controller('mainController', ['$location','$rootScope','$scope', '$http', 'translationService',
  function ($location,$rootScope,$scope, $http, translationService) {

      $location.path('/home');

      $scope.homeNav = function(){
        $location.path('/home');
      };

      $scope.contentNav = function(){
        $location.path('/refugees');
      };

      //Run translation if selected language changes
      $scope.translate = function(){
         translationService.getTranslation($scope, $scope.selectedLanguage);
      };
   
      //Init
      $scope.selectedLanguage = 'en';
      $scope.translate();
  }
]);