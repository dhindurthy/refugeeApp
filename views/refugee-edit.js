refugeeControllers.controller('refugeeEditController', ['$location','$rootScope','$scope', '$routeParams',
  function($location,$rootScope,$scope, $routeParams) {

    $scope.editedIndex = $rootScope.editedIndex;

	$scope.refugeeCountryEdit=$rootScope.refugees[$scope.editedIndex].country;
	$scope.refugeeYearEdit=$rootScope.refugees[$scope.editedIndex].year;
	$scope.refugeeNumberEdit=$rootScope.refugees[$scope.editedIndex].number;
	$scope.refugeeReasonEdit=$rootScope.refugees[$scope.editedIndex].reason;
	$rootScope.refugees[$scope.editedIndex].done=true;
	
	$scope.editObj={"refugeeCountryEdit":$scope.refugeeCountryEdit, "refugeeYearEdit":$scope.refugeeYearEdit,
					"refugeeNumberEdit":$scope.refugeeNumberEdit,"refugeeReasonEdit":$scope.refugeeReasonEdit};
  	
  	/**
  	 * [backButton The method that executes when the 'Back'
  	 *  button is hit that on the edit page]
  	 * @return {null} [Null]
  	 */
  	$scope.backButton=function(){
  		$rootScope.refugees.push({
			country: $scope.refugeeCountryEdit,
			year: $scope.refugeeYearEdit,
			number: $scope.refugeeNumberEdit,
			reason: $scope.refugeeReasonEdit,
			done: false
		});
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
  		$location.path('/refugees');
  	};

  	/**
  	 * [addEditedRefugee Method that runs once user saves the detials after editing]
  	 */
	$scope.addEditedRefugee=function() {
		$rootScope.refugees.push({
			country: $scope.editObj.refugeeCountryEdit,
			year: $scope.editObj.refugeeYearEdit,
			number: $scope.editObj.refugeeNumberEdit,
			reason: $scope.editObj.refugeeReasonEdit,
			done: false
		});
		//console.log($scope.refugees);
		$scope.refugeeCountry = '';
		$scope.refugeeYear='';
		$scope.refugeeNumber='';
		$scope.refugeeReason='';
		//$scope.refugeeState='';
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
		$location.path('/refugees');
	};

	/**
	 * [archive Archives the details of refugees]
	 * @return {null} [Null]
	 */
	$scope.archive = function() {
		var oldRefugees = $rootScope.refugees;
		$rootScope.refugees = [];
		angular.forEach(oldRefugees, function(refugee){
			if (!refugee.done){
				$rootScope.refugees.push(refugee);
			}
			//console.log($scope.refugees);
		});
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
	};
	$scope.archive();

  }]);