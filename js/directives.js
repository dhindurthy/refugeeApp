var refugeeDirectives = angular.module('refugeeDirectives', []);

refugeeDirectives.directive('ngState', ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {

    return {
      	restrict: 'A',
      	link: function link(scope, element, attrs) {
	      		scope.$watch(attrs.ngState, function(value) {
	      		
		    });
    	}
    };
}]);

refugeeDirectives.directive('ngFormat', ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {

    return {
      	restrict: 'A',
      	link: function link(scope, element, attrs) {
  			

      		scope.$watch(attrs.ngFormat, function(value) {
      			scope.refugee_form.year.$setValidity('ngformat', false);
      			if(parseInt(value)>=2001 && parseInt(value)<=2015 && !isNaN(parseInt(value))){
			        	scope.refugee_form.year.$setValidity('ngformat', true);
			        	scope.refugee_form.$valid = true;
			        }
	        	/*for(var i=0;i<scope.refugees.length;i++){
	        		if(!isNaN(parseInt(value)) && parseInt(value)>=100){
	        			scope.refugee_form.year.$setValidity('ngformat', false);
	        		}
	        		if(parseInt(value)>=100 && !isNaN(parseInt(value)) && scope.refugee_form.$valid!=false){
			        	scope.refugee_form.year.$setValidity('ngformat', true);
			        	scope.refugee_form.$valid = true;
			        }
	        	}*/
	        });
    	}
    };
}]);