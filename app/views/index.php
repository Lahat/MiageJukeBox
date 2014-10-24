<!doctype html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>
	<link rel="stylesheet" type="text/css" href="css/vendors/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	
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
					<li class="active"><a href="#">Bibliothèque</a></li>
					<li><a href="#">Ma musique</a></li>
					
				</ul>
				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Filtrer les éléments">
					</div>
					<!-- <button type="submit" class="btn btn-default">Submit</button> -->
				</form>
				<ul class="nav navbar-nav navbar-right">
					
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Mon compte<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li ><a href="#" style="color:red">Se déconnecter</a></li>
						</ul>
					</li>
				</ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>

	
	<div ng-view class="main-container col-xs-12">
		<div class="saved-playlist col-xs-3">
			<div class="wrapper">
				Hello
			</div>
		</div>
		<div class="saved-playlist col-xs-3">
			<div class="wrapper">
				<h3>Hello</h3>
				<hr>
				Créée le xx/xx/xx
				<hr>
			</div>
		</div>
		<div class="saved-playlist col-xs-3">
			<div class="wrapper">
				Hello
			</div>
		</div>
		<div class="saved-playlist col-xs-3">
			<div class="wrapper">
				Hello
			</div>
		</div>
		<div class="saved-playlist col-xs-3">
			<div class="wrapper">
				Hello
			</div>
		</div>
	</div>



	<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
		<div class="container-fluid">
			Liste de lecture en cours
		</div>
	</nav>















	<!-- Zone des js -->
	<script type="text/javascript" src="js/vendors/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/vendors/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/vendors/angular.min.js"></script>
	
</body>
</html>
