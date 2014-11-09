/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts" />
/// <reference path="../headers/Data.d.ts" />

module MaBibliotheque{




    export interface IPlaylist{
        id: number;
        name: String;
        morceaux : Array<DataStore.ITrack>;
    }


    export class MaBibliothequeMainController {

        // angular
        private $scope:ng.IScope;

        private model : DataStore.DataModel;


        //membres

        private playlists:Array<IPlaylist>;

        // construct
        constructor($scope:ng.IScope, $window:ng.IWindowService) {
            this.$scope = $scope;
            this.playlists = new Array<IPlaylist>();

            this.model = new DataStore.DataModel();

            this.model.getTracks((tracks : Array<DataStore.ITrack>)=>{

                var playlistDemo : IPlaylist = {
                    id : 1,
                    name: "Playlist demo",
                    morceaux : tracks
                };

                this.playlists.push(playlistDemo);
                this.$scope.$apply();
            });

        }


        public getPlaylists(): Array<IPlaylist>{
            console.log(this.playlists);
            return this.playlists;
        }

        public dureePlaylist(playlistID : number) : number {
            var playlist = _.findWhere(this.playlists, {id: playlistID});

            var duree : number = 0;
            if (playlist) {
                _.forEach(playlist.morceaux, (morceau:DataStore.ITrack)=>{
                    //duree += morceau.duree;
                });
            }
            return duree;
        }

    } // end class
}// end module


JukeBoxControllers.controller('MaBibliothequeMainController', ['$scope', '$window', ($scope, $window)=>{
    $scope.vm = new MaBibliotheque.MaBibliothequeMainController($scope, $window);
}]);


JukeBoxDirectives.directive('playlist', function(){


    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/playlist.html"
    };

});

JukeBoxDirectives.directive('morceau', function(){
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/morceau.html"
    };
});
