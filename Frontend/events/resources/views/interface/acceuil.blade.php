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

  <link rel="icon" type="image/x-icon" href="{{asset("my_image_link/Elogo.png")}}">
</head>
<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">

<!--Navbar-->
   <nav class="main-header navbar navbar-expand navbar-dark">
        <a class="navbar-brand" href="#">
            <img src="{{asset("my_image_link/Elogo.png")}}" width="30" height="30" class="d-inline-block align-top" alt="">
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
      <div class="badge bg-danger text-wrap" style="width: 15rem;">
        <h3>Publicités</h3>
      </div>
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="{{asset("my_image_link/car1.jpeg")}}" alt="First slide" height="400">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="{{asset("my_image_link/car2.jpg")}}" alt="Second slide" height="400">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="{{asset("my_image_link/car3.jpg")}}" alt="Third slide" height="400">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="{{asset("my_image_link/car4.jpg")}}" alt="Fourth slide" height="400">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
      </div><!-- /.container-fluid -->
    </div><br>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <h4>Découvrez les catégories du moment</h4>
      </div><!--/. container-fluid -->

      <div class="container-fluid">
                <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-danger"><i class="fa fa-music"></i></span>

              <div class="info-box-content">
                <b><span class="info-box-text">Musique</span></b>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-secondary"><i class="fas fa-guitar"></i></span>

              <div class="info-box-content">
                <b><span class="info-box-text">Arts de spectacle</span></b>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-secondary"><i class="fas fa-theater-masks"></i></span>

              <div class="info-box-content">
                <b><span class="info-box-text">Théâtres</span></b>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-danger"><i class="fas fa-glass-cheers"></i></span>

              <div class="info-box-content">
                <b><span class="info-box-text">Fêtes</span></b>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>

        <div class="row">
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-danger"><i class="far fa-star"></i></span>
  
                <div class="info-box-content">
                    <b><span class="info-box-text">Loisirs</span></b>
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-secondary"><i class="fas fa-pizza-slice"></i></span>
  
                <div class="info-box-content">
                    <b><span class="info-box-text">Gastronomie</span></b>
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-secondary"><i class="fas fa-book"></i></span>
  
                <div class="info-box-content">
                  <b><span class="info-box-text">Education</span></b>
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-danger"><i class="fas fa-hand-holding-medical"></i></span>
  
                <div class="info-box-content">
                    <b><span class="info-box-text">Santé</span></b>
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
          </div>
      </div><br><br><!--/. container-fluid --> 

      <div class="container-fluid">
        <h4>A ne pas rater!</h4><br>
        <div class="row">
          @foreach ($events as $event)
          &nbsp;&nbsp;<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="{{$event['imageEvenement']}}" alt="Card image cap">
            <div class="card-body">
              <h3>{{$event['nomEvenement']}}</h3>
              <p class="card-text">{{$event['descriptionEvenement']}}</p>
                <small><p class="text-danger">{{$event['dateDebut']}} au {{$event['dateFin']}}</p></small>
              <a href="{{route('detailsfimu')}}" class="btn btn-danger">Voir les détails</a>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          @endforeach
        </div>
      </div><br><br><!--/. container-fluid -->

      <div class="container-fluid">
        <h4>Autres évènements</h4><br>
        <div class="row">
          @foreach ($events as $event)
          &nbsp;&nbsp;<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="{{asset("my_image_links/")}}" alt="Card image cap">
            <div class="card-body">
              <h3 class="card-title">{{$event['nomEvenement']}}</h3>
              <p class="card-text">{{$event['descriptionEvenement']}}</p>
              <a href="#" class="btn btn-secondary">Voir</a>
            </div>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          @endforeach
        </div>
      </div><!--/. container-fluid -->

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
