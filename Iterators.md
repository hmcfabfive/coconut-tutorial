# Iterators

### Page 0: Introduction

This section of tutorial will be focused on iterators. If you are unfamiliar with iterators in Python, you might find it helpful to read through the Python tutorial on iterators and generators, which you can find [here](https://docs.Python.org/3/tutorial/classes.html#iterators). This tutorial also references the Python itertools module, the documentation for which can be found [here](https://docs.Python.org/2/library/itertools.html).

Python's iterator functionality can be complex and a bit difficult to use. A good chunk of it comes from itertools, which is a module that implements several iterator building blocks inspired by functional programming languages from Haskell and APL. Coconut simplifies many of these features and treats them as built-ins rather than add-ons., making using iterators easier and more effective.

***
### Page 1: First exposure -> python iterators

Let's start by entering the following list of cookie types into our Coconut interpreter:
```
x = iter(["chocolate chip", "oatmeal raisin", "sugar"])
```
This might be familiar, this is how to take an iterable object and turn it into an iterator in Python. As we see, this, and the other basic iterator functionality from Python remains the same
```
x.next()
Output('chocolate chip')
x.next()
Output('oatmeal raisin')
x.next()
Output('sugar')
x.next()
Output('Traceback (most recent call last):
  File "<string>", line 1, in <module>
StopIteration')
```


Now let's try combining this with Coconut's syntax. Let's take x as following iterator:
```
x = iter([1, 2, 3])
```
Using Coconut's pipeline syntax, convert the iterator back into a list, and print the result. This should only take one line of code.
```
Solution
x |> list |> print
```

***
### Page 2: Iterator chaining: Basic Syntax

Let's start with two iterables, in this case, two lists of cookie types.
```
box1 = iter(["chocolate chip", "oatmeal raisin", "sugar"])
box2 = iter(["shortbread", "gingerbread"])
```
We're going to consolidate these two iterables into one iterable using iterator chaining, so we can treat the two sequences as though they were one long sequence.

In Python, this is done using the itertools.chain() functionality.
```
cookiebox = chain(box1, box2)
```

 In Coconut this is simplified by using the `::` operator.
```
cookiebox = box1 :: box2
```
The `::` command tells Coconut to link the two iterators.


The chain command also can work to link to iterables into one big iterator. Try using the chaining command to link two range functions together! If you would like, you an also convert to a list and print to check the results.
```
Solution:

x = range(1,15)::range(20,25)
x |> list |> print
Output([1, 2, 3, 4, 20, 21, 22, 23, 24])

```

***
### Page 3: Iterator slicing: Basic syntax (needed for Lazy Evaluation example)

***
### Page 4: Iterator chaining: Lazy Evaluation

With Coconut's iterator chaining and slicing also comes the idea of lazy evaluation. This is the idea that nothing is evaluated until it is needed. Take a look at the following function definition:
```
def x(n) = (n,) :: x(n + 1)
```
At first glance this probably looks like a recipe for an infinite loop. It is an instruction to create an infinite sequence starting at the input provided. However, if used properly in Coconut, such a function will not lead you into an infinite loop. Try defining this function and entering the following command into Coconut:
```
x(5)$[0:5] |> list |> print

Output([5, 6, 7, 8, 9])
```
The command instructs Coconut to create the iterator for a sequence starting at 5. It then uses the iterator slicing functionality to take the first 5 elements to be iterated over, converts them to a list and prints them. Since the evaluation was lazy, Coconut did not have to go into an infinite loop to define the entire iterator, and instead only dealt with the part we explicitly asked it for.

If we were to try to use lazy evaluation in this way in Python, it would be incredibly complicated, and it would require you to understand iterators and their functionality in Python on a very deep level. If you would like to get an idea for what this would look like, simply copy that one-line function definition above into a Coconut file and compile it to Python.

To see a more complex implementation of chaining in coconut, look at Lazy Lists! (Possibly transition straight into Lazy Lists here if it's more relevant that the other iterator stuff)

***

Let’s now take a moment to look at some of the Python itertools functionality that’s built into Coconut and ready to use fairly quickly.

## takewhile and dropwhile

Coconut provides itertools.takewhile as a built-in part of the language under the name takewhile. It works the same way in both Python and Coconut. It takes a predicate or a condition as its first argument and then an iterable as its second argument and returns an iterator containing only those values that satisfied the condition specified. Let’s take a look at the following to begin with:

```
negatives = takewhile((x) -> x < 0, range(-10,10))
```

What does this say? Well we are defining an iterator called negatives. The iterable I have chosen to look through is the range of integers from -10 to 10. The predicate or condition is defined using Coconut’s simplified lambda syntax. It states that given an input `x`, we want to check if `x` is less than zero. The predicate and condition are fed to the takewhile function. Let’s convert negatives to a list and print to see what is returned when we iterate through negatives.

```
Output([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])
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
Output([(1, 2), (3, 4), (5, 6), (7, 8), (9,)])
```

This is not built in in Python, so doing the same thing in Python would require the following, which is a bit more cumbersome:

```python
pairs = []
group = []
for item in range(1, 11):
    group.append(item)
    if len(group) == 2:
        pairs.append(tuple(group))
        group = []
if group:
    pairs.append(tuple(group))
```
