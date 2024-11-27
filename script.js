// script.js
window.addEventListener("load", () => {
  // Hide the loading spinner once the page finishes loading
  document.getElementById("loadingPage").style.display = "none";
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Prevent immediate navigation

    // Show the preloader
    document.getElementById("loadingPage").style.display = "flex";

    // Redirect after a slight delay
    const target = event.target.href; // Get the target URL
    setTimeout(() => {
      window.location.href = target;
    }, 300); // Adjust delay as needed
  });
});
