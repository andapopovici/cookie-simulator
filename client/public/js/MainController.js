 angular.module('CookieSim')
 .controller('MainController', function($scope) {
	$scope.score = 0;
	$scope.upgrades = [];
	$scope.availableUpgrades = [];
    $scope.formattedUpgrades = [];

	var allUpgrades = [
		{id: 1,
		 name: "1 Cookie / 3 seconds",
		 price: 5,
		 handle: function(){
			 setInterval(function(){$scope.increaseCookies(); $scope.$apply();}, 3000);}
		 },
		{id: 2,
		 name: "1 Cookie / 2 seconds",
		 price: 10,
		 handle: function(){
			 setInterval(function(){$scope.increaseCookies(); $scope.$apply();}, 2000);}
		 }
	];

	$scope.$watch('score', function(newScore){
        $scope.availableUpgrades = [];
		allUpgrades.forEach(function(entry){
			if (entry.price <= $scope.score && $scope.availableUpgrades.indexOf(entry) === -1){
				$scope.availableUpgrades.push(entry);
			}
		});
	});

    $scope.$watchCollection('upgrades', function(){
        $scope.formattedUpgrades = [];
        $scope.upgrades.forEach(function(entry){
            if (entry.id && !$scope.formattedUpgrades[entry.id]){
                $scope.formattedUpgrades[entry.id] = { number : 1};
                //$scope.formattedUpgrades[entry.id].number = 1;
            } else {
                $scope.formattedUpgrades[entry.id].number++;
            }

            $scope.formattedUpgrades[entry.id].name = entry.name;
        });
    });

	$scope.increaseCookies = function(step){
		$scope.score = $scope.score + (step ? step : 1);
	}

	$scope.buyUpgrade = function(upgrade){
		if ($scope.score >= upgrade.price){
			$scope.upgrades.push(upgrade);
			$scope.score -= upgrade.price;
			upgrade.handle();
		}
	}


});
