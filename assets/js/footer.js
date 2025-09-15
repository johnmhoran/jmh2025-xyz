// const now = new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";
// document.getElementById("footer").innerHTML = `
// <footer class="bg-dark text-light text-center py-3 mt-5">
//   Copyright © 2025 JMH   |   License: MIT   |   Built with TLC<br>
//   Last deployed: ${now}
// </footer>
// `;

const now = new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";
document.getElementById("footer").innerHTML = `
<footer class="bg-dark text-light text-center py-3 mt-auto">
  Copyright © _____ &nbsp;&nbsp; | &nbsp;&nbsp; License: _____ &nbsp;&nbsp; | &nbsp;&nbsp; Built with TLC<br>
  Last deployed: ${now}
</footer>
`;
