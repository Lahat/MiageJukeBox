/**
* Created by Geoffrey on 08/11/2014.
*/
/// <reference path="../headers/Data.d.ts" />

var AllController = (function () {
    // Constructeur
    function AllController($scope, JukeBoxBride) {
        var _this = this;
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBride;
        this.model = new DatabaseEmulator();

        this.model.getTracks(function (tracks) {
            _this.tracks = tracks;
        });
    }
    return AllController;
})();

window.JukeBox.controller('AllController', [
    '$scope', 'JukeBoxBridge', function ($scope, JukeBoxBridge) {
        $scope.vm = new AllController($scope, JukeBoxBridge);
    }]);
//# sourceMappingURL=All.js.map
