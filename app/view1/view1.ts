'use strict';

class View1Controller{
    static $inject = ['$scope'];

    constructor($scope){
    	$scope.txtFirstName = '';
    	$scope.txtLastName = '';
    	$scope.txtContactNo = '';
    }

}

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', View1Controller);
