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
  <a href="../index.html"><strong>Home</strong></a>\
  <a href="../menu.html"><strong>Menu</strong></a>\
  <hr>\
  <a href="../Pipelines/pipe-operators.html">Pipelines</a>\
  <a href="../Patternmatch/Patternmatch_p1.html">Pattern Matching</a>\
    <div class = "subsection">\
    <a href="../Patternmatch/Patternmatch_p2.html">Learning Pattern Matching</a>\
    <a href="../Patternmatch/Patternmatch_p3.html">Pattern Matching Example</a>\
  </div>\
  <a href="../Addpattern/Addpattern_p1.html">Add Pattern Recursion</a>\
  <a href="../DataTypes/datatypes_p1.html">Data Types</a>\
  <div class = "subsection">\
    <a href="../DataTypes/datatypes_p2.html">Syntax</a>\
    <a href="../DataTypes/datatypes_p3.html">Binary Trees</a>\
  </div>\
  <a href="../Iterators/iterator_title.html">Iterators</a>\
  <div class = "subsection">\
    <a href="../Iterators/iterator_p1_interpreter.html">First exposure</a>\
    <a href="../Iterators/iterator_p2_interpreter.html">Iterator chaining</a>\
    <a href="../Iterators/iterator_p3_interpreter.html">Iterator slicing</a>\
    <a href="../Iterators/iterator_p4_interpreter.html">Lazy Evaluation</a>\
  </div>\
  <a href="../LazyList/lazylist_p1.html">Lazy Lists</a>\
  <div class = "subsection">\
    <a href="../LazyList/lazylist_p2.html">In Python</a>\
    <a href="../LazyList/lazylist_p3.html">In Coconut</a>\
  </div>\
  <a href="../Recursive-Factorial/recursive-factorial_p1.html">Recursive Factorial</a>\
  <div class = "subsection">\
    <a href="../Recursive-Factorial/recursive-factorial_p2.html">Base Case</a>\
    <a href="../Recursive-Factorial/recursive-factorial_p3.html">Recursive Call</a>\
    <a href="../Recursive-Factorial/recursive-factorial_p4.html">Error Handling</a>\
    <a href="../Recursive-Factorial/recursive-factorial_p5.html">Wildcard Pattern</a>\
    <a href="../Recursive-Factorial/recursive-factorial_p6.html">Automatic Tail Call Optimization</a>\
  </div>\
</div>\
\
');
