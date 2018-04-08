# Lazy Lists

Lazy lists are one of the most fundamental aspects of Functional Programming because they allow us to define and create infinite lists. In Coconut, there are two ways to define lazy lists. The first is to use "banana brackets" (| |) and the second is to concatenate objects using the iterator chaining :: operator. The reason this second method works is that in Coconut lazy lists are actually just lazily evaluated iterator literals, similar to the ones seen in the more advanced iterator chaining and slicing sections. It means that the values of the list itself are not stored, but the iterables are. The expressions will not be evaluated until a particular element is needed. 

Let's apply lazy lists to the Fibonacci Sequence. Recall that the Fibonacci sequence is a series in which each number is the sum of the two preceding numbers: 1, 1, 2, 3, 5, etc. We're using the Fibonacci series because it is infinite in length. Since Lazy Lists are perfect for generating infinite lists, the Fibonacci series serves well as an example implementation.

Let's start with the basics: writing a Fibonacci program that calculates the nth Fibonacci number using simple recursion in Python. 


```python
	def fib(x):
		if x == 0: return 0
		elif x==1: return 1
 		else: return fib(x-1) + fib(x-2)
```

Since Python does not have lazy evaluation, what this is really doing is calculating every Fibonacci number up until n. A very inefficient approach to the Fibonacci numbers!

Another approach to generating Fibonacci numbers involves creating an infinite lists of iterators. In Python, we can write a generator to do this: 

```python
	def fib():
    		a, b = 0, 1
    		while 1:
        		yield a
        		a, b = b, a + b
```
which essentially creates an infinite list of Fibonacci numbers. The downside of writing a generator in Python 3 is that in order to access the nth element, we have to call `next(itertools.islice( fib(), n, None))` which requires the itertools library, and is not intuitive.

Since Coconut attempts to bring more elegant functional programming to Python, we can contrast a Coconut implementation of infinite lists to the Python implementations of infinite lists. Here’s the code for defining an infinite list representing the Fibonacci series in Coconut:

```python
	def fib() = (0, 1) :: map ((+), fib(), fib()$[1:])
```

Note the use of the iterator chaining operator `::` in this case to form the list.

Let’s break down this code step-by-step to understand what exactly is going on here. First, we defined our first two Fibonacci numbers to be (0,1) and we used the `::` operator to concatenate the rest of the Fibonacci sequence to the end of the list we started with these numbers. We use a higher order function map, by applying the `(+)` arithmetic operator in fib() and the rest of the elements starting from the  `fib()$[1:]`

Now that we have our infinite list of Fibonacci numbers, obtaining the nth element is as simple as calling `fib()$[n]`


While it is possible to generate an infinite list of Fibonacci numbers in Python, it would require a deep knowledge of Python and a lot more effort. Coconut is able to combine lazy lists and a higher order function to generate the Fibonacci numbers with very few lines and operators. In comparison the code looks simpler and is easier to read. 
