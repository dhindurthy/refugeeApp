refugeeControllers.controller('dashboardController', ['$location','$rootScope','$scope', '$routeParams', '$http', 'refugeeLogService',
  function($location,$rootScope,$scope, $routeParams, $http, refugeeLogService) {

  	$scope.backButton=function(){
  		$location.path('/refugees');
  	};
  	/***************GAUGE CHART***************************************/
	
	$scope.gauge2011 = function() {	
		$(document).ready(function () {
        // Instanciate the map
			$scope.gaugeOptions = {
				chart: {
					renderTo:'gaugeRisk',
					type: 'gauge',
					plotBackgroundColor: '#FFFFFF',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '%',
					valueDecimals:2,
					//pointFormat: 'Something: {point.x}',
				},
				pane: {
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '95%'],
					size: '195%',
				},
				plotOptions: {
					gauge: {
						dataLabels: {
							enabled: true,
							crop:false,
							color:'black',
							formatter: function() {
								return  Highcharts.numberFormat(((this.point.y)*1000), 0);
							}
						}
					}
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 100,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#444',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'Refugees'
					},
					plotBands: [
						{
							from: 0,
							to: 20,
							color: '#6699CC' // green
						}, {
							from:20,
							to: 40,
							color: '#6699CC' // yellow
						}, {
							from: 40,
							to: 60,
							color: '#6699CC' // red
						}, {
							from: 60,
							to: 80,
							color: '#6699CC' // red
						}, {
							from: 80,
							to: 100,
							color: '#6699CC' // red
						}
					]
				},
				series: [{
					name: '2011',
					data: $scope.total2011
				}]			
			}
			$scope.gauge = new Highcharts.Chart($scope.gaugeOptions);
			$scope.gauge.redraw();
		});			
	};
	
	$scope.gauge2012 = function() {	
		$(document).ready(function () {
        // Instanciate the map
			$scope.gaugeOptions = {
				chart: {
					renderTo:'gaugeAssets',
					type: 'gauge',
					plotBackgroundColor: '#FFFFFF',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '%',
					valueDecimals:2,
					//pointFormat: 'Something: {point.x}',
				},
				pane: {
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '95%'],
					size: '195%',
				},
				plotOptions: {
					gauge: {
						dataLabels: {
							enabled: true,
							crop:false,
							color:'black',
							formatter: function() {
								return  Highcharts.numberFormat(((this.point.y)*1000), 0);
							}
						}
					}
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 100,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#444',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'Refugees'
					},
					plotBands: [
						{
							from: 0,
							to: 20,
							color: '#6699CC' // green
						}, {
							from:20,
							to: 40,
							color: '#6699CC' // yellow
						}, {
							from: 40,
							to: 60,
							color: '#6699CC' // red
						}, {
							from: 60,
							to: 80,
							color: '#6699CC' // red
						}, {
							from: 80,
							to: 100,
							color: '#6699CC' // red
						}
					]
				},
				series: [{
					name: '2012',
					data: $scope.total2012,
				}]			
			}
			$scope.gauge = new Highcharts.Chart($scope.gaugeOptions);
			$scope.gauge.redraw();
		});			
	};
		
	$scope.gauge2013 = function() {	
		$(document).ready(function () {
        // Instanciate the map
			$scope.gaugeOptions = {
				chart: {
					renderTo:'gaugeEquity',
					type: 'gauge',
					plotBackgroundColor: '#FFFFFF',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '* 1000',
					valueDecimals:2,
					//pointFormat: 'Something: {point.x}',
				},
				pane: {
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '95%'],
					size: '195%',
				},
				plotOptions: {
					gauge: {
						dataLabels: {
							enabled: true,
							crop:false,
							color:'black',
							formatter: function() {
								return  Highcharts.numberFormat(((this.point.y)*1000), 0);
							}
						}
					}
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 100,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#444',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'Refugees'
					},
					plotBands: [
						{
							from: 0,
							to: 20,
							color: '#6699CC' // green
						}, {
							from:20,
							to: 40,
							color: '#6699CC' // yellow
						}, {
							from: 40,
							to: 60,
							color: '#6699CC' // red
						}, {
							from: 60,
							to: 80,
							color: '#6699CC' // red
						}, {
							from: 80,
							to: 100,
							color: '#6699CC' // red
						}
					]
				},
				series: [{
					name: '2013',
					data: $scope.total2013
				}]			
			}
			$scope.gauge = new Highcharts.Chart($scope.gaugeOptions);
			$scope.gauge.redraw();
		});			
	};
	
	$scope.gauge2014 = function() {	
		$(document).ready(function () {
        // Instanciate the map
			$scope.gaugeOptions = {
				chart: {
					renderTo:'gaugeFixedIncome',
					type: 'gauge',
					plotBackgroundColor: '#FFFFFF',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '%',
					valueDecimals:2,
					//pointFormat: 'Something: {point.x}',
				},
				pane: {
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '95%'],
					size: '195%',
				},
				plotOptions: {
					gauge: {
						dataLabels: {
							enabled: true,
							crop:false,
							color:'black',
							formatter: function() {
								return  Highcharts.numberFormat(((this.point.y)*1000), 0);
							}
						}
					}
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 100,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#444',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'Refugees'
					},
					plotBands: [
						{
							from: 0,
							to: 20,
							color: '#6699CC' // green
						}, {
							from:20,
							to: 40,
							color: '#6699CC' // yellow
						}, {
							from: 40,
							to: 60,
							color: '#6699CC' // red
						}, {
							from: 60,
							to: 80,
							color: '#6699CC' // red
						}, {
							from: 80,
							to: 100,
							color: '#6699CC' // red
						}
					]
				},
				series: [{
					name: '2014',
					data: $scope.total2014
				}]			
			}
			$scope.gauge = new Highcharts.Chart($scope.gaugeOptions);
			$scope.gauge.redraw();
		});			
	};
	
	$scope.gauge2015 = function() {	
		$(document).ready(function () {
        // Instanciate the map
			$scope.gaugeOptions = {
				chart: {
					renderTo:'gaugeAlternative',
					type: 'gauge',
					plotBackgroundColor: '#FFFFFF',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					valueSuffix: '%',
					valueDecimals:2,
					//pointFormat: 'Something: {point.x}',
				},
				pane: {
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '95%'],
					size: '195%',
				},
				plotOptions: {
					gauge: {
						dataLabels: {
							enabled: true,
							crop:false,
							color:'black',
							formatter: function() {
								return  Highcharts.numberFormat(((this.point.y)*1000), 0);
							}
						}
					}
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 100,
					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#444',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: 'Refugees'
					},
					plotBands: [
						{
							from: 0,
							to: 20,
							color: '#6699CC' // green
						}, {
							from:20,
							to: 40,
							color: '#6699CC' // yellow
						}, {
							from: 40,
							to: 60,
							color: '#6699CC' // red
						}, {
							from: 60,
							to: 80,
							color: '#6699CC' // red
						}, {
							from: 80,
							to: 100,
							color: '#6699CC' // red
						}
					]
				},
				series: [{
					name: '2015',
					data: $scope.total2015
				}]			
			}
			$scope.gauge = new Highcharts.Chart($scope.gaugeOptions);
			$scope.gauge.redraw();
		});			
	};

	/***************HISTORY CHART***************************************/
	$scope.historyChart = function() {	
			var chart;
			$(document).ready(function() {
				// Create the chart
				$scope.TotalPortfolioChartOptions ={
					chart: {
						renderTo: 'HistoryChart',
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
			            categories: ['Iran','Iraq','Burma','Bhutan','Sudan', 'Somalia',
			            					'Cuba', 'Congo', 'Eritrea', 'Ethiopia','Afghanistan','Syria','Other']
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
			            name: '2011',
			            data: [2032, 9388, 16972, 14999, 334,3161,2920,977,2032,560, null,null,3009]
			        }, {
			            name: '2012',
			            data: [1758, 12163, 14160, 15070, 1077,4911,1948,1863,1346,620, null,null,3263]
			        }, {
			            name: '2013',
			            data: [2579, 19487, 16299, 9134, 1077,7608,4205,2563,1346,620,null,null, 3285]
			        }, {
			            name: '2014',
			            data: [2846, 19769, 14598, 8434, 1315,9000,4062,4540,1488,null, 753,null,3182]
        			},{
			            name: '2015',
			            data: [3109, 12676, 18386, 5775, 1578,8858,1527,7876,1596,null, null,1682,6870]
        			}],
					
					title: {
			            text: 'Refugees by year/country',
			            x: -20 //center
			        },
			        subtitle: {
			            text: '',
			            x: -20
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
	
	$scope.lineChart = function(){		
		setTimeout(function(){
				$scope.historyChart();
			}, 1500);
	};

	$scope.gettingCountryData = function() {
		$scope.promise = $http.get('data/countries.json', {cache: true, withCredentials: true})
			.success(function(data, status, headers, config) {
				$scope.countryData = data;
				$scope.country2011 = $scope.countryData["2011"];
				$scope.country2011 = $scope.countryData["2012"];
				$scope.country2011 = $scope.countryData["2013"];
				$scope.country2011 = $scope.countryData["2014"];
				$scope.country2011 = $scope.countryData["2015"];
			})
			.error(function(data, status, headers, config) {
	            $scope.countryData = [];
				refugeeLogService.logError({
					message: "An error occurred while getting the data.", 
					status:status, 
					fileName:"dashboard.js", 
					functionName:"gettingCountryData"
				});
			})
			.then(function(data, status, headers, config) {
				$scope.lineChart();
			});
	};
	$scope.gettingCountryData();

	/***************GROUP COLUMN CHART***************************************/
	$scope.firstData = function() {
		var firstData = [$scope.age2011[0].number,$scope.age2012[0].number,$scope.age2013[0].number];
		
		return firstData;
	};
	
	$scope.secondData= function() {
		var secondData = [$scope.age2011[1].number,$scope.age2012[1].number,$scope.age2013[1].number];
		
		return secondData;
	};
		
	$scope.thirdData = function() {
		var thirdData = [$scope.age2011[2].number,$scope.age2012[2].number,$scope.age2013[2].number];
		
		return thirdData;
	};
	
	$scope.fourthData = function() {
		var fourthData = [$scope.age2011[3].number,$scope.age2012[3].number,$scope.age2013[3].number];
		
		return fourthData;
	};

	$scope.fifthData = function() {
		var fifthData = [$scope.age2011[4].number,$scope.age2012[4].number,$scope.age2013[4].number];
		
		return fifthData;
	};

	$scope.sixthData = function() {
		var sixthData = [$scope.age2011[5].number,$scope.age2012[5].number,$scope.age2013[5].number];
		
		return sixthData;
	};

	$scope.seventhData = function() {
		var seventhData = [$scope.age2011[6].number,$scope.age2012[6].number,$scope.age2013[6].number];
		
		return seventhData;
	};

	$scope.ageColumn = function() {
		$(document).ready(function () {
			// Instanciate the map
			$scope.groupColumnOptions = {
				chart: {
					type: 'column',
					renderTo: 'ageClass',
				},
				title: {
					text: '',
					style: {
							color: 'black',
							fontWeight:'normal',
							fontSize:'14px',
							fontFamily: 'Arial'
						}
				},
				subtitle: {
					text: ''
				},
				credits: {
					enabled: false
				},
				legend: {
					enabled: true,
					itemStyle: { 
						"color": "#333333", 
						"cursor": "pointer", 
						"fontSize": "11px", 
						"fontFamily": "Arial",
						"fontWeight": "normal" 
					}
				},
				xAxis: {
					categories: ['2011', '2012','2013']
				},
				yAxis: {
					max: 30000,
					min: 0,
					title: {
						text: ''
					},
					label:'Number of refugees (x1000)'
				},
				tooltip: {
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr><br>',
					shared: true,
					useHTML: true,
					valueSuffix: '',
					valueDecimals: 2,
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
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: '0 to 17 ',
					data: $scope.firstData

				}, {
					name: '18 to 24',
					data: $scope.secondData

				}, {
					name: '25 to 34',
					data: $scope.thirdData

				}, {
					name: '35 to 44',
					data: $scope.fourthData

				},{
					name: '45 to 54',
					data: $scope.fifthData

				},{
					name: '55 to 64',
					data: $scope.sixthData

				},{
					name: '65+',
					data: $scope.seventhData

				}]
			};
			$scope.groupColumn = new Highcharts.Chart($scope.groupColumnOptions);
			$scope.groupColumn.redraw();
		});
	};

	$scope.gettingAgeData = function() {
		$scope.promise = $http.get('data/age.json', {cache: true, withCredentials: true})
			.success(function(data, status, headers, config) {
				$scope.ageData = data;
				$scope.age2011 = $scope.ageData["2011"];
				$scope.age2012 = $scope.ageData["2012"];
				$scope.age2013 = $scope.ageData["2013"];
			})
			.error(function(data, status, headers, config) {
	            $scope.ageData = [];
				refugeeLogService.logError({
					message: "An error occurred while getting the data.", 
					status:status, 
					fileName:"dashboard.js", 
					functionName:"gettingAgeData"
				});
			})
			.then(function(data, status, headers, config) {
				$scope.firstData = $scope.firstData();
				$scope.secondData = $scope.secondData();
				$scope.thirdData = $scope.thirdData();
				$scope.fourthData = $scope.fourthData();
				$scope.fifthData = $scope.fifthData();
				$scope.sixthData = $scope.sixthData();
				$scope.seventhData = $scope.seventhData();
				$scope.ageColumn();
			});
	};
	$scope.gettingAgeData();

	$scope.maleData = function() {
		var maleData = [$scope.gender2011[0].number,$scope.gender2012[0].number,$scope.gender2013[0].number];
		
		return maleData;
	};
	
	$scope.femaleData= function() {
		var femaleData = [$scope.gender2011[1].number,$scope.gender2012[1].number,$scope.gender2013[1].number];
		
		return femaleData;
	};

	$scope.genderColumn = function() {
		$(document).ready(function () {
			// Instanciate the map
			$scope.groupColumnOptions = {
				chart: {
					type: 'column',
					renderTo: 'genderClass',
				},
				title: {
					text: '',
					style: {
							color: 'black',
							fontWeight:'normal',
							fontSize:'14px',
							fontFamily: 'Arial'
						}
				},
				subtitle: {
					text: ''
				},
				credits: {
					enabled: false
				},
				legend: {
					enabled: true,
					itemStyle: { 
						"color": "#333333", 
						"cursor": "pointer", 
						"fontSize": "11px", 
						"fontFamily": "Arial",
						"fontWeight": "normal" 
					}
				},
				xAxis: {
					categories: ['2011', '2012','2013']
				},
				yAxis: {
					max: 30000,
					min: 0,
					title: {
						text: ''
					},
					label:'Number of refugees (x1000)'
				},
				tooltip: {
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr><br>',
					shared: true,
					useHTML: true,
					valueSuffix: '',
					valueDecimals: 2,
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
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Male',
					data: $scope.maleData

				}, {
					name: 'Female',
					data: $scope.femaleData

				}]
			};
			$scope.grouColumn = new Highcharts.Chart($scope.groupColumnOptions);
			$scope.grouColumn.redraw();
		});
	};

	$scope.gettingGenderData = function() {
		$scope.promise = $http.get('data/age.json', {cache: true, withCredentials: true})
			.success(function(data, status, headers, config) {
				$scope.genderData = data;
				$scope.gender2011 = $scope.genderData["2011"];
				$scope.gender2012 = $scope.genderData["2012"];
				$scope.gender2013 = $scope.genderData["2013"];
			})
			.error(function(data, status, headers, config) {
	            $scope.genderData = [];
				refugeeLogService.logError({
					message: "An error occurred while getting the data.", 
					status:status, 
					fileName:"dashboard.js", 
					functionName:"gettingGenderData"
				});
			})
			.then(function(data, status, headers, config) {
				$scope.maleData = $scope.maleData();
				$scope.femaleData = $scope.femaleData();
				$scope.genderColumn();
			});
	};
	//$scope.gettingGenderData();

	$scope.showAge = function(){
		$scope.detail =true;
	};
	$scope.showAge();

	$scope.showGender= function(){
		$scope.detail =false;
		//$scope.gettingGenderData();
	};


	/*******Bubble Chart************/
	$scope.yearParameters = function(dataArray){
		var i;
		for(i = 0; i < dataArray.length; i++){
			var o = dataArray[i];
			o.name = o.state;
			o.x = i;
			o.y = o.number;
			o.z = o.number;
			o.drilldown = o.state;
			//delete o.PortfolioWeight;
			delete o.number;
			//delete o.PortfolioContributionToRisk;
			delete o.state;			
		}
	};

	$scope.bubbleChart = function() {
		var chart;
		//console.log($scope.msciSectorData);
		$(document).ready(function() {
			$scope.bubbleChartOptions = {
				chart: {
					type: 'bubble',
					renderTo:'bubbleChartEquity',
					plotBackgroundImage: 'images/refugee-boat.jpg'
				},
				title: {
					text: 'Year to states drilldown',
					style: {
							color: 'black',
							fontWeight:'normal',
							fontSize:'14px',
							fontFamily: 'Arial'
						}
				},
				xAxis: {
					//type: 'category',
					title: {
						text: 'Year'
					},
					tickInterval:1,
				},
				yAxis: {
					//type: 'category',
					title: {
						text: 'Number of refugees'
					},
				},
				legend: {
					enabled: false
				},
				credits: {
					enabled: false
				},
				plotOptions: {
					series: {
						borderWidth: 0,
						dataLabels: {
							enabled: false
						}
					},
					bubble: {
						//displayNegative: true
					}
				},
				tooltip: {
						pointFormat: '{point.name} <br>Number of refugees: {point.z}',
						borderWidth: 0,
						useHTML: true,
						padding: 0,	
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
				},				    
				series: [{	
					//marker: {fillColor: {radialGradient:{cx:0.4,cy:0.3,r:0.7},stops:[[0,'rgba(255,255,255,0.5)'],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]]}},  
					name: 'Years',
					colorByPoint: true,
					data: $scope.factorsData,
					displayNegative: true
				}],
				drilldown: {
					series: [{
						marker: {
							fillColor: {
								radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
								stops: [
									[0, 'rgba(255,255,255,0.5)'],
									[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.8).get('rgba')]
								]
							}
						},  
						name: '2011',
						id:'2011', 
						data:$scope.states2011Data,
						displayNegative: true
					},{
						marker: {
							fillColor: {
								radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
								stops: [
									[0, 'rgba(255,255,255,0.5)'],
									[1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.8).get('rgba')]
								]
							}
						},  
						name: '2012',
						id:'2012', 
						data: $scope.states2012Data,
						displayNegative: true
					},{
						marker: {
							fillColor: {
								radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
								stops: [
									[0, 'rgba(255,255,255,0.5)'],
									[1, Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.8).get('rgba')]
								]
							}
						},  
						name: '2013',
						id:'2013', 
						data:$scope.states2013Data,
						displayNegative: true
					},{
						marker: {
							fillColor: {
								radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
								stops: [
									[0, 'rgba(255,255,255,0.5)'],
									[1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.8).get('rgba')]
								]
							}
						},  
						name: '2014',
						id:'2014', 
						data: $scope.states2014Data,
						displayNegative: true
					}]
				}
			}
			$scope.bubbleChart = new Highcharts.Chart($scope.bubbleChartOptions);//needed definitely to invoke the chart
			$scope.bubbleChart.redraw();
		});
	};

	$scope.gettingStateData = function() {
		$scope.promise = $http.get('data/states.json', {cache: true, withCredentials: true})
			.success(function(data, status, headers, config) {
				$scope.statesData = data;
				$scope.states2011Data = $scope.statesData["2011"];
				$scope.states2012Data = $scope.statesData["2012"];
				$scope.states2013Data = $scope.statesData["2013"];
				$scope.states2014Data = $scope.statesData["2014"];
			})
			.error(function(data, status, headers, config) {
	            $scope.statesData = [];
				refugeeLogService.logError({
					message: "An error occurred while getting the data.", 
					status:status, 
					fileName:"dashboard.js", 
					functionName:"gettingStateData"
				});
			})
			.then(function(data, status, headers, config) {
				$scope.yearParameters($scope.states2011Data);
				$scope.yearParameters($scope.states2012Data);
				$scope.yearParameters($scope.states2013Data);
				$scope.yearParameters($scope.states2014Data);
				$scope.bubbleChart();
			});
	};

	$scope.gettingTotalData = function() {
		$scope.promise = $http.get('data/total.json', {cache: true, withCredentials: true})
			.success(function(data, status, headers, config) {
				$scope.yearsData = data;
				$scope.total2011 = [$scope.yearsData[2011][0].total/1000];
				$scope.total2012 = [$scope.yearsData[2012][0].total/1000];
				$scope.total2013 = [$scope.yearsData[2013][0].total/1000];
				$scope.total2014 = [$scope.yearsData[2014][0].total/1000];
				$scope.total2015 = [$scope.yearsData[2015][0].total/1000];
				$scope.factorsData = [{'drilldown': "2011",'name': "2011",'x': 2011,'y': $scope.yearsData[2011][0].total,'z': $scope.yearsData[2011][0].total},
				{'drilldown': "2012",'name': "2012",'x': 2012,'y': $scope.yearsData[2012][0].total,'z': $scope.yearsData[2012][0].total},
				{'drilldown': "2013",'name': "2013",'x': 2013,'y': $scope.yearsData[2013][0].total,'z': $scope.yearsData[2013][0].total},
				{'drilldown': "2014",'name': "2014",'x': 2014,'y': $scope.yearsData[2014][0].total,'z': $scope.yearsData[2014][0].total},
				{'drilldown': "2015",'name': "2015",'x': 2015,'y': $scope.yearsData[2015][0].total,'z': $scope.yearsData[2015][0].total}];
			})
			.error(function(data, status, headers, config) {
	            $scope.yearsData = [];
				refugeeLogService.logError({
					message: "An error occurred while getting the data.", 
					status:status, 
					fileName:"dashboard.js", 
					functionName:"gettingTotalData"
				});
			})
			.then(function(data, status, headers, config) {
				$scope.gauge2011();
				$scope.gauge2012();
				$scope.gauge2013();
				$scope.gauge2014();
				$scope.gauge2015();
				$scope.gettingStateData();
			});
	};
	$scope.gettingTotalData();

  }]);