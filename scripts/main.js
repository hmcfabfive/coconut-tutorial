// trigger the bar rotations on the hamburger
function myFunction(x) {
    x.classList.toggle("change");
}

// toggle the side navigation
function toggleNav() {
  var sideNav = document.getElementById("mySidenav");
  var mainContent = document.getElementById("main-content");
  var hamburger = document.getElementById("hambuger");

  // if sidenav is open, close it
  if (sideNav.style.width == "250px") {
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";
    hambuger.style.marginLeft = "50px";
  }
  // if sidenav is closed, open it
  else if (sideNav.style.width == "" || sideNav.style.width == "0px") {
    sideNav.style.width = "250px";
    mainContent.style.marginLeft = "250px";
    hamburger.style.marginLeft = "275px";
  }
}

// toggle hide/show for solutions
function showContent(){
  var x = document.getElementById("solutionText")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
