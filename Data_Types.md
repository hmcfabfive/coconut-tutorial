# Data Types

### Page 0: Introduction

Coconut's `data` keyword allows you to create immutable, algebraic data types without creating separate classes for each of them. This functionality condenses the definition of different classes into the size of a simple function call, and allows you to flexibly incorporate different methods. 

***
### Page 1: Basic Syntax 

A fundamental `data` object in Coconut is declared as follows:
```
data <name>(<args>) [from <inherits>]:
    <body>
```
where
* `<name>`: the name of your new data type
* `<args>`: the arguments for the constructor and the names of the attributes 
* `<inherits>`: (optional) other base classes to inherit from
* `<body>`:  the data type's methods

*** 
### Page 2: Binary Trees and Methods

Let's start by creating a basic data type to represent a binary tree. 

Recall that a binary tree has two main components: nodes and leaves, where each node leads to either 0, 1, or 2 other nodes, and nodes that lead to no other nodes (i.e. has no children) are called leaves. 

Enter the following two lines into the Coconut interpreter:
```
data Leaf(n)
data Node(l, r)
```
This allows us to declare data types such that:
* `Leaf(n)` represents a leaf with the value n
* `Node(l, r)` represents a node with children l and r

Now, suppose we want to add a method such as finding the "size" of a certain data type. We can declare an empty tree as follows:
```
data Empty():
	def size(self):
		return 0
```

Alternatively, methods can be applied to existing data types as follows:
```
@addpattern(size)
def size(Leaf(n)) = 1

@addpattern(size)
def size(Node(l, r)) = size(l) + size(r)
```

Finally, let's put all of these elements into action with the following binary tree. Make a binary tree with an empty left child node and a leaf with value 10 on the right, and find the size of it as follows.
```
size(Node(Empty(), Leaf(10)))
```
You should find that because the node only has one leaf, the size of the entire tree becomes 1. 



