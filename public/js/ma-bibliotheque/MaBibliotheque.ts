/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts" />

module MaBibliotheque{


    export interface IMorceau{
        id: number;
        name: string;
        duree: number;
    }

    export interface IPlaylist{
        id: number;
        name: String;
        morceaux : Array<IMorceau>;
    }


    export class MaBibliothequeMainController {

        // angular
        private $scope:ng.IScope;


        //membres

        private playlists:Array<IPlaylist>;

        // construct
        constructor($scope:ng.IScope, $window:ng.IWindowService) {
            this.$scope = $scope;
            this.playlists = new Array<IPlaylist>();

            var morceauID : number = 0;

            _(5).times((i:number)=>{
                var playlistDemo: IPlaylist = {
                    id: i,
                    name: "Playlist"+i,
                    album: "Album"+i,
                    morceaux:[]
                };

                var nbMorceaux : number = Math.floor(Math.random()*20);

                _(nbMorceaux).times((j)=>{

                    var morceauDemo: IMorceau = {
                        id: morceauID,
                        name: "Morceau démo "+morceauID,
                        duree : Math.floor(Math.random()*1000),
                        artiste: 'Artiste '+ morceauID,
                        album : 'Album '+ morceauID
                    };

                    morceauID++;
                    playlistDemo.morceaux.push(morceauDemo);
                });

                this.playlists.push(playlistDemo);
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
                _.forEach(playlist.morceaux, (morceau:IMorceau)=>{
                    duree += morceau.duree;
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
