nav=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container">
  <a class="navbar-brand" href="#"><img height="40px" src="../assets/public/interncify_logo_blue.svg" alt=""></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#feature">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./courses.html">Courses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#faqs">FAQs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="contact.html">Contact us</a>
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
