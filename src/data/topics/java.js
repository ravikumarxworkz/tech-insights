export const javaData = {
  title: "Java Mastery",
  subtitle: "Core concepts, OOPs, and Interview Questions",
  questions: [
    {
      id: "q1",
      title: "1. Encapsulation in Java",
      desc: "Encapsulation is the mechanism of wrapping data (variables) and code acting on the data (methods) together as a single unit.",
      output: "Employee Name: Ravi\nAge: 25",
      code: {
        java: `class Employee {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        emp.setName("Ravi");
        emp.setAge(25);
        System.out.println("Employee Name: " + emp.getName());
        System.out.println("Age: " + emp.getAge());
    }
}`
      }
    },
    {
      id: "q2",
      title: "2. Polymorphism (Overloading vs Overriding)",
      desc: "Polymorphism allows us to perform a single action in different ways.",
      output: "Dog barks\nCat meows",
      code: {
        java: `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
        a = new Cat();
        a.sound();
    }
}`
      }
    },
    {
      id: "q3",
      title: "3. Check Palindrome Number",
      desc: "A common interview question to check if a number reads the same backward as forward.",
      output: "121 is a Palindrome",
      code: {
        java: `public class Main {
    public static void main(String[] args) {
        int r, sum = 0, temp;
        int n = 121;
        temp = n;
        
        while (n > 0) {
            r = n % 10;
            sum = (sum * 10) + r;
            n = n / 10;
        }
        
        if (temp == sum)
            System.out.println(temp + " is a Palindrome");
        else
            System.out.println(temp + " is not a Palindrome");
    }
}`
      }
    }
  ],
  top10: [
    {
      q: "What is the difference between JDK, JRE, and JVM?",
      a: "JDK (Java Development Kit) is a software development environment used for developing Java applications. JRE (Java Runtime Environment) provides libraries and JVM to run Java applications. JVM (Java Virtual Machine) is an abstract machine that executes Java bytecode."
    },
    {
      q: "What is the difference between == and .equals() in Java?",
      a: "== compares object references (memory addresses), while .equals() compares the actual content/values of objects. For strings and objects, use .equals() for value comparison."
    },
    {
      q: "What is the difference between String, StringBuilder, and StringBuffer?",
      a: "String is immutable. StringBuilder is mutable and not thread-safe (faster). StringBuffer is mutable and thread-safe (synchronized, slower). Use StringBuilder for single-threaded operations."
    },
    {
      q: "What are the main principles of OOP?",
      a: "The four main principles are: Encapsulation (bundling data and methods), Inheritance (child class inherits parent class), Polymorphism (one interface, multiple implementations), and Abstraction (hiding implementation details)."
    },
    {
      q: "What is the difference between abstract class and interface?",
      a: "Abstract class can have both abstract and concrete methods, constructors, and instance variables. Interface (Java 8+) can have abstract methods, default methods, static methods, but no instance variables or constructors. A class can implement multiple interfaces but extend only one abstract class."
    },
    {
      q: "What is exception handling in Java?",
      a: "Exception handling uses try-catch-finally blocks to handle runtime errors. Try block contains code that might throw exception, catch block handles the exception, finally block always executes regardless of exception occurrence."
    },
    {
      q: "What is the difference between final, finally, and finalize?",
      a: "final is a keyword used to make variables constant, prevent method overriding, or prevent inheritance. finally is a block that executes after try-catch. finalize() is a method called by garbage collector before object destruction."
    },
    {
      q: "What is multithreading and how do you create a thread?",
      a: "Multithreading allows concurrent execution of two or more threads. Create threads by: 1) Extending Thread class and overriding run() method, or 2) Implementing Runnable interface and passing to Thread constructor."
    },
    {
      q: "What are collections in Java?",
      a: "Collections Framework provides interfaces (List, Set, Map, Queue) and classes (ArrayList, HashSet, HashMap, LinkedList) to store and manipulate groups of objects. It provides data structures and algorithms for managing data."
    },
    {
      q: "What is the difference between ArrayList and LinkedList?",
      a: "ArrayList uses dynamic array (better for random access, O(1) retrieval). LinkedList uses doubly-linked list (better for insertion/deletion, O(1) at ends). ArrayList has faster iteration, LinkedList has faster insertion/deletion in middle."
    }
  ]
};