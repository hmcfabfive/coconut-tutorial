# Pipeline

Coconut provides support for and in many ways is centered around the use of the pipe operator and pipeline-style function application. The word pipeling is indicative of what these operators do: data processing elements and functions are connected and series with the output of one become the input of the next. This makes multiple function calls more readable and simpler to implement.

The different operators supported by Ccoconut are:
```python
(|>)    => pipe forward
(|*>)   => multiple-argument pipe forward
(<|)    => pipe backward
(<*|)   => multiple-argument pipe backward
```
*Note: refer to the [documentation](http://coconut.readthedocs.io/en/master/DOCS.html#operators) for information about operator precedence and associativity.*

<br/>

Let's look at a function call in Coconut that uses pipe forward:
```python
obj |> .attribute |> .method(args) |> func$(args) |> .[index]
```

Compare that to equivalent Python code:
```python
func(args, obj.attribute.method(args))[index]
```

With pipelines it's a lot easier and clearer to see what is happening and where the data is flowing.

<br/>

For a more concrete example, consider the following Python code:
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
