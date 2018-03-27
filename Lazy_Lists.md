# Lazy Lists

Lazy lists are one of the fundamental aspects in Functional Programming because it allows us to define and create infinite lists.  In Coconut, Lazy lists, represented by “banana brackets” `(| |)`, are defined to be lazily evaluated iterator literals. This means that values are not stored in the list, but iterables are. Lazy evaluation is similar to the `::` operator, in that expressions are not evaluated until that particular element is needed. 

In a simple Python program, we might write a recursive program for Fibonacci by doing 


```python
	def fib(x):
		if x == 0: return 0
		elif x==1: return 1
 		else: return fib(x-1) + fib(x-2)
```

but since Python does not have lazy evaluation, what it is really doing is calculating every Fibonacci number up until n. A very inefficient approach to the Fibonacci numbers!

The second approach to Fibonacci numbers involves creating an infinite lists of iterators. In Python, we can write a generator to do this:

```python
	def fib():
    		a, b = 0, 1
    		while 1:
        		yield a
        		a, b = b, a + b
```
which essentially creates an infinite lists of Fibonacci numbers. The downside of writing a generator in Python 3 is that in order to access the nth element, we have to call `next(itertools.islice( fib(), n, None))` which requires the itertools library, and is not simple at all.

Since Coconut intends to bring more elegant functional programming techniques, we can contrast Coconut’s implementation to infinite lists to Python’s. Here’s the code for defining an infinite list of the Fibonacci series in Coconut:

```python
	def fib() = (0, 1) : : map ((+), fib(), fib()$[1:])
```

Instead of using the banana brackets to denote a lazy list, we used the :: operator, which is completely valid. 

Let’s break down this code, step-by-step to understand what exactly is going here. First, we defined our first two Fibonacci numbers to be (0,1) and we used the `::` operator to concatenate the rest of the Fibonacci sequence. We use a higher order function map, by applying the `(+)` arithmetic operator in fib() and the rest of the elements `fib()$[1:]`

Now that we have our infinite list of Fibonacci numbers, obtaining the nth element is as simple as calling `fib()$[n]`


While it is possible to generate an infinite list of Fibonacci numbers in Python, Coconut is able to combine lazy lists and a higher order function to generate the Fibonacci numbers. It makes Python code look more simple and easy to read. 
