var flipApp = angular.module('flipApp', []);


flipApp.controller("FlipController", function ($scope, $timeout){

	$scope.word = "hello";
	$scope.counter = 0;
	$scope.picks = 0;
	$scope.compare = [];
	$scope.shuffledCards = [];
	$scope.backCard = "images/question-mark.png";
	$scope.trys = 0;
	$scope.matches = 0;

	$scope.cards = [ 
		{cardNo: 0, status: false, value: 1, matched: false, image: "images/9_hearts.jpg"},
		{cardNo: 1, status: false, value: 1, matched: false, image: "images/9_hearts.jpg"},
		{cardNo: 2, status: false, value: 2, matched: false, image: "images/ace_diamonds.png"},
		{cardNo: 3, status: false, value: 2, matched: false, image: "images/ace_diamonds.png"},
		{cardNo: 4, status: false, value: 3, matched: false, image: "images/duece_clubs.png"},
		{cardNo: 5, status: false, value: 3, matched: false, image: "images/duece_clubs.png"},
		{cardNo: 6, status: false, value: 4, matched: false, image: "images/jack_clubs.png"},
		{cardNo: 7, status: false, value: 4, matched: false, image: "images/jack_clubs.png"},
		{cardNo: 8, status: false, value: 5, matched: false, image: "images/joker.jpg"},
		{cardNo: 9, status: false, value: 5, matched: false, image: "images/joker.jpg"},
		{cardNo: 10, status: false, value: 6, matched: false, image: "images/queen_hearts.png"},
		{cardNo: 11, status: false, value: 6, matched: false, image: "images/queen_hearts.png"}

	];

	$scope.shuffle = function(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	 	
	$scope.shuffleCards = $scope.shuffle($scope.cards);
	 



  $scope.flip = function(card, num){

  	if(card.status == true || card.matched == true){ return; }

  	//adds 1 to the picks counter each round
  	$scope.picks = $scope.picks + 1;

  	//adds the index to the array of card picked
  	$scope.compare.push(num);
	
	//sets picked card status to true for being picked
	card.status = true;

	console.log(num); // console log current index
	
	//if pick counter is 2 check both picks
	if($scope.picks == 2){
		$scope.cur1 = $scope.counter-1;
		$scope.cur2 = $scope.counter;


		$scope.trys = $scope.trys + 1; //counts number of rounds

		//if both cards values match
		if( $scope.shuffleCards[$scope.compare[$scope.cur1]].value == $scope.shuffleCards[$scope.compare[$scope.cur2]].value ){
			
			// keeps track of number of matches
			$scope.matches = $scope.matches + 1; 
			
			//set both cards matched value to true
			$scope.shuffleCards[$scope.compare[$scope.cur1]].matched = true;
			$scope.shuffleCards[$scope.compare[$scope.cur2]].matched = true;

			//$scope.compare = [];
		}else{
			$timeout(function(){
				$scope.shuffleCards[$scope.compare[$scope.cur1]].status = false;
				$scope.shuffleCards[$scope.compare[$scope.cur2]].status = false;
				//$scope.compare = [];	
			
			}, 2000);

		}
		console.log($scope.shuffleCards);
		$scope.picks = 0;	
		console.log($scope.shuffleCards);
		console.log($scope.compare);
	}
	$scope.counter = $scope.counter + 1;		
  }

});