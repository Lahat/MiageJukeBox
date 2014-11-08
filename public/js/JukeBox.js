(function () {
	var JukeBox = angular.module('JukeBox', ['ngRoute', 'ngAnimate', 'JukeBoxControllers', 'JukeBoxDirectives']);


	JukeBox.config(['$interpolateProvider', function($interpolateProvider){
		$interpolateProvider
			.startSymbol('[[')
			.endSymbol(']]');
	}]);

	JukeBox.config ([ '$routeProvider', function($routeProvider){
		$routeProvider
			.when ('/my',{ 
					templateUrl: 'public/templates/ma-bibliotheque.ng-view.html',
					controller: 'MaBibliothequeMainController'
				}
			)
			.when ('/catalogue',{ 
					templateUrl: 'public/templates/catalogue.ng-view.html',
					controller: 'CatalogueMainController'
				}
			)
			.otherwise({
				redirectTo: '/my'
			});
		}]);
	
	window.JukeBoxControllers = angular.module('JukeBoxControllers', []);
	window.JukeBoxDirectives = angular.module('JukeBoxDirectives', []);
})();