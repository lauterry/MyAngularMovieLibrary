angular.module("myApp", [])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/edit/:contactId', {
        templateUrl: 'partials/movie-edit.html',
        controller: movieEditCtrl
    });
    $routeProvider.when('/list', {
        templateUrl: 'partials/movie-list.html'
    });
    $routeProvider.otherwise({ redirectTo: '/list' });
}]).directive('movieWidget', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'templates/movieWidget.html',
            scope:{
                movie: '='
            }
        }
});