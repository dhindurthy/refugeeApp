refugeeControllers.controller('refugeesController', ['$location','$rootScope','$scope', '$http', 'translationService',
  function ($location,$rootScope,$scope, $http, translationService) {
 	$scope.dashboardNav = function(){
 		$location.path('/dashboard');
 	};

 	$scope.remaining = function() {
		var count = 0;
		angular.forEach($rootScope.refugees, function(refugee){
			count+= refugee.done ? 0 : 1;
		});
		return ($rootScope.refugees.length - count);
	};

    $rootScope.saved = localStorage.getItem('refugees');
	$rootScope.refugees = (localStorage.getItem('refugees')!==null) ? JSON.parse($rootScope.saved) : [ 
		{
			country: 'Syria',
			year:'2015',
			number:'320',
			reason:'War',
			done: false
		},
		{
			country: 'Afghanistan',
			year:'2012',
			number:'142',
			reason:'War',
			done: false
		} ];
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));

	$scope.addRefugeeAction = function(){
		$location.path('/refugeeadd');
	};

	/**
	 * [archive Archives the refugees]
	 * @return {null} [Null]
	 */
	$scope.archive = function() {
		var oldRefugees = $rootScope.refugees;
		$rootScope.refugees = [];
		angular.forEach(oldRefugees, function(refugee){
			if (!refugee.done){
				$rootScope.refugees.push(refugee);
			}
		});
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
	};

	/**
	 * [archiveIndividual Archives the invidual refugee]
	 * @param  {number} $index [Index of the refugees thats archived]
	 * @return {null}        [Null]
	 */
	$scope.archiveIndividual = function($index) {
		var oldRefugees = $rootScope.refugees;
		$rootScope.refugees[$index].done=true;
		$rootScope.refugees = [];
		angular.forEach(oldRefugees, function(refugee){
			if (!refugee.done){
				$rootScope.refugees.push(refugee);
			}
		});
		localStorage.setItem('refugees', JSON.stringify($rootScope.refugees));
	};

	/**
	 * [editRefugee Function to navigate to edit refugee page]
	 * @param  {number} $index [Index of refugee user wants to edit]
	 * @return {null}        [Null]
	 */
	$scope.editRefugee = function($index) {
		$rootScope.editedIndex=$index;
		//$rootScope.refugees[$index].done=true;
		$location.path('/refugeeedit');
	};

	/**
	 * [infoRefugee Info of the refugee]
	 * @param  {Number} $index [Index of refigee for whom the info is shown]
	 * @return {Null}        [Null]
	 */
	$scope.infoRefugee = function($index) {
		$rootScope.infoIndex=$index;
		$scope.refugeeInfo = true;

		$scope.refugeeCountryInfo=$rootScope.refugees[$rootScope.infoIndex].country;
		$scope.refugeeYearInfo=$rootScope.refugees[$rootScope.infoIndex].year;
		$scope.refugeeNumberInfo=$rootScope.refugees[$rootScope.infoIndex].number;
		$scope.refugeeReasonInfo=$rootScope.refugees[$rootScope.infoIndex].reason;
		$scope.infoObj={"refugeeCountryInfo":$scope.refugeeCountryInfo, "refugeeYearInfo":$scope.refugeeYearInfo,
						"refugeeNumberInfo":$scope.refugeeNumberInfo,"refugeeReasonInfo":$scope.refugeeReasonInfo};
		//$location.path('/refugeeedit');
	};

	/**
	 * [closeInfo Method to close the info section]
	 * @param  {Number} $index [Index of the refugee item in array]
	 * @return {null}        [Null]
	 */
	$scope.closeInfo = function($index){
		$scope.refugeeCountryInfo='';
		$scope.refugeeYearInfo='';
		$scope.refugeeNumberInfo='';
		$scope.refugeeReasonInfo='';
		//$scope.refugeeStateInfo='';
		$scope.refugeeInfo = false;
	};
   	
   	var countries = [];
   	var countriesData = [];
	$scope.dataDivision = function(year){
		countries = [];
		countriesData = [];
		for(i=0;i<$rootScope.refugees.length;i++){
			if($rootScope.refugees[i].year===year){
				countries.push($rootScope.refugees[i].country);
				countriesData.push(parseInt($rootScope.refugees[i].number));
			}
		}
		$scope.year = year;
	};

	/**
	 * [dataChart Chart that instantly updates and new data entered ]
	 * @return {null} [Null]
	 */
	$scope.dataChart = function() {
		var chart;
		$(document).ready(function() {
			// Create the chart
			$scope.TotalPortfolioChartOptions ={
				chart: {
					renderTo: 'dataChart',
					marginLeft:60,
					zoomType: 'x',
					panning: true,
					//marginBottom:350,
					resetZoomButton: {
						position: {
						   // align: 'right', // by default
							//verticalAlign: 'top', // by default
							x: -40,
							y: 10
						},
						relativeTo: 'chart'
					}
				},
				xAxis: {
		            categories: $scope.categories
		        },
		        yAxis: {
		            title: {
		                text: 'Number of refugees'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
		        series: [{
		            data: $scope.data
		        }],
				
				title: {
		            text: 'Refugees in '+ $scope.year,
		            x: -20 //center
		        },
		        subtitle: {
		            text: '',
		            x: -20
		        },
				credits: {
					enabled: false
				},
				tooltip: {
					//shared: true,
					useHTML: true,
					formatter: function() {
						return      (this.x)+ ' in '  + this.series.name +' has ' + (this.point.y);
					},
					crosshairs: true,
					backgroundColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1
						},
						stops: [
							[0, 'white'],
							[1, '#EEE']
						]
					},
					borderColor: 'gray',
					borderWidth: 1,
					borderRadius:8
				}
			};
			$scope.TotalPortfolioChart = new Highcharts.Chart($scope.TotalPortfolioChartOptions);//needed definitely to invoke the chart
			$scope.TotalPortfolioChart.redraw();
		});	
	};
	
	/**
	 * [lineChart Method to draw the line chart for respective year of the refugees]
	 * @return {null} [null]
	 */
	$scope.lineChart = function(){
		$scope.categories = countries;
   		$scope.data = countriesData;
		setTimeout(function(){
				$scope.dataChart();
			}, 500);
	};

	/**
	 * [data201x Methods that draw the charts for individual 
	 * years thats displayed on refugees page and is instantly 
	 * updated when user enters/delets/edits  data]
	 * @return {null} [Null]
	 */
	$scope.data2011 = function(){
		$scope.dataDivision("2011");
		$scope.lineChart();
	};
	$scope.data2012 = function(){
		$scope.dataDivision("2012");
		$scope.lineChart();
	};
	$scope.data2013 = function(){
		$scope.dataDivision("2013");
		$scope.lineChart();
	};
	$scope.data2014 = function(){
		$scope.dataDivision("2014");
		$scope.lineChart();
	};
	$scope.data2015 = function(){
		$scope.dataDivision("2015");
		$scope.lineChart();
	};
	$scope.data2011();

  }]);