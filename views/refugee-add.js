refugeeControllers.controller('refugeeAddController', ['$location','$rootScope','$scope', '$routeParams',
  function($location,$rootScope,$scope, $routeParams) {

    $scope.backButton=function(){
      $location.path('/refugees');
    };

  	$scope.addRefugeeValidation = function() {
  		/*$scope.refugees = $rootScope.refugees;
  		var countries = [];
  		var years = [];
  		console.log($rootScope.refugees);
      for(var i=0;i<$scope.refugees.length;i++){
  			countries.push($scope.refugees[i].country);
  			years.push($scope.refugees[i].year);
  		}
  		$scope.countries = countries;
  		$scope.years = years;
        
      for(var i=0;i<$scope.refugees.length;i++){
    		if($scope.refugeeCountry===$scope.countries[i] && $scope.refugeeYear===$scope.years[i]){
    			alert($scope.refugeeCountry + "'s data for the year "+$scope.refugeeYear+" is already available");
    			$scope.refugee_form.$valid = false;
    		}else{
          alert('xx');
    			$scope.addRefugee();
    		}
	    }*/
  	};
  			
  $scope.addRefugee = function() {
		$rootScope.refugees.push({
			country: $scope.refugeeCountry,
			year: $scope.refugeeYear,
			number: $scope.refugeeNumber,
			reason: $scope.refugeeReason,
			//state: $scope.refugeeState,
			done: false
		});
		$scope.refugeeCountry = '';
		$scope.refugeeYear='';
		$scope.refugeeNumber='';
		$scope.refugeeReason='';
		//$scope.refugeeState='';
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
		
		$location.path('/refugees');
	};

  }]);