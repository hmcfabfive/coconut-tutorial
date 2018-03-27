# Pipeline

Coconut’s pipe operators allow for pipeline-style function application, which makes multiple function calls more readable.
 
The different operators are:
```python
(|>)    => pipe forward
(|*>)   => multiple-argument pipe forward
(<|)    => pipe backward
(<*|)   => multiple-argument pipe backward
```
*Note: refer to the [documentation](http://coconut.readthedocs.io/en/master/DOCS.html#operators) for information about operator precedence and associativity.*

<br/>

Here's how function calls are structured in Coconut using pipes:
```python
obj |> .attribute |> .method(args) |> func$(args) |> .[index]
```

Compare that to equivalent Python code:
```python
func(args, obj.attribute.method(args))[index]
```
<br/>

For a more concrete example, consider the following Python:
```python
print(sum(list(filter(lambda x: x % 2 == 0, range(10)))))
```

This line of code filters out the even numbers on the interval 0 to 9, puts them in a list, calculates the list’s sum, and prints the result.

This is the same bit of code in Coconut:
```python
((x) -> x % 2 == 0, range(10)) |*> filter |> list |> sum |> print
```
*Notice the use of the multiple-argument pipe forward operator (*```|*>```*) to pass both the lambda and the list to filter.*

Here, the order of the function calls is the same in the code as it is in the code’s description: filter, list, sum, and print. Coconut’s use of pipeline style allows operations to be written in the order that they’re performed, resulting in intuitive, readable code.
