/**
* Created by Geoffrey on 08/11/2014.
*/
/// <reference path="../headers/JukeBox.d.ts" />
var Catalogue;
(function (Catalogue) {
    var CatalogueMainController = (function () {
        // Constructeur
        function CatalogueMainController($scope, $window) {
            // Membres
            this.artistes = [];
            this.titres = [];
            this.genre = [];
            this.albums = [];
            this.$scope = $scope;
        }
        return CatalogueMainController;
    })();
    Catalogue.CatalogueMainController = CatalogueMainController;
})(Catalogue || (Catalogue = {}));

window.JukeBox.controller('CatalogueMainController', [
    '$scope', '$window', function ($scope, $window) {
        $scope.vm = new Catalogue.CatalogueMainController($scope, $window);
    }]);
//# sourceMappingURL=Catalogue.js.map
