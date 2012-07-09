function movieListCtrl($scope, $routeParams, $location){
    $scope.movies = [
        {"title":"Avatar",
            "year":2009,
            "directors":"James Cameron",
            "stars":"Sam Worthington, Zoe Saldana and Sigourney Weaver"},
        {"title":"The Grudge",
            "year":2004,
            "directors":"Takashi Shimizu",
            "stars":"Sarah Michelle Gellar, Jason Behr and Clea DuVall"},
        {"title":"The Expandables",
            "year":2010,
            "directors":"Sylvester Stallone",
            "stars":"Sylvester Stallone, Jason Statham and Jet Li"}
    ];
}

function movieEditCtrl($scope, $routeParams, $location){
    var newMovie = false;
    if($routeParams.contactId){
        $scope.movie = $scope.movies[$routeParams.contactId];
    } else {
        $scope.movie = {};
        newMovie = true;
    }
    $scope.saveContact = function(){
        if(newMovie){
            $scope.movies.push($scope.movie);
        }
        $location.path('/list');
    }
}

