function myFunction(x) {
    x.classList.toggle("change");
}

/* Set the width of the side navigation to 250px */
function toggleNav() {
  var sideNav = document.getElementById("mySidenav");

  if (sideNav.style.width == "250px") {
    sideNav.style.width = "0";
  }
  // hotfix because width == "" when page first loaded for some reason
  else if (sideNav.style.width == "") {
    sideNav.style.width = "250px";
  }
  else if (sideNav.style.width == "0px") {
    sideNav.style.width = "250px";
  }
}
