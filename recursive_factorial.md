
# Page 1 (Intro and Code Preview)

Let’s implement factorial, a function to calculate n! for an integer, n >= 0. Before we start, take a look at the final product:

*Starter code:*

    def factorial(n, acc=1):
        """Compute n! where n is an integer >= 0."""
        case n:
            match 0:
                return acc
            match _ is int if n > 0:
                return factorial(n-1, acc*n)
        else:
            raise TypeError("the argument to factorial must be an integer >= 0")
    
    Test cases:
    -1 |> factorial |> print  # TypeError
    0.5 |> factorial |> print  # TypeError
    0 |> factorial |> print  # 1
    3 |> factorial |> print  # 6`

# Page 2 (Base Case)

 *Starter code:*

    def factorial(n):
    """Compute n! where n is an integer >= 0."""
    
    Test cases:
    0 |> factorial |> print  # 1

Let’s start the function by taking care of the base case - when n == 0.

Start a case block and make the first match statement `match 0` which will check if n matches to 0. According to the definition of factorial, 0! = 1. Therefore, the program should `return 1` if n matches to 0.

*Finished code:*

    def factorial(n):
        """Compute n! where n is an integer >= 0."""
        case n:
            match 0:
                return 1
    
    Test cases:
    0 |> factorial |> print  # 1

# Page 3 (Recursive Step)

*Starter code: see finished code from Page 2*

Next, we’ll add the recursive step.

*Finished code:*

    def factorial(n):
        """Compute n! where n is an integer >= 0."""
        case n:
            match 0:
                return 1
            match x is int if x > 0:
                return x * factorial(x-1)
    
    # Test cases:
    0 |> factorial |> print  # 1
    3 |> factorial |> print  # 6

# Page 4 (Error handling)

*Starter code: see finished code from Page 2*

All we have to do now is make sure the program can handle invalid inputs.

Something about adding an `else` statement for `raise TypeError(“<some error message>”)`

*Finished code:*

    def factorial(n):
        """Compute n! where n is an integer >= 0."""
        case n:
            match 0:
                return 1
            match x is int if x > 0:
                return x * factorial(x-1)
        else:
            raise TypeError("the argument to factorial must be an integer >= 0")
    
    Test cases:
    -1 |> factorial |> print  # TypeError
    0.5 |> factorial |> print  # TypeError
    0 |> factorial |> print  # 1
    3 |> factorial |> print  # 6

# Page 4 (Coconut-enabled Improvements: Wildcard Pattern)

We now have a finished recursive implementation of factorial, but we can more of Coconut’s features to tweak and improve it.

# Page 5 (Coconut-enabled Improvements: Automatic Tail Call Optimization)
