/**
 * Created by arttr_000 on 15.01.2015.
 */
(function() {
	var app = angular.module("cms", [
		"ngRoute"
	])
		.config(function ($routeProvider, $locationProvider) {
			$routeProvider.when("/views/tabs/:id", {
				templateUrl: function(url) {
					return "views/tabs/" + url.id + ".html";
				}
			});
		})
		.controller("SimpleCMSController", function($scope, $http, $location) {
			$http.get("data/tabs.json").success(function(response) {
				$scope.tabs = response.sort(function(currentTab, nextTab) {
					return currentTab.order > nextTab.order;
				});
				$location.path("views/tabs/" + $scope.tabs[0].id);
			});
			this.loadTab = function(tab) {
				$location.path("/views/tabs/" + tab.id);
			};
		});
}());