refugeeControllers.controller('helpController', ['$location','$rootScope','$scope', '$http',
  function ($location,$rootScope,$scope, $http) {

  	$scope.saved = localStorage.getItem('comments');
  	$rootScope.comments = (localStorage.getItem('comments')!==null) ? JSON.parse($scope.saved) : [ 
		{
			comment: 'The data displayed in dashboard is informative!',
			date: 'December 24, 2015',
			upvote:2,
			downvote:1,
			done: false
		} ];
	localStorage.setItem('comments', JSON.stringify($rootScope.comments));

	$scope.addComment = function() {
		var months = new Array(12);
		months[0] = "January";
		months[1] = "February";
		months[2] = "March";
		months[3] = "April";
		months[4] = "May";
		months[5] = "June";
		months[6] = "July";
		months[7] = "August";
		months[8] = "September";
		months[9] = "October";
		months[10] = "November";
		months[11] = "December";
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth(); //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10) {
		    dd='0'+dd
		} 
		if(mm<10) {
		    mm='0'+mm
		} 
		//today = mm+'/'+dd+'/'+yyyy;
		today = months[mm] + ' ' + dd + ', ' + yyyy;
		$scope.date = today;
		$rootScope.comments.push({
			comment: $scope.comment,
			date: $scope.date,
			upvote:0,
			downvote:0,
			done: false
		});
		$scope.comment = '';
		localStorage.setItem('comments', JSON.stringify($rootScope.comments));
		//console.log($rootScope.comments);
	};

	$scope.upVote = function($index){
		var oldUp = $rootScope.comments[$index].upvote;
		var newUp = oldUp + 1;
		$rootScope.comments[$index].upvote = newUp;
		localStorage.setItem('comments', JSON.stringify($rootScope.comments));
	};

	$scope.downVote = function($index){
		var oldDown = $rootScope.comments[$index].downvote;
		var newDown = oldDown + 1;
		$rootScope.comments[$index].downvote = newDown;
		localStorage.setItem('comments', JSON.stringify($rootScope.comments));
	};

}]);