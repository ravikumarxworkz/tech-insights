export const dotnetData = {
  title: ".NET Core & C#",
  subtitle: "Backend patterns and practical examples",
  questions: [
    {
      id: "cs1",
      title: "1. Basic Console App",
      desc: "Simple program showing Console.WriteLine in C#",
      output: "Hello from .NET",
      code: {
        csharp: `using System;

class Program 
{
    static void Main() 
    {
        Console.WriteLine("Hello from .NET");
    }
}`
      }
    },
    {
      id: "cs2",
      title: "2. LINQ Query Example",
      desc: "Using LINQ to query collections in C#",
      output: "2\n4\n6\n8\n10",
      code: {
        csharp: `using System;
using System.Linq;

class Program 
{
    static void Main() 
    {
        int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        
        foreach(var num in evenNumbers) 
        {
            Console.WriteLine(num);
        }
    }
}`
      }
    },
    {
      id: "cs3",
      title: "3. Properties and Encapsulation",
      desc: "Using properties for data encapsulation in C#",
      output: "Name: John Doe\nAge: 30",
      code: {
        csharp: `using System;

class Person 
{
    public string Name { get; set; }
    public int Age { get; set; }
}

class Program 
{
    static void Main() 
    {
        Person person = new Person 
        {
            Name = "John Doe",
            Age = 30
        };
        
        Console.WriteLine($"Name: {person.Name}");
        Console.WriteLine($"Age: {person.Age}");
    }
}`
      }
    }
  ],
  top10: [
    {
      q: "What is the difference between .NET Framework and .NET Core?",
      a: ".NET Framework is Windows-only, mature, and legacy. .NET Core (now .NET 5+) is cross-platform, open-source, lightweight, and modular. .NET Core is the future of .NET development with better performance."
    },
    {
      q: "What is the difference between value types and reference types?",
      a: "Value types (int, struct, enum) store data directly in stack memory. Reference types (class, interface, delegate) store reference in stack pointing to heap memory. Value types are copied, references point to same object."
    },
    {
      q: "What is the difference between abstract class and interface in C#?",
      a: "Abstract class can have implementation, constructors, fields, and access modifiers. Interface (C# 8+) can have default implementations but no fields or constructors. A class can implement multiple interfaces but inherit one abstract class."
    },
    {
      q: "What is dependency injection?",
      a: "Dependency Injection is a design pattern where dependencies are provided to a class rather than created by it. .NET Core has built-in DI container. It promotes loose coupling, testability, and follows Inversion of Control principle."
    },
    {
      q: "What is async/await in C#?",
      a: "Async/await enables asynchronous programming. 'async' keyword marks method as asynchronous. 'await' pauses execution until task completes without blocking thread. Used for I/O operations to improve responsiveness and scalability."
    },
    {
      q: "What is LINQ?",
      a: "Language Integrated Query allows querying collections using SQL-like syntax. Supports filtering, sorting, grouping, and joining. Works with IEnumerable collections. Improves code readability and reduces boilerplate code."
    },
    {
      q: "What is the difference between IEnumerable and IQueryable?",
      a: "IEnumerable loads data in memory then filters (client-side). IQueryable creates expression tree, filters at source (server-side with databases). IQueryable is better for database queries, IEnumerable for in-memory collections."
    },
    {
      q: "What are extension methods?",
      a: "Extension methods add new methods to existing types without modifying them. Defined as static methods in static class with 'this' modifier on first parameter. Commonly used to extend framework classes."
    },
    {
      q: "What is garbage collection in .NET?",
      a: "Automatic memory management that frees memory from unused objects. Uses generational algorithm (Gen 0, 1, 2). Developers don't manually deallocate memory. IDisposable pattern used for unmanaged resources."
    },
    {
      q: "What is the difference between String and StringBuilder?",
      a: "String is immutable - each modification creates new object. StringBuilder is mutable - modifies existing object. Use String for few modifications, StringBuilder for frequent concatenations in loops for better performance."
    }
  ]
};