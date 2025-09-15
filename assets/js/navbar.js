document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">JMH2025</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">

        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="sandbox.html">Sandbox</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
             role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://github.com/" target="_blank">GitHub</a></li>
            <li><a class="dropdown-item" href="#" onclick="alert('🚀 Thanks for clicking. ;-)');">Important Alert</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

// Highlight active link
// const currentPage = window.location.pathname.split("/").pop();
// document.querySelectorAll(".nav-link").forEach(link => {
//   if (link.getAttribute("href") === currentPage) {
//     link.classList.add("active");
//   }
// });

// Highlight active link
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") {
  currentPage = "index.html"; // default fallback
}

document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
