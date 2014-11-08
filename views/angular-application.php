<!doctype html>
<html lang="fr">


<!-- Voici l'application angular, elle consiste en un simple template html incluant le JS et CSS nécessaire. -->

<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
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
						<a href="#/catalogue">
							<span class="glyphicon glyphicon-globe"></span>
							Bibliothèque
						</a>
					</li>
					<li>
						<a href="#/my">
							<span class="glyphicon glyphicon-music"></span>
							Ma musique
						</a>
					</li>
					
				</ul>
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Filtrer les éléments">
					</div>
					<!-- <button type="submit" class="btn btn-default">Submit</button> -->
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown">
							<span class="glyphicon glyphicon-user"></span>
							Mon compte
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li><a >Action</a></li>
							<li><a >Another action</a></li>
							<li><a >Something else here</a></li>
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



	<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
		<div class="container-fluid">
			Liste de lecture en cours
		</div>
	</nav>









	<!-- Zone des js vendors -->
	<script type="text/javascript" src="public/js/vendors/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="public/js/vendors/underscore.js"></script>
	<script type="text/javascript" src="public/js/vendors/bootstrap.min.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular-route.js"></script>
	<script type="text/javascript" src="public/js/vendors/angular-animate.js"></script>

	


	<!--Zone des js perso-->
	<script type="text/javascript" src="public/js/JukeBox.js"></script>
	<script type="text/javascript" src="public/js/ma-bibliotheque/ma-bibliotheque.js"></script>
	<script type="text/javascript" src="public/js/catalogue/catalogue.js"></script>
	
</body>
</html>
