var refugeeServices = angular.module('refugeeServices', []);

refugeeServices.service('refugeeLogService', function () {

  this.logError = function (errorObject) {
    console.log(errorObject);
    localStorage.setItem('errors', JSON.stringify(errorObject));
    /*$http.post("/data/logError", errorObject)
    .success(function(data, status) {
        $scope.errorObject = data;
    })*/
  };
  
});

refugeeServices.service('translationService', function($resource) {  

    this.getTranslation = function($scope, language) {
        var languageFilePath = 'translation_' + language + '.json';
        //console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.t = data;
        });
    };
});