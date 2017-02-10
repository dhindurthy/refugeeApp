var refugeeServices = angular.module('refugeeServices', []);

/**
 * refugeeLogService
 * This service handles the logging of errors 
 * and is used in $http call's promises to ensure 
 * the checking of errors
 */
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

/**
 * translationService
 * Service to add translation to the exisiting 
 * english words to various different languages user desires to.
 * Developer/user has to provide the transalated words though
 * 
 */
refugeeServices.service('translationService', function($resource) {  

    this.getTranslation = function($scope, language) {
        var languageFilePath = 'translation_' + language + '.json';
        //console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.t = data;
        });
    };
});