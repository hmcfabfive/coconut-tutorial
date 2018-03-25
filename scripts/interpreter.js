// trigger the bar rotations on the hamburger
function myFunction(x) {
    x.classList.toggle("change");
}

// toggle the side navigation
function toggleNav() {
  var sideNav = document.getElementById("mySidenav");
  var leftSide = document.getElementsByClassName("split")[0];
  var rightSide = document.getElementsByClassName("split")[1];
  var hamburger = document.getElementById("hambuger");

  // if sidenav is open, close it
  if (sideNav.style.width == "250px") {
    sideNav.style.width = "0";
    leftSide.style.left = "0";
    rightSide.style.right = "0";
    hambuger.style.marginLeft = "50px";
  }
  // if sidenav is closed, open it
  else if (sideNav.style.width == "" || sideNav.style.width == "0px") {
    sideNav.style.width = "250px";
    leftSide.style.left = "250px";
    rightSide.style.right = "-250px";
    hamburger.style.marginLeft = "275px";
  }
}
