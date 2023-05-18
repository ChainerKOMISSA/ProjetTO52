<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Events</title>
  
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!--Main css-->
  <link rel="stylesheet" href="css/app.css">
</head>
<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">

<!--Navbar-->
   <nav class="main-header navbar navbar-expand navbar-dark">
        <a class="navbar-brand" href="#">
            <img src="" width="30" height="30" class="d-inline-block align-top" alt="">
            Events.com
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Acceuil <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Evènements
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Concerts</a>
                <a class="dropdown-item" href="#">Spectacles</a>
                <a class="dropdown-item" href="#">Festivals</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Autres</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Avis</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('loginpage')}}">Mon compte</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Rechercher..." aria-label="Search">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </div>
    </nav>
<!--Navbar end-->

<!--Sidebar - Publicités-->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      Publicités
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    &nbsp;<div class="content-header">
        <img src="{{asset('my_image_link/fimu2.jpg')}}" alt="" height="400" width="1400">
    </div><br>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Du 25 au 28 Mai 2023</div>
                    <div class="card-tools"><a class="btn btn-danger" href="">Acheter un ticket</a></div>
                </div>
                <div class="card-body">
                    <h1>FIMU BELFORT - 36ème édition</h1>
                    <div class="row">
                        <div class="col-md-6">
                            Organisé et financé par la Ville de Belfort avec le soutien des associations étudiantes de l’Aire urbaine, 
                            le <b>FIMU de Belfort</b> se déroule chaque année le week-end de la Pentecôte. Du <b>25 au 28 mai 2023</b> la cité du Lion se transformera en une 
                            majestueuse scène musicale internationale avec la représentation d'un millier de musiciens étudiants et amateurs originaires d'une 
                            trentaine de pays différents. <br>
                            Diversité, gratuité et convivialité : ce triptyque, résume, depuis sa création en 1987, l’ambiance de ce festival unique en son genre.
                            Classique, Jazz, Divers, Musiques du monde, Musiques actuelles et Musiques nouvelles : les nombreux festivaliers attendus - familles, jeunes, 
                            curieux ou mélomanes - découvriront diverses sensibilités artistiques à travers des centaines de concerts gratuits.
                        </div>
                        <div class="col-md-6">
                            <img src="{{asset('my_image_link/fimu3.jpg')}}" alt="">
                        </div>
                    </div><br><br>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="{{asset('my_image_link/fimu4.jpg')}}" alt="">
                        </div>
                        <div class="col-md-6">
                            <p><h2>Une forte dimension estudiantine</h2></p>
                            Des élèves participent activement à l’organisation du festival à travers le Comité de pilotage. 
                            Une dizaine d’étudiants – principalement de <b>l’Université de Technologie Belfort Montbéliard</b> – se réunit toutes les deux semaines pour 
                            mettre en place le recrutement des bénévoles. 300 personnes sont nécessaires pour contribuer au bon déroulement de cet événement musical unique au monde.
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>

<!-- PAGE PLUGINS -->
<!-- jQuery Mapael -->
<script src="plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="plugins/raphael/raphael.min.js"></script>
<script src="plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="plugins/jquery-mapael/maps/usa_states.min.js"></script>
<!-- ChartJS -->
<script src="plugins/chart.js/Chart.min.js"></script>


<!-- AdminLTE dashboard demo -->
<script src="dist/js/pages/dashboard2.js"></script>
</body>
</html>
