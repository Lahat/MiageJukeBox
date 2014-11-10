/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts" />

module Catalogue{

    export class CatalogueMainController {

        // Scope angular
        private $scope : ng.IScope;

        // Membres

        private artistes = [];
        private titres = [];
        private genre = [];
        private albums = [];


        // Constructeur
        constructor($scope: ng.IScope, $window: ng.IWindowService){
            this.$scope = $scope;
        }
    }
}

window.JukeBox.controller('CatalogueMainController', ['$scope', '$window', function($scope, $window){
    $scope.vm = new Catalogue.CatalogueMainController($scope, $window);
}]);
