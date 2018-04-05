// How to get this file:
// 1. Make edits to sideNav.html
// 2. Run the command sed 's/\\/\\\\/g;s/^.*$/&\\/g;s/'\''/\\'\''/g' sideNav.html > escapedSideNav.html
// 3. Copy content of escapedSideNav.html
// 4. Paste inside this this function
// You can also just make edits to this file or escapedSideNav.html directly but
// make sure you add a / to the end of each line. The provided directions
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
  <a href="http://localhost:8080/pipelines/pipe-operators.html">Pipelines</a>\
  <a href="#">Case Match Else</a>\
  <a href="http://localhost:8080/Iterators/iterator_title.html">Iterators</a>\
  <div class = "subsection">\
    <a href="http://localhost:8080/Iterators/iterator_p1_interpreter.html">First exposure</a>\
    <a href="http://localhost:8080/Iterators/iterator_p2_interpreter.html">Iterator chaining</a>\
    <a href="http://localhost:8080/Iterators/iterator_p3_interpreter.html">Iterator slicing</a>\
    <a href="http://localhost:8080/Iterators/iterator_p4_interpreter.html">Lazy Evaluation</a>\
  </div>\
  <a href="http://localhost:8080/LazyList/lazylist_p1.html">Lazy Lists</a>\
  <div class = "subsection">\
    <a href="http://localhost:8080/LazyList/lazylist_p2.html">In Python</a>\
    <a href="http://localhost:8080/LazyList/lazylist_p3.html">In Coconut</a>\
  </div>\
  <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p1.html">Recursive Factorial</a>\
  <div id="Recurse Fact Subsection" class = "subsection">\
    <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p2.html">Base Case</a>\
    <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p3.html">Recursive Call</a>\
    <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p4.html">Error Handling</a>\
    <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p5.html">Wildcard Pattern</a>\
    <a href="http://localhost:8080/recursive-factorial/recursive-factorial_p6.html">Automatic Tail Call Optimization</a>\
  </div>\
  <a href="#"><code>addpattern</code> Factorial</a>\
  <a href="#">Fibonacci</a>\
  <a href="#">Binary Tree</a>\
</div>\
\
');
