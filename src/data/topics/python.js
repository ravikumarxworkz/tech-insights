export const pythonData = {
  title: "Python Essentials",
  subtitle: "Scripts, idioms, and interview problems",
  questions: [
    {
      id: "py1",
      title: "1. List Comprehensions",
      desc: "Concise way to create lists in Python.",
      output: "[0, 2, 4, 6, 8]",
      code: {
        python: `result = [i for i in range(10) if i % 2 == 0]
print(result)`
      }
    },
    {
      id: "py2",
      title: "2. Dictionary Operations",
      desc: "Working with Python dictionaries - key-value pairs.",
      output: "Name: Alice\nAge: 25\nCity: New York",
      code: {
        python: `person = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

for key, value in person.items():
    print(f"{key.capitalize()}: {value}")`
      }
    },
    {
      id: "py3",
      title: "3. Lambda Functions",
      desc: "Anonymous functions for quick operations.",
      output: "[1, 4, 9, 16, 25]",
      code: {
        python: `numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)`
      }
    }
  ],
  top10: [
    {
      q: "What is the difference between list and tuple?",
      a: "Lists are mutable (can be modified) and use square brackets []. Tuples are immutable (cannot be modified) and use parentheses (). Lists are slower but flexible, tuples are faster and used for fixed data."
    },
    {
      q: "What is the difference between == and is?",
      a: "== checks if values are equal. 'is' checks if two variables point to the same object in memory (identity). Use == for value comparison, 'is' for object identity (commonly with None)."
    },
    {
      q: "What are Python decorators?",
      a: "Decorators are functions that modify the behavior of other functions. They use @decorator_name syntax and are used for logging, authentication, timing, etc. They wrap another function and execute code before/after it."
    },
    {
      q: "What is the difference between args and kwargs?",
      a: "*args allows a function to accept any number of positional arguments as a tuple. **kwargs allows any number of keyword arguments as a dictionary. Both enable flexible function signatures."
    },
    {
      q: "What is list comprehension vs generator expression?",
      a: "List comprehension [x for x in range(10)] creates entire list in memory. Generator expression (x for x in range(10)) creates iterator that generates values on-demand, more memory efficient for large datasets."
    },
    {
      q: "What is the Global Interpreter Lock (GIL)?",
      a: "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. It makes single-threaded programs fast but limits multi-threaded performance for CPU-bound tasks."
    },
    {
      q: "What are Python's built-in data types?",
      a: "Numeric (int, float, complex), Sequence (list, tuple, range, string), Mapping (dict), Set (set, frozenset), Boolean (bool), Binary (bytes, bytearray, memoryview), and None type."
    },
    {
      q: "What is the difference between deep copy and shallow copy?",
      a: "Shallow copy creates new object but references same nested objects. Deep copy creates new object and recursively copies all nested objects. Use copy.copy() for shallow, copy.deepcopy() for deep copying."
    },
    {
      q: "What are Python's main features?",
      a: "Easy to learn syntax, interpreted language, dynamically typed, object-oriented, extensive standard library, cross-platform, supports multiple programming paradigms, automatic memory management, and large community support."
    },
    {
      q: "What is the difference between module and package?",
      a: "Module is a single Python file (.py) containing functions, classes, and variables. Package is a directory containing multiple modules and an __init__.py file. Packages organize modules hierarchically."
    }
  ]
};