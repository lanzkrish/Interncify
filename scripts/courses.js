nav=`<nav class="navbar navbar-expand-lg bg-white">
<div class="container">
  <a class="navbar-brand" href="./"><img height="40px" src="./assets/public/logo-interncify.png" alt=""></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="./index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Courses</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="./whitepaper.html">White Paper</a>
    </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="./contact.html">Contact us</a>
      </li>
    </ul>
    <div>
        <!-- <a href="" class="btn fw-bold">Login</a> -->
        <a href="registration.html" target="_blank" class="btn btn-primary fw-bold">Register</a>
    </div>
    
  </div>
</div>
</nav>`
document.getElementById('navigation').innerHTML=nav;
