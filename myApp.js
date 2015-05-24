var myApp = angular.module('myApp',[]);

myApp.service('dataService', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.getData = function() {
    // $http() returns a $promise that we can add handlers with .then()
    return $http({
        method: 'GET',
        url: 'https://localhost:8080',
        params: 'friends'
     });
 }
});