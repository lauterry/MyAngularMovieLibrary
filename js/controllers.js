angular.module("MyAppModule", ['ngResource']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/movies', {templateUrl: 'partials/movies.html',   controller: MovieListCtrl}).
        when('/movies/:code', {templateUrl: 'partials/movie-detail.html', controller: MovieDetailCtrl}).
        otherwise({redirectTo: '/movies'});
}]);

function MovieListCtrl($scope, $resource) {

    $scope.allocine = $resource("http://api.allocine.fr/rest/v3/:action",
        {action:'search', partner:'YW5kcm9pZC12M3M', format:'json', q:'love', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}}
    );

    $scope.search = function(movieToSearch){
        $scope.movies = $scope.allocine.get({q:movieToSearch});
    }

}

function MovieDetailCtrl($scope, $routeParams) {
   $scope.code = $routeParams.code;
}