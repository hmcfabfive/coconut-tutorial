# Pattern Matching
***
### Introduction

Say you're working in a recycling facility and want to write a program that will sort the aluminum, paper, and plastic recyclables. This would be easy enough to write using if statements:
```
def sortItems(recyclable):
    """sort the items based on material"""
    if recyclable is aluminum:
        """execute code to put recyclable into the aluminum bin"""
    elif recyclable is paper:
        """execute code to put recyclable into the paper bin"""
    elif recyclable is plastic:
        """execute code to put recyclable into the plastic bin"""
    else:
        raise TypeError("item not recyclable")
```

...But there's an easier and cleaner way to do it.
***
### Pattern matching!

Pattern matching is great for when you have lots of things that you want to act on based on their properties. 
At first glance, all that pattern matching does is reduce the amount of typing needed for if statements. And in some cases (such as this one) it doesn't even cut down on the typing! Here is how you would write the same function as before, but using pattern matching:
```
def sortItems(recyclable):
    """sort the items based on material"""
    case (recyclable):
      match recyclable is aluminum:
        """execute code to put recyclable into the aluminum bin"""
      match recyclable is paper:
          """execute code to put recyclable into the paper bin"""
      match recyclable is plastic:
          """execute code to put recyclable into the plastic bin"""
    else:
        raise TypeError("item not recyclable")
```
As you can see above, we feed the parameter "recyclable" into what is known as a case-match statement. Each "match" line assesses how to handle "recyclable" based on its properties. In this example, pattern matching wasn't very effective, and had the same effect as just using if statements. But stay tuned to see some cases where pattern matching is really powerful!
***
### Numbers!

Pattern matching really shines when it is used with numbers and functions. Let's see this in action by applying it to factorials.

A factorial, written as "x!" is equal to the product of all the numbers leading up to and including x. So 5! = 5*4*3*2*1. As a rule, 0!=1.

How, then, can pattern matching help us solve this? Well, we know that when x=0, x!=1. And for all other numbers, x!=x*(x-1)! With this in mind, we can write a pattern matching statement to help us solve factorials:
```
def factorial(x):
    """Compute x! where x is an integer >= 0."""
    case x:
        match 0: """when x=0, return 1"""
            return 1
        match x is int if x > 0: """else, return x*(x-1)!"""
            return x * factorial(x-1)
    else:
        raise TypeError("the argument to factorial must be an integer >= 0")
```
It's so clean!
***
### Thinking further...

Pattern matching is great for recursive functions. Recursive functions perform the same operation on an object until it has reached a "base case" — a minimal state, such as 0 in our factorial example.

Think about ways you can apply pattern matching or recursion to tasks you want to achieve!
