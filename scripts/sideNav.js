// How to get this file:
// 1. Make edits to sideNav.html
// 2. Run the command sed 's/\\/\\\\/g;s/^.*$/&\\/g;s/'\''/\\'\''/g' sideNav.html > escapedSideNav.html
// 3. Copy content of escapedSideNav.html
// 4. Paste inside this this function
// You can also just make edits to this file or escapedSideNav.html directly but
// make sure you add a / to the end of this line. The provided directions
// automates it to avoid error and allows you to edit with syntax highlighting

document.write('\
\
<div id="hambuger" class="container" onclick="myFunction(this); toggleNav();">\
  <div class="bar1"></div>\
  <div class="bar2"></div>\
  <div class="bar3"></div>\
</div>\
<div id="mySidenav" class="sidenav">\
  <a href="#">Home</a>\
  <a href="#">Pipeline</a>\
  <a href="#">Case Match Else</a>\
  <a href="#">Iterators</a>\
  <a href="#" class="subsection">First exposure</a>\
  <a href="#" class="subsection">Iterator chaining</a>\
  <a href="#" class="subsection">Iterator slicing</a>\
  <a href="#" class="subsection">Lazy Evaluation</a>\
  <a href="#">Lazy Lists</a>\
  <a href="#">Recrsive Factorial</a>\
  <a href="#" class="subsection">Base Case</a>\
  <a href="#" class="subsection">Recursive Step</a>\
  <a href="#" class="subsection">Error Handling</a>\
  <a href="#" class="subsection">Wildcard Pattern</a>\
  <a href="#" class="subsection">Automatic Tail Call Optimization</a>\
  <a href="#"><code>addpattern</code> Factorial</a>\
  <a href="#">Fibonacci</a>\
  <a href="#">Binary Tree</a>\
</div>\
\
');
