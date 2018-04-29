/** start of iterator code snippets */
var ite1 = "cookiebox = iter([\"chocolate chip\", \"oatmeal raisin\", \"sugar\"])"
var ite2 = ite1 + "\n\n" + "next(cookiebox) |> print"
var ite3 = "x = iter([1, 2, 3])"
var ite4 = ite3 + "\n\n" + "x |> list |> print"


var ite5 = "box1 = iter([\"chocolate chip\", \"oatmeal raisin\", \"sugar\"])\nbox2 = iter([\"shortbread\", \"gingerbread\"])"
var ite6 = "cookiebox = chain(box1, box2)"
var ite7 = "cookiebox = box1 :: box2"
var ite8 = "x = range(1,15)::range(20,25)\nx |> list |> print"

var ite9 = "cookiebox = iter([\"chocolate chip\", \"oatmeal raisin\", \"sugar\",\"shortbread\", \"gingerbread\"])\nsubbox = cookiebox$[0:2]"
var ite10 = ite9 + "\n\n" + "subbox |> list |> print\ncookiebox |> list |> print"
var ite11 = "a = iter(\"abc\")\na$[-1] |> print"

var ite12 = "def x(n) = (n,) :: x(n + 1)"
var ite13 = ite12 + "\n\n" + "x(5)$[0:5] |> list |> print"

/** start of datatypes code snippets */
var dat1 = "data Empty()\ndata Leaf(n)\ndata Node(l, r)"
var dat2 = dat1 + "\n\n" + "def size(Empty()) = 0"
var dat3 = dat2 + "\n\n" + "@addpattern(size)\ndef size(Leaf(n)) = 1\n\n@addpattern(size)\ndef size(Node(l, r)) = size(l) + size(r)"
var dat4 = dat3 + "\n\n" + "size(Node(Empty(), Leaf(10))) |> print"

/** start of recursive factorial code snippets */
var rec1 = "def factorial(n):\n    \"\"\"Compute n! where n is an integer >= 0.\"\"\"\n\n#Test cases:\n0 |> factorial |> print  # 1"
var rec2 = "def factorial(n):\n    \"\"\"Compute n! where n is an integer >= 0.\"\"\"\n    case n:\n        match 0:\n            return 1\n\n# Test cases:\n0 |> factorial |> print  # 1\n3 |> factorial |> print  # 6"
var rec3 = "def factorial(n):\n    \"\"\"Compute n! where n is an integer >= 0.\"\"\"\n    case n:\n        match 0:\n            return 1\n        match x is int if x > 0:\n            return x * factorial(x-1)\n\n# Test cases:\n-1 |> factorial |> print  # TypeError\n0.5 |> factorial |> print  # TypeError\n0 |> factorial |> print  # 1\n3 |> factorial |> print  # 6"
var rec4 = "def factorial(n):\n    \"\"\"Compute n! where n is an integer >= 0.\"\"\"\n    case n:\n        match 0:\n            return 1\n        match x is int if x > 0:\n            return x * factorial(x-1)\n    else:\n        raise TypeError(\"the argument to factorial must be an integer >= 0\")\n\n# Test cases:\n-1 |> factorial |> print  # TypeError\n0.5 |> factorial |> print  # TypeError\n0 |> factorial |> print  # 1\n3 |> factorial |> print  # 6"
var rec5 = "def factorial(n):\n    \"\"\"Compute n! where n is an integer >= 0.\"\"\"\n    case n:\n        match 0:\n            return 1\n        match _ is int if n > 0:\n            return n * factorial(n-1)\n    else:\n        raise TypeError(\"the argument to factorial must be an integer >= 0\")\n\n# Test cases:\n-1 |> factorial |> print  # TypeError\n0.5 |> factorial |> print  # TypeError\n0 |> factorial |> print  # 1\n3 |> factorial |> print  # 6"

/** pattern matching code snippets*/

var pat1 = "items = iter([\"aluminum\", \"plastic\", \"plastic\", \"plastic\", \"plastic\", \"paper\", \"plastic\", \"aluminum\", \"aluminum\", \"paper\", \"plastic\"])"
var pat2 = "items = \"iter([\"aluminum\", \"plastic\", \"plastic\", \"plastic\", \"plastic\", \"paper\", \"plastic\", \"aluminum\", \"aluminum\", \"paper\", \"plastic\"])\ndef countItems(recyclable, aluminums, papers, plastics):\n    \"\"\"count the items based on material\"\"\"\n    case (recyclable):\n        match \"aluminum\":\n            current = aluminums[0]\n            aluminums[0] = current+1\n        match \"paper\":\n            current = papers[0]\n            papers[0] = current+1\n        match \"plastic\":\n            current = plastics[0]\n            plastics[0] = current+1\n    else:\n            raise TypeError(\"item not recyclable: \" + recyclable)\n\nnextItem = next(items,None)\n\nnumAluminum = [0]\nnumPaper = [0]\nnumPlastic = [0]\n\nwhile (nextItem != None) :\n  countItems(nextItem, numAluminum, numPaper, numPlastic)\n  nextItem = next(items,None)\n\n\"Number of aluminum items: \"+str(numAluminum[0]) |> print\n\"Number of paper items: \"+str(numPaper[0]) |> print\n\"Number of plastic items: \"+str(numPlastic[0]) |> print"

/** addpattern code snippets*/
var add1 = 

/** start of the lazy list code snippets */
var laz1 = "def fib() = (0, 1) :: map ((+), fib(), fib()$[1:])\n\nfib()$[20] |> print"
