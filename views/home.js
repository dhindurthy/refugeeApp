refugeeControllers.controller('homeController', ['$location','$rootScope','$scope', '$routeParams', '$interval', '$timeout',
  function($location,$rootScope,$scope, $routeParams, $interval, $timeout) {
  	//$rootScope.app.mainNavi = 'Home';
  	
    $scope.refugeesNav = function() {
		$location.path('/refugees');
	};

	var data2012 = [{"state":"Alabama","number":145},
{"state":"Alaska","number":88},
{"state":"Arizona","number":2234},
{"state":"Arkansas","number":10},
{"state":"California","number":5173},
{"state":"Colorado","number":1458},
{"state":"Connecticut","number":434},
{"state":"District Of Columbia","number":14},
{"state":"Florida","number":2244},
{"state":"Georgia","number":2520},
{"state":"Hawaii","number":1},
{"state":"Idaho","number":817},
{"state":"Illinois","number":2082},
{"state":"Indiana","number":1197},
{"state":"Iowa","number":431},
{"state":"Kansas","number":384},
{"state":"Kentucky","number":1452},
{"state":"Louisiana","number":187},
{"state":"Maine","number":203},
{"state":"Maryland","number":1239},
{"state":"Massachusetts","number":1541},
{"state":"Michigan","number":3594},
{"state":"Minnesota","number":1738},
{"state":"Mississippi","number":8},
{"state":"Missouri","number":1065},
{"state":"Montana","number":1},
{"state":"Nebraska","number":764},
{"state":"Nevada","number":470},
{"state":"New Hampshire","number":363},
{"state":"New Jersey","number":279},
{"state":"New Mexico","number":189},
{"state":"New York","number":3528},
{"state":"North Carolina","number":2110},
{"state":"North Dakota","number":555},
{"state":"Ohio","number":2245},
{"state":"Oklahoma","number":299},
{"state":"Oregon","number":695},
{"state":"Pennsylvania","number":2809},
{"state":"Rhode Island","number":130},
{"state":"South Carolina","number":135},
{"state":"South Dakota","number":646},
{"state":"Tennessee","number":1236},
{"state":"Texas","number":5923},
{"state":"Utah","number":942},
{"state":"Vermont","number":350},
{"state":"Virginia","number":1341},
{"state":"Washington","number":2165},
{"state":"West Virginia","number":19},
{"state":"Wisconsin","number":785}];

var data2013=[
    {"state":"Alabama","number":129},
{"state":"Alaska","number":106},
{"state":"Arizona","number":3052},
{"state":"Arkansas","number":7},
{"state":"California","number":6383},
{"state":"Colorado","number":1789},
{"state":"Connecticut","number":547},
{"state":"Delaware","number":6},
{"state":"District Of Columbia","number":11},
{"state":"Florida","number":3620},
{"state":"Georgia","number":2710},
{"state":"Hawaii","number":6},
{"state":"Idaho","number":920},
{"state":"Illinois","number":2453},
{"state":"Indiana","number":1541},
{"state":"Iowa","number":598},
{"state":"Kansas","number":474},
{"state":"Kentucky","number":1603},
{"state":"Louisiana","number":223},
{"state":"Maine","number":350},
{"state":"Maryland","number":1242},
{"state":"Massachusetts","number":1829},
{"state":"Michigan","number":4651},
{"state":"Minnesota","number":2214},
{"state":"Mississippi","number":3},
{"state":"Missouri","number":1268},
{"state":"Nebraska","number":997},
{"state":"Nevada","number":563},
{"state":"New Hampshire","number":379},
{"state":"New Jersey","number":443},
{"state":"New Mexico","number":293},
{"state":"New York","number":3965},
{"state":"North Carolina","number":2377},
{"state":"North Dakota","number":456},
{"state":"Ohio","number":2788},
{"state":"Oklahoma","number":300},
{"state":"Oregon","number":875},
{"state":"Pennsylvania","number":2507},
{"state":"Puerto Rico","number":3},
{"state":"Rhode Island","number":171},
{"state":"South Carolina","number":148},
{"state":"South Dakota","number":533},
{"state":"Tennessee","number":1550},
{"state":"Texas","number":7475},
{"state":"Utah","number":1189},
{"state":"Vermont","number":322},
{"state":"Virginia","number":1472},
{"state":"Washington","number":2414},
{"state":"West Virginia","number":25},
{"state":"Wisconsin","number":946}];

var data2014 = [{"state":"Alabama","number":107},
{"state":"Alaska","number":141},
{"state":"Arizona","number":2964},
{"state":"Arkansas","number":7},
{"state":"California","number":6108},
{"state":"Colorado","number":1813},
{"state":"Connecticut","number":543},
{"state":"District Of Columbia","number":29},
{"state":"Florida","number":3519},
{"state":"Georgia","number":2694},
{"state":"Hawaii","number":2},
{"state":"Idaho","number":978},
{"state":"Illinois","number":2578},
{"state":"Indiana","number":1613},
{"state":"Iowa","number":692},
{"state":"Kansas","number":490},
{"state":"Kentucky","number":1849},
{"state":"Louisiana","number":211},
{"state":"Maine","number":388},
{"state":"Maryland","number":1227},
{"state":"Massachusetts","number":1941},
{"state":"Michigan","number":4006},
{"state":"Minnesota","number":2232},
{"state":"Mississippi","number":7},
{"state":"Missouri","number":1392},
{"state":"Nebraska","number":1076},
{"state":"Nevada","number":569},
{"state":"New Hampshire","number":345},
{"state":"New Jersey","number":363},
{"state":"New Mexico","number":163},
{"state":"New York","number":4082},
{"state":"North Carolina","number":2443},
{"state":"North Dakota","number":582},
{"state":"Ohio","number":2815},
{"state":"Oklahoma","number":389},
{"state":"Oregon","number":1019},
{"state":"Pennsylvania","number":2739},
{"state":"Puerto Rico","number":2},
{"state":"Rhode Island","number":188},
{"state":"South Carolina","number":121},
{"state":"South Dakota","number":523},
{"state":"Tennessee","number":1467},
{"state":"Texas","number":7214},
{"state":"Utah","number":1085},
{"state":"Vermont","number":317},
{"state":"Virginia","number":1310},
{"state":"Washington","number":2483},
{"state":"West Virginia","number":28},
{"state":"Wisconsin","number":1132}];

	$scope.statesChart = function(data){
		// Make codes uppercase to match the map data
        $.each(data, function () {
            this.value = this.number;
            this.code = this.state;
        });
        //console.log(data);
        $('#container').highcharts('Map', {

            chart : {
                borderWidth : 1
            },

            title : {
                text : 'Refugees re-location in '+ $scope.year
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1000,
                type: 'logarithmic',
                minColor: '#FF0000',
                maxColor: '#000000',
                stops: [
                    [0, '#FF0000'],
                    //[0.67, '#4444FF'],
                    [1, '#000000']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['name', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#000022',
                    format: '{point.code}'
                },
                name: 'Refugee re-location',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
	};

    $timeout(function(){
        $scope.year = "2011";
        //$scope.statesChart(data2011)
        $("#2011").addClass("rfgStateSingle");
    },500);

    $timeout(function(){
        $scope.year = "2012";
        $("#2011").removeClass("rfgStateSingle");
        $("#2012").addClass("rfgStateSingle");
        $scope.statesChart(data2012)
    },3500);

    $timeout(function(){
        $scope.year = "2013";
        $("#2012").removeClass("rfgStateSingle");
        $("#2013").addClass("rfgStateSingle");
        $scope.statesChart(data2013)
    },6500);

    $timeout(function(){
        $scope.year = "2014";
        $("#2013").removeClass("rfgStateSingle");
        $("#2014").addClass("rfgStateSingle");
        $scope.statesChart(data2014)
    },9500);

    //$scope.redrawingStates();

  }]);