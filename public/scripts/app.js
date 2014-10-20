var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider', 
	function($routeProvider) {
		var templatesBaseDir = 'views/templates/';
		$routeProvider.
			when('/AddNewOrder/:orderId', {
				templateUrl: templatesBaseDir + 'add-order.html',
				controller: 'AddOrderController'
			}).
			when('/ShowOrders', {
				templateUrl: templatesBaseDir + 'show-order.html',
				controller: 'ShowOrderController'
			}).
			otherwise({
				redirectTo: '/addOrder'
			});
	} // END OF ANON FUNCTION
]);

// NOW WE GO AFTER THE CONTROLLERS!

app.controller('AddOrderController', function($scope){
	$scope.message = 'This is Add new order screen';
});

app.controller('ShowOrderController', function($scope, $routeParams) {
	$scope.order_id = $routeParams.orderId;

});