var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      controller: 'SimpleController',
      templateUrl: 'view1.html'
    })
    .when('/partial2', {
      controller: 'SimpleController',
      templateUrl: 'view2.html'
    })
    .otherwise({ redirectTo: '/' });
}]);

var controllers = {};
controllers.SimpleController = function($scope) {
  $scope.customers = [
    { name: 'Dave Jones', city: 'Phoenix'},
    { name: 'Jamie Riley', city: 'Atlanta' },
    { name: 'Heedy Wahlin', city: 'Chandler' },
    { name: 'Thomas Winter', city: 'Seattle' }
  ];
  $scope.addCustomer = function() {
    $scope.customers.push(
      {
          name: $scope.newCustomer.name,
          city: $scope.newCustomer.city
      });
  };
};

demoApp.controller(controllers);
