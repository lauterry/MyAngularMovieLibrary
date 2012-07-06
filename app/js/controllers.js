function movieListCtrl($scope){
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


function movieEditCtrl($scope){
    $scope.saveContact = function(){
        $scope.movies.push(
            {
                "title":$scope.title,
                "year":$scope.year,
                "directors":$scope.directors,
                "stars":$scope.actors
            }
        );
    }
}