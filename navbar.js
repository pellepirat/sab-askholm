// Fetch navbar at top of site
document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("body").insertAdjacentHTML("afterbegin", data);
        });
});


// Fetch scrollbutton at top??
document.addEventListener("DOMContentLoaded", function() {
  fetch("scrollToTop.html")
      .then(response => response.text())
      .then(data => {
          document.querySelector("body").insertAdjacentHTML("afterend", data);
      });
});


// Fetch footer at end
document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("body").insertAdjacentHTML("afterend", data);
        });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // nav bar
    document.querySelector("nav").style.height = "45px";
    document.querySelector(".top-bar").style.margin = "0 5%";
    document.getElementById("logo").style.scale = 0.45;
    document.getElementById("logo").style.opacity = 0;

    // scroll button show
    document.getElementById('scrollButton').style.opacity = 1;
  } else {
    // navbar
    document.querySelector("nav").style.height = "110px";
    document.getElementById("logo").style.scale = 1;
    document.getElementById("logo").style.opacity= 1;

    // scroll button hide
    document.getElementById('scrollButton').style.opacity = 0;
  
  }
}
// Button to return to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}

function scrollToId(id) {
  document.getElementById(id).scrollIntoView();
}

