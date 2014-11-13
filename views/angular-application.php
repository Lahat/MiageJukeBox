<!doctype html>
<html lang="fr">

<!-- Voici l'application angular, elle consiste en un simple template html incluant le JS et CSS nécessaire. -->


<head>
	<meta charset="UTF-8">
	<title>JukeBox</title>
	<link rel="stylesheet" type="text/css" href="public/css/vendors/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="public/css/index.css">
	<link rel="stylesheet" type="text/css" href="public/css/angular-animate.css">
</head>
<body ng-app='JukeBox'>
	
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">JukeBox</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li>
						<a href="#/artists">
							<span class="glyphicon glyphicon-user"></span>
							Artistes
						</a>
					</li>
                    <li>
                        <a href="#/all">
                            <span class="glyphicon glyphicon-music"></span>
                            Tous les morceaux
                        </a>
                    </li>
					<li>
						<a href="#/my">

							<span class=" glyphicon glyphicon-paperclip"></span>
							Ma musique
						</a>
					</li>
					
				</ul>
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Trouver partout" ng-model="globalFilter">
					</div>
					<!-- <button type="submit" class="btn btn-default">Submit</button> -->
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown">
							<span class="glyphicon glyphicon-cog"></span>
							Options
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a >Mon profil</a></li>
							<li class="divider"></li>
							<li ><a style="color:red">
									Se déconnecter
									<span class="glyphicon glyphicon-remove-circle"></span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>

	
	<div ng-view class="main-container view-animate row-fluid">
		
	</div>



    <play-bar ng-controller="PlayBar"></play-bar>




    <!-- Zone des modals -->


    <div id="artist-modal" class="modal fade" ng-controller="ArtistModalController" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">
                        [[vm.getArtist().name]]
                    </h4>
                </div>
                <div class="modal-body">
                    <img ng-src="[[vm.getArtist().image_url]]" alt="" style="float:left; max-width: 150px; padding-right:1em"/>
                    [[vm.getArtist().info]]
                    <hr/>
                    <h4>Autre titres:</h4>
                    <morceau ng-repeat="morceau in vm.getArtist().morceaux"></morceau>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->






	<!-- Zone des js vendors -->
	<script type="text/javascript" src="public/js/vendors/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="public/js/vendors/underscore.js"></script>
	<script type="text/javascript" src="public/js/vendors/bootstrap.min.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular-route.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular-animate.js"></script>




    <!--Zone des données de test-->

    <script type="text/javascript" src="public/js/Database/DataStore.js"></script>
    <script type="text/javascript" src="public/js/Database/DatabaseEmulator.js"></script>

    <!--Zone des js perso-->
    <script type="text/javascript" src="public/js/JukeBox.js"></script>
	<script type="text/javascript" src="public/js/controllers/MaBibliotheque.js"></script>
	<script type="text/javascript" src="public/js/controllers/All.js"></script>
    <script type="text/javascript" src="public/js/controllers/PlayBar.js"></script>
    <script type="text/javascript" src="public/js/controllers/ArtistModalController.js"></script>



	
</body>
</html>
