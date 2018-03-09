# Iterators

This section of tutorial will be focused on iterators. If you are unfamiliar with iterators in Python, you might find it helpful to read through the Python tutorial on iterators and generators, which you can find [here](https://docs.Python.org/3/tutorial/classes.html#iterators). This tutorial also references the Python itertools module, the documentation for which can be found [here](https://docs.Python.org/2/library/itertools.html).

Python's iterator functionality can be complex and a bit difficult to use. A good chunk of it comes from itertools, which is a module that implements several iterator building blocks inspired by functional programming languages from Haskell and APL. Coconut simplifies many of these features and treats them as built-ins rather than add-ons., making using iterators easier and more effective.

Let’s start by looking at iterator chaining. Iterator chaining is the ability to link together iterators and therefore to be able to treat consecutive sequences as though they were the same sequence. In Python, this is done using the itertools.chain() functionality, which works in the following fashion
```
chain('ABC', 'DEF') --> A B C D E F
```
 In Coconut this is simplified by using the `::` operator. As a basic example take the following:
```
range(-10, -5) :: range (-5, 0) |> list |> print
```
Let’s break this down. We can start by looking at the two range functions, each of which constructs an iterator between the specified numbers. The `::` command links the two, instructing Coconut to proceed from the first iterator to the second. Following this, we use pipelines `(|>)` to tell Coconut to convert to a list and print the output:

```
Output([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])
```

This is all fine, but what is really special about Coconut’s iterator chaining abilities is that Coconut’s iterator chaining works lazily. This means that nothing gets evaluated until it is needed, which adds a lot of flexibility to Coconuts usage, especially when dealing with things like infinite series. Let’s take a look at the following function definition, which takes advantage of Coconut’s lazy chaining.

```
def N(n=0) = (n,) :: N(n+1)
```

At first glance this probably looks scary, or at the very least, like a recipe for an infinite loop. We see that the definition of the function `N` is that `n` is being concatenated with `n + 1`. However, this is not what will happen due to the lazy evaluation. Let’s use partial application to call this function on a range of values, then print the values iterated over to see what actually happens.

```
N()$[0:10] |> list |> print

Output([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

Not so bad after all! If we were to try to define a function in this way in Python, it would be incredibly complicated, and it would require you to understand iterators and their functionality in Python on a very deep level. If you would like to get an idea for what this would look like, simply copy that one-line function definition above into a Coconut file and compile it to Python. It certainly isn’t pretty!

To see a more complex implementation of chaining in coconut, look at Lazy Lists!

Let’s now take a moment to look at some of the Python itertools functionality that’s built into Coconut and ready to use fairly quickly.

## takewhile and dropwhile

Coconut provides itertools.takewhile as a built-in part of the language under the name takewhile. It works the same way in both Python and Coconut. It takes a predicate or a condition as its first argument and then an iterable as its second argument and returns an iterator containing only those values that satisfied the condition specified. Let’s take a look at the following to begin with:

```
negatives = takewhile((x) -> x < 0, range(-10,10))
```

What does this say? Well we are defining an iterator called negatives. The iterable I have chosen to look through is the range of integers from -10 to 10. The predicate or condition is defined using Coconut’s simplified lambda syntax. It states that given an input `x`, we want to check if `x` is less than zero. The predicate and condition are fed to the takewhile function. Let’s convert negatives to a list and print to see what is returned when we iterate through negatives.

```
[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]
```

As desired, we get just the negative integers from the range we fed in.

Similar to takewhile, we have dropwhile, which is the Coconut version of itertools.dropwhile. It also takes a predicate and an iterable as its arguments, but instead it returns an iterator containing all the elements that do not satisfy the predicate. If we take our example from takewhile, and this time use dropwhile instead we get the following:

```
positives = dropwhile((x) -> x < 0, range(-10,10))
positives |> list |> print

Output ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

Something important to remember is that neither takewhile nor dropwhile affect the original iterable! They create new iterables that satisfy the conditions passed in.

## groupsof

Say you have an iterator for a long sequence and you want to break it down into chunks. This is what groupsof does. It takes a number and an iterable as input, and converts it to a list of `n` sized tuples (the only exception being if the original iterable was not evenly divisible by `n`, in which case the last tuple will be less than `n` in length).

```
groupsof(2, range(1,10)) |> list |> print
[(1, 2), (3, 4), (5, 6), (7, 8), (9,)]
```

This is not built in in Python, so doing the same thing in Python would require the following, which is a bit more cumbersome:
(copypaste Python example from docs in here)
