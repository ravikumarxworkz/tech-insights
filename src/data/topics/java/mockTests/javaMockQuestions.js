// src/data/topics/java/mockTests/javaMockQuestions.js

export const javaMockQuestions = {
  conceptGroup: "Java Mock Test Questions",
  totalQuestions: 50,
  difficulty: {
    easy: 20,
    medium: 20,
    hard: 10
  },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "jm_q1",
          title: "Compile and Run Process",
          difficulty: "easy",
          tags: ["basics", "compilation"],
          question: "What happens when you compile a Java program?",
          options: [
            { id: "a", text: "Bytecode is generated and saved as .class file" },
            { id: "b", text: "Binary machine code is generated directly" },
            { id: "c", text: "Source code is converted to executable file" },
            { id: "d", text: "Java code is interpreted and executed immediately" }
          ],
          correctAnswerId: "a",
          explanation: "When you compile a Java program, the Java compiler converts the source code (.java file) into bytecode (.class file). This bytecode is then executed by the JVM.",
          hints: ["Java compiler outputs .class files", "Bytecode is platform independent"]
        },
        {
          id: "jm_q2",
          title: "Variable Scope",
          difficulty: "easy",
          tags: ["variables", "scope"],
          question: "What is the scope of a local variable in Java?",
          options: [
            { id: "a", text: "Available throughout the class" },
            { id: "b", text: "Available only within the block where it is declared" },
            { id: "c", text: "Available to all methods in the class" },
            { id: "d", text: "Available to all classes in the package" }
          ],
          correctAnswerId: "b",
          explanation: "Local variables have block scope and are only available within the block where they are declared. Once the block ends, the variable is no longer accessible.",
          hints: ["Local variables are created when block is entered", "Destroyed when block exits"]
        },
        {
          id: "jm_q3",
          title: "Default Values",
          difficulty: "easy",
          tags: ["variables", "initialization"],
          question: "What is the default value of an integer instance variable?",
          options: [
            { id: "a", text: "null" },
            { id: "b", text: "0" },
            { id: "c", text: "undefined" },
            { id: "d", text: "1" }
          ],
          correctAnswerId: "b",
          explanation: "The default value of an integer instance variable is 0. All numeric primitives initialized to 0, booleans to false, and objects to null.",
          hints: ["This applies to instance variables only", "Local variables don't have default values"]
        },
        {
          id: "jm_q4",
          title: "Method Overloading",
          difficulty: "easy",
          tags: ["methods", "overloading"],
          question: "Can you overload a method based on return type only?",
          options: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "No, never" },
            { id: "c", text: "Only for static methods" },
            { id: "d", text: "Only for void methods" }
          ],
          correctAnswerId: "b",
          explanation: "You cannot overload a method based on return type alone. Method overloading must differ in parameter types, count, or order.",
          hints: ["Overloading requires different method signatures", "Return type alone is not enough"]
        },
        {
          id: "jm_q5",
          title: "String Immutability",
          difficulty: "easy",
          tags: ["strings", "immutability"],
          question: "Are String objects mutable in Java?",
          options: [
            { id: "a", text: "Yes, they can be modified" },
            { id: "b", text: "No, they are immutable" },
            { id: "c", text: "They are mutable only inside methods" },
            { id: "d", text: "It depends on how they are created" }
          ],
          correctAnswerId: "b",
          explanation: "String objects are immutable in Java. Once created, their content cannot be changed. Operations like concatenation create new String objects.",
          hints: ["Immutable means cannot be changed after creation", "String methods return new String objects"]
        },
        {
          id: "jm_q6",
          title: "Static Variables",
          difficulty: "easy",
          tags: ["static", "variables"],
          question: "How many times is a static variable initialized?",
          options: [
            { id: "a", text: "Every time an object is created" },
            { id: "b", text: "Only once when the class is loaded" },
            { id: "c", text: "Every time the static method is called" },
            { id: "d", text: "Never, static variables must be initialized manually" }
          ],
          correctAnswerId: "b",
          explanation: "Static variables are initialized only once when the class is loaded into memory. All objects of the class share the same static variable.",
          hints: ["Static variables are class-level", "Shared by all instances of the class"]
        },
        {
          id: "jm_q7",
          title: "Constructor Chaining",
          difficulty: "easy",
          tags: ["constructors", "this"],
          question: "What is used to call one constructor from another constructor in Java?",
          options: [
            { id: "a", text: "super()" },
            { id: "b", text: "this()" },
            { id: "c", text: "new()" },
            { id: "d", text: "call()" }
          ],
          correctAnswerId: "b",
          explanation: "The this() keyword is used to call one constructor from another constructor in the same class. It must be the first statement.",
          hints: ["this() calls a constructor in the same class", "super() calls a constructor in the parent class"]
        },
        {
          id: "jm_q8",
          title: "This Keyword",
          difficulty: "easy",
          tags: ["this", "reference"],
          question: "What does the 'this' keyword represent?",
          options: [
            { id: "a", text: "The parent class reference" },
            { id: "b", text: "The current object reference" },
            { id: "c", text: "The superclass" },
            { id: "d", text: "The method signature" }
          ],
          correctAnswerId: "b",
          explanation: "'this' represents the current object reference. It's used to refer to instance variables and methods of the current object.",
          hints: ["this refers to the current instance", "Used to avoid ambiguity with parameters"]
        },
        {
          id: "jm_q9",
          title: "Final Keyword",
          difficulty: "easy",
          tags: ["final", "constants"],
          question: "What can be declared as final in Java?",
          options: [
            { id: "a", text: "Only classes" },
            { id: "b", text: "Classes, methods, and variables" },
            { id: "c", text: "Only variables" },
            { id: "d", text: "Only methods" }
          ],
          correctAnswerId: "b",
          explanation: "The final keyword can be applied to classes (cannot be extended), methods (cannot be overridden), and variables (cannot be modified).",
          hints: ["Final classes cannot be inherited", "Final methods cannot be overridden"]
        },
        {
          id: "jm_q10",
          title: "Package Naming",
          difficulty: "easy",
          tags: ["packages", "naming"],
          question: "What naming convention is used for Java packages?",
          options: [
            { id: "a", text: "CamelCase" },
            { id: "b", text: "snake_case" },
            { id: "c", text: "lowercase with dots" },
            { id: "d", text: "UPPERCASE" }
          ],
          correctAnswerId: "c",
          explanation: "Java packages follow lowercase naming convention with dots separating each level. Example: com.example.package",
          hints: ["Package names are typically lowercase", "Domain names reversed at the beginning"]
        }
      ]
    },
    {
      pageNumber: 2,
      questions: [
        {
          id: "jm_q11",
          title: "Inheritance Types",
          difficulty: "medium",
          tags: ["inheritance", "oop"],
          question: "What types of inheritance does Java support?",
          options: [
            { id: "a", text: "Single, multiple, hierarchical, hybrid, multilevel" },
            { id: "b", text: "Single, multiple, hierarchical, multilevel" },
            { id: "c", text: "Single and multiple only" },
            { id: "d", text: "Single, hierarchical, and multilevel only" }
          ],
          correctAnswerId: "d",
          explanation: "Java supports single inheritance (one parent), hierarchical (multiple children), and multilevel (grandparent -> parent -> child). Java doesn't support multiple inheritance through classes to avoid ambiguity (Diamond Problem).",
          hints: ["Java prevents multiple inheritance of classes", "Interfaces can provide multiple inheritance"]
        },
        {
          id: "jm_q12",
          title: "Abstract Classes",
          difficulty: "medium",
          tags: ["abstract", "classes"],
          question: "Can you create an instance of an abstract class?",
          options: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "No, never" },
            { id: "c", text: "Only if it has no abstract methods" },
            { id: "d", text: "Only through inheritance" }
          ],
          correctAnswerId: "b",
          explanation: "You cannot create an instance of an abstract class. Abstract classes are meant to be extended by subclasses that provide implementations for abstract methods.",
          hints: ["Abstract classes are incomplete", "Used for forcing subclasses to implement certain methods"]
        },
        {
          id: "jm_q13",
          title: "Interface Implementation",
          difficulty: "medium",
          tags: ["interfaces", "implement"],
          question: "Can a class implement multiple interfaces?",
          options: [
            { id: "a", text: "No, only one interface" },
            { id: "b", text: "Yes, multiple interfaces" },
            { id: "c", text: "Only if they are related" },
            { id: "d", text: "Only with default methods" }
          ],
          correctAnswerId: "b",
          explanation: "A class can implement multiple interfaces in Java, separated by commas. This provides a way to achieve multiple inheritance of type.",
          hints: ["Multiple interface implementation is allowed", "Syntax: class X implements I1, I2, I3"]
        },
        {
          id: "jm_q14",
          title: "Method Overriding",
          difficulty: "medium",
          tags: ["overriding", "polymorphism"],
          question: "Which of the following can be overridden in a subclass?",
          options: [
            { id: "a", text: "Static methods and private methods" },
            { id: "b", text: "Instance methods with protected or public access" },
            { id: "c", text: "Final methods" },
            { id: "d", text: "All methods" }
          ],
          correctAnswerId: "b",
          explanation: "Only instance methods with protected or public access can be overridden. Static methods cannot be overridden (they are hidden), and final/private methods cannot be overridden.",
          hints: ["Static methods are hidden, not overridden", "Private methods cannot be overridden"]
        },
        {
          id: "jm_q15",
          title: "Exception Hierarchy",
          difficulty: "medium",
          tags: ["exceptions", "hierarchy"],
          question: "What is the parent class of all exceptions in Java?",
          options: [
            { id: "a", text: "Error" },
            { id: "b", text: "RuntimeException" },
            { id: "c", text: "Throwable" },
            { id: "d", text: "Exception" }
          ],
          correctAnswerId: "c",
          explanation: "Throwable is the parent class of all exceptions and errors in Java. Both Exception and Error extend Throwable.",
          hints: ["Throwable is at the top of exception hierarchy", "Error is for serious problems"]
        },
        {
          id: "jm_q16",
          title: "Checked vs Unchecked",
          difficulty: "medium",
          tags: ["exceptions", "checked"],
          question: "What is the difference between checked and unchecked exceptions?",
          options: [
            { id: "a", text: "Checked are checked at runtime, unchecked at compile time" },
            { id: "b", text: "Checked are checked at compile time, unchecked at runtime" },
            { id: "c", text: "There is no difference" },
            { id: "d", text: "Unchecked cannot be caught" }
          ],
          correctAnswerId: "b",
          explanation: "Checked exceptions are checked at compile time and must be declared or caught. Unchecked exceptions (RuntimeException subclasses) are not checked at compile time.",
          hints: ["Checked exceptions extend Exception directly", "Unchecked exceptions extend RuntimeException"]
        },
        {
          id: "jm_q17",
          title: "Collections Framework",
          difficulty: "medium",
          tags: ["collections", "list"],
          question: "Which of these implements both List and Set interfaces?",
          options: [
            { id: "a", text: "ArrayList" },
            { id: "b", text: "HashSet" },
            { id: "c", text: "LinkedHashSet" },
            { id: "d", text: "None" }
          ],
          correctAnswerId: "d",
          explanation: "No collection class implements both List and Set. ArrayList implements List, HashSet/LinkedHashSet implement Set. Both are unrelated interfaces.",
          hints: ["List maintains order and allows duplicates", "Set doesn't allow duplicates"]
        },
        {
          id: "jm_q18",
          title: "HashMap vs Hashtable",
          difficulty: "medium",
          tags: ["collections", "map"],
          question: "What is the main difference between HashMap and Hashtable?",
          options: [
            { id: "a", text: "Hashtable is synchronized, HashMap is not" },
            { id: "b", text: "HashMap is synchronized, Hashtable is not" },
            { id: "c", text: "They are identical" },
            { id: "d", text: "Hashtable is faster" }
          ],
          correctAnswerId: "a",
          explanation: "Hashtable is synchronized (thread-safe) while HashMap is not. HashMap is generally preferred for non-multi-threaded applications. Hashtable also doesn't allow null keys/values.",
          hints: ["Hashtable is legacy class", "HashMap is preferred for single-threaded or with external sync"]
        },
        {
          id: "jm_q19",
          title: "Comparable Interface",
          difficulty: "medium",
          tags: ["comparable", "sorting"],
          question: "Which method must be implemented for the Comparable interface?",
          options: [
            { id: "a", text: "compare()" },
            { id: "b", text: "compareTo()" },
            { id: "c", text: "equals()" },
            { id: "d", text: "sort()" }
          ],
          correctAnswerId: "b",
          explanation: "The Comparable interface requires implementing the compareTo() method. compareTo() returns negative (less), zero (equal), or positive (greater).",
          hints: ["Comparable is for natural ordering", "Comparator is for custom ordering"]
        },
        {
          id: "jm_q20",
          title: "Generics Type Erasure",
          difficulty: "medium",
          tags: ["generics", "type-safety"],
          question: "What happens to generic type information at runtime?",
          options: [
            { id: "a", text: "It is preserved in the bytecode" },
            { id: "b", text: "It is erased during compilation" },
            { id: "c", text: "It is converted to Object" },
            { id: "d", text: "It persists in the runtime" }
          ],
          correctAnswerId: "b",
          explanation: "Java uses type erasure - generic type information is removed during compilation and replaced with Object. This is called 'type erasure'.",
          hints: ["You cannot use generics with primitive types", "Type erasure allows backward compatibility"]
        }
      ]
    },
    {
      pageNumber: 3,
      questions: [
        {
          id: "jm_q21",
          title: "Serialization",
          difficulty: "medium",
          tags: ["serialization", "io"],
          question: "What is the purpose of the Serializable interface?",
          options: [
            { id: "a", text: "To enable object cloning" },
            { id: "b", text: "To mark a class as serializable (no methods to implement)" },
            { id: "c", text: "To enforce serialization implementation" },
            { id: "d", text: "To convert objects to strings" }
          ],
          correctAnswerId: "b",
          explanation: "Serializable is a marker interface with no methods. It marks a class as serializable, allowing Java to handle serialization internally.",
          hints: ["Also called a tagging interface", "Enables object persistence and transmission"]
        },
        {
          id: "jm_q22",
          title: "Deep Copy",
          difficulty: "medium",
          tags: ["cloning", "copy"],
          question: "What is the result of a shallow copy of an object?",
          options: [
            { id: "a", text: "Primitive values are copied, references point to same objects" },
            { id: "b", text: "Everything is completely copied" },
            { id: "c", text: "Only null values are copied" },
            { id: "d", text: "References are copied but values are not" }
          ],
          correctAnswerId: "a",
          explanation: "Shallow copy copies primitive values but references point to the same objects. Deep copy creates new objects for everything.",
          hints: ["clone() method creates shallow copy by default", "Need to override clone() for deep copy"]
        },
        {
          id: "jm_q23",
          title: "Thread Creation",
          difficulty: "medium",
          tags: ["threads", "multithreading"],
          question: "How many ways can you create a thread in Java?",
          options: [
            { id: "a", text: "One way only" },
            { id: "b", text: "Two ways: extending Thread or implementing Runnable" },
            { id: "c", text: "Three ways" },
            { id: "d", text: "Any number of ways" }
          ],
          correctAnswerId: "b",
          explanation: "There are two standard ways: extend Thread class or implement Runnable interface. Implementing Runnable is preferred since Java doesn't support multiple inheritance.",
          hints: ["Runnable is an interface", "Thread is a class"]
        },
        {
          id: "jm_q24",
          title: "Thread States",
          difficulty: "medium",
          tags: ["threads", "lifecycle"],
          question: "What are the main states of a thread in Java?",
          options: [
            { id: "a", text: "Running, Waiting, Sleeping" },
            { id: "b", text: "New, Runnable, Running, Blocked, Terminated" },
            { id: "c", text: "Active, Inactive, Dead" },
            { id: "d", text: "Start, Run, Stop" }
          ],
          correctAnswerId: "b",
          explanation: "Thread states: New (created), Runnable (ready to run), Running (executing), Blocked (waiting for resources), Terminated (finished).",
          hints: ["A thread cannot go directly from New to Running", "Blocked state can be due to locks or IO"]
        },
        {
          id: "jm_q25",
          title: "Synchronized Keyword",
          difficulty: "medium",
          tags: ["synchronized", "thread-safety"],
          question: "What does the synchronized keyword do?",
          options: [
            { id: "a", text: "Makes threads run faster" },
            { id: "b", text: "Prevents multiple threads from accessing a resource simultaneously" },
            { id: "c", text: "Stops thread execution" },
            { id: "d", text: "Creates new threads" }
          ],
          correctAnswerId: "b",
          explanation: "synchronized keyword ensures that only one thread can access a resource at a time, providing thread-safety and preventing race conditions.",
          hints: ["Can be applied to methods or code blocks", "Uses internal locking mechanism"]
        },
        {
          id: "jm_q26",
          title: "Inner Classes",
          difficulty: "medium",
          tags: ["inner-classes", "oop"],
          question: "Which of the following is NOT a type of inner class?",
          options: [
            { id: "a", text: "Static inner class" },
            { id: "b", text: "Member inner class" },
            { id: "c", text: "Local inner class" },
            { id: "d", text: "Global inner class" }
          ],
          correctAnswerId: "d",
          explanation: "Types of inner classes: static inner (nested static), member inner, local inner (inside method), and anonymous inner. Global inner class doesn't exist.",
          hints: ["Inner classes provide encapsulation", "Member inner classes can access outer class members"]
        },
        {
          id: "jm_q27",
          title: "Anonymous Inner Classes",
          difficulty: "medium",
          tags: ["anonymous", "inner-classes"],
          question: "Can an anonymous inner class extend a class and implement an interface?",
          options: [
            { id: "a", text: "Yes, both simultaneously" },
            { id: "b", text: "No, neither" },
            { id: "c", text: "Yes, but only with a class" },
            { id: "d", text: "Yes, but only with an interface" }
          ],
          correctAnswerId: "c",
          explanation: "An anonymous inner class can extend a class OR implement an interface, but not both. If extending a class, use that as the base; if implementing interface, don't extend.",
          hints: ["Anonymous classes inherit from one class max", "Can implement one interface if extending class"]
        },
        {
          id: "jm_q28",
          title: "File I/O Streams",
          difficulty: "medium",
          tags: ["io", "streams"],
          question: "What is the difference between BufferedReader and BufferedInputStream?",
          options: [
            { id: "a", text: "BufferedReader reads text, BufferedInputStream reads binary data" },
            { id: "b", text: "They are identical" },
            { id: "c", text: "BufferedInputStream is faster" },
            { id: "d", text: "BufferedReader works only with files" }
          ],
          correctAnswerId: "a",
          explanation: "BufferedReader is for reading text (character data), while BufferedInputStream is for reading binary data (bytes). BufferedReader has methods like readLine().",
          hints: ["Reader classes work with characters", "InputStream classes work with bytes"]
        },
        {
          id: "jm_q29",
          title: "JDBC",
          difficulty: "medium",
          tags: ["database", "jdbc"],
          question: "What is the first step in establishing a database connection using JDBC?",
          options: [
            { id: "a", text: "Create a Statement object" },
            { id: "b", text: "Load the JDBC driver" },
            { id: "c", text: "Execute a query" },
            { id: "d", text: "Create a Connection object" }
          ],
          correctAnswerId: "b",
          explanation: "First step is loading the JDBC driver using Class.forName(). Then connect, create statement, execute query, and close resources.",
          hints: ["Driver registration is step 1", "Connection is step 2"]
        },
        {
          id: "jm_q30",
          title: "Prepared Statements",
          difficulty: "medium",
          tags: ["jdbc", "sql-injection"],
          question: "Why should you use PreparedStatement instead of Statement?",
          options: [
            { id: "a", text: "It's always faster" },
            { id: "b", text: "It prevents SQL injection and has better performance for repeated queries" },
            { id: "c", text: "It allows multiple result sets" },
            { id: "d", text: "It's required for SELECT queries" }
          ],
          correctAnswerId: "b",
          explanation: "PreparedStatement prevents SQL injection by using parameterized queries and is cached by the database, improving performance for repeated queries.",
          hints: ["Uses placeholders (?) for values", "Values are sent separately from query"]
        }
      ]
    },
    {
      pageNumber: 4,
      questions: [
        {
          id: "jm_q31",
          title: "Memory Management",
          difficulty: "hard",
          tags: ["memory", "garbage-collection"],
          question: "What happens to unreferenced objects in Java?",
          options: [
            { id: "a", text: "They remain in memory indefinitely" },
            { id: "b", text: "They are immediately deleted" },
            { id: "c", text: "They become eligible for garbage collection" },
            { id: "d", text: "They are moved to secondary storage" }
          ],
          correctAnswerId: "c",
          explanation: "Unreferenced objects become eligible for garbage collection. The GC may collect them at any time, freeing the memory for reuse.",
          hints: ["Garbage collection is automatic", "You can suggest GC with System.gc() but cannot force it"]
        },
        {
          id: "jm_q32",
          title: "Garbage Collection",
          difficulty: "hard",
          tags: ["gc", "memory"],
          question: "Can you guarantee that the finalize() method will be called?",
          options: [
            { id: "a", text: "Yes, always before garbage collection" },
            { id: "b", text: "No, there's no guarantee" },
            { id: "c", text: "Yes, if the object extends Object" },
            { id: "d", text: "Only for objects with explicit cleanup" }
          ],
          correctAnswerId: "b",
          explanation: "There's no guarantee that finalize() will be called. It may never be called if GC doesn't run. It's deprecated in Java 9+.",
          hints: ["finalize() is not a destructor", "Cannot rely on finalize for cleanup"]
        },
        {
          id: "jm_q33",
          title: "Reflection API",
          difficulty: "hard",
          tags: ["reflection", "introspection"],
          question: "What can the Reflection API be used for?",
          options: [
            { id: "a", text: "Only to inspect classes" },
            { id: "b", text: "To inspect, modify, and invoke methods at runtime" },
            { id: "c", text: "Only to get class information" },
            { id: "d", text: "Only for debugging" }
          ],
          correctAnswerId: "b",
          explanation: "Reflection API allows inspection (getting class info), modification (setting fields), and invocation (calling methods) at runtime, even private ones.",
          hints: ["Used by frameworks like Spring and Hibernate", "Can bypass access modifiers"]
        },
        {
          id: "jm_q34",
          title: "Lambda Expressions",
          difficulty: "hard",
          tags: ["lambda", "functional"],
          question: "What is a functional interface for lambda expressions?",
          options: [
            { id: "a", text: "An interface with multiple abstract methods" },
            { id: "b", text: "An interface with exactly one abstract method" },
            { id: "c", text: "An interface that inherits from Function" },
            { id: "d", text: "Any interface can be functional" }
          ],
          correctAnswerId: "b",
          explanation: "A functional interface has exactly one abstract method. Marked with @FunctionalInterface. Lambda expressions can be used with functional interfaces.",
          hints: ["Can have default/static methods", "@FunctionalInterface is optional annotation"]
        },
        {
          id: "jm_q35",
          title: "Stream API",
          difficulty: "hard",
          tags: ["streams", "functional"],
          question: "What is the difference between intermediate and terminal operations in Stream API?",
          options: [
            { id: "a", text: "Intermediate is executed, terminal is not" },
            { id: "b", text: "Intermediate returns Stream, terminal returns single value or void" },
            { id: "c", text: "There is no difference" },
            { id: "d", text: "Terminal operations are always at the beginning" }
          ],
          correctAnswerId: "b",
          explanation: "Intermediate operations (map, filter, distinct) return a Stream and are lazy. Terminal operations (collect, forEach, reduce) consume stream and return result.",
          hints: ["Lazy evaluation with intermediate ops", "Stream is consumed once by terminal op"]
        },
        {
          id: "jm_q36",
          title: "Singleton Pattern",
          difficulty: "hard",
          tags: ["design-patterns", "singleton"],
          question: "What is the safest way to implement Singleton pattern in Java?",
          options: [
            { id: "a", text: "Static initializer block" },
            { id: "b", text: "Eager initialization with static field" },
            { id: "c", text: "Bill Pugh Singleton (static inner class)" },
            { id: "d", text: "Double-checked locking" }
          ],
          correctAnswerId: "c",
          explanation: "Bill Pugh Singleton using static inner class is thread-safe and lazy-loaded. The inner class is loaded only when needed.",
          hints: ["ClassLoader guarantees thread-safety", "Reflection and serialization can break singleton"]
        },
        {
          id: "jm_q37",
          title: "Volatile Keyword",
          difficulty: "hard",
          tags: ["volatile", "threading"],
          question: "What does the volatile keyword guarantee?",
          options: [
            { id: "a", text: "Mutual exclusion like synchronized" },
            { id: "b", text: "Visibility of changes across threads" },
            { id: "c", text: "Atomicity of operations" },
            { id: "d", text: "Thread-safe read/write operations" }
          ],
          correctAnswerId: "b",
          explanation: "volatile ensures that changes to a variable are immediately visible to all threads. Does not provide mutual exclusion. Used with simple flag variables.",
          hints: ["volatile variables are not cached", "Doesn't replace synchronized for complex operations"]
        },
        {
          id: "jm_q38",
          title: "Atomic Operations",
          difficulty: "hard",
          tags: ["atomic", "concurrent"],
          question: "What is the advantage of Atomic classes over synchronized?",
          options: [
            { id: "a", text: "They are always faster" },
            { id: "b", text: "They use lock-free algorithms, faster for high contention" },
            { id: "c", text: "They don't require import statements" },
            { id: "d", text: "There is no difference" }
          ],
          correctAnswerId: "b",
          explanation: "Atomic classes (AtomicInteger, AtomicReference) use Compare-And-Swap (CAS) algorithms, enabling lock-free thread-safety with better performance under high contention.",
          hints: ["Located in java.util.concurrent.atomic", "Good for simple counters and flags"]
        },
        {
          id: "jm_q39",
          title: "Method References",
          difficulty: "hard",
          tags: ["method-references", "functional"],
          question: "How many types of method references are there in Java?",
          options: [
            { id: "a", text: "One type" },
            { id: "b", text: "Two types" },
            { id: "c", text: "Three types" },
            { id: "d", text: "Four types" }
          ],
          correctAnswerId: "d",
          explanation: "Four types: static method (Class::method), instance method (obj::method), constructor (Class::new), and arbitrary instance method (Class::method).",
          hints: ["Use :: operator", "Shorthand for lambda expressions"]
        },
        {
          id: "jm_q40",
          title: "Generics Wildcards",
          difficulty: "hard",
          tags: ["generics", "wildcards"],
          question: "What is the difference between ? extends T and ? super T?",
          options: [
            { id: "a", text: "They are the same" },
            { id: "b", text: "extends is for upper bound (can read), super is for lower bound (can write)" },
            { id: "c", text: "extends is for lower bound, super is for upper bound" },
            { id: "d", text: "super is only for methods" }
          ],
          correctAnswerId: "b",
          explanation: "? extends T is upper bound (read-only from collection). ? super T is lower bound (write-only to collection). Uses PECS: Producer Extends, Consumer Super.",
          hints: ["extends allows reading", "super allows writing"]
        }
      ]
    },
    {
      pageNumber: 5,
      questions: [
        {
          id: "jm_q41",
          title: "NullPointerException",
          difficulty: "hard",
          tags: ["exceptions", "null"],
          question: "How can you prevent NullPointerException in Java 8+?",
          options: [
            { id: "a", text: "Using Optional class" },
            { id: "b", text: "Always checking if value is null" },
            { id: "c", text: "Using assertions" },
            { id: "d", text: "Using synchronized blocks" }
          ],
          correctAnswerId: "a",
          explanation: "Optional class wraps potentially null values. Use Optional.of(), Optional.ofNullable(), and methods like isPresent(), ifPresent(), orElse().",
          hints: ["Optional is a container for values", "Avoids explicit null checks"]
        },
        {
          id: "jm_q42",
          title: "Varargs",
          difficulty: "hard",
          tags: ["varargs", "methods"],
          question: "What is a limitation of using varargs in a method?",
          options: [
            { id: "a", text: "Can only be used in static methods" },
            { id: "b", text: "Can only have one varargs parameter and it must be last" },
            { id: "c", text: "Cannot mix varargs with regular parameters" },
            { id: "d", text: "Varargs parameters must be of same type" }
          ],
          correctAnswerId: "b",
          explanation: "A method can have only one varargs parameter, and it must be the last parameter. Syntax: type... name.",
          hints: ["Varargs are converted to array internally", "Must be placed at the end"]
        },
        {
          id: "jm_q43",
          title: "Class Loading",
          difficulty: "hard",
          tags: ["classloader", "jvm"],
          question: "What are the three types of class loaders in Java?",
          options: [
            { id: "a", text: "Bootstrap, Extension, Application" },
            { id: "b", text: "Boot, System, User" },
            { id: "c", text: "Parent, Child, Root" },
            { id: "d", text: "Primary, Secondary, Tertiary" }
          ],
          correctAnswerId: "a",
          explanation: "Bootstrap classloader (JDK classes), Extension classloader (optional packages), Application classloader (classpath). Uses delegation model.",
          hints: ["Follows parent-child relationship", "Bootstrap is part of JVM core"]
        },
        {
          id: "jm_q44",
          title: "String Intern",
          difficulty: "hard",
          tags: ["strings", "memory"],
          question: "What does String.intern() do?",
          options: [
            { id: "a", text: "Converts string to int" },
            { id: "b", text: "Moves string to string pool if not present" },
            { id: "c", text: "Makes string immutable" },
            { id: "d", text: "Clones the string" }
          ],
          correctAnswerId: "b",
          explanation: "intern() returns a canonical representation of the string. If string not in pool, it's added; otherwise, reference to existing pooled string is returned.",
          hints: ["Returns same reference if string is pooled", "Useful for memory optimization"]
        },
        {
          id: "jm_q45",
          title: "Annotation Processing",
          difficulty: "hard",
          tags: ["annotations", "reflection"],
          question: "At what time are custom annotations processed?",
          options: [
            { id: "a", text: "Always at compile time" },
            { id: "b", text: "Always at runtime" },
            { id: "c", text: "Depends on retention policy" },
            { id: "d", text: "Only in development mode" }
          ],
          correctAnswerId: "c",
          explanation: "@Retention policy determines when annotation is processed: SOURCE (compile-time only), CLASS (compile/classload), RUNTIME (runtime accessible).",
          hints: ["@Retention specifies retention policy", "Use RetentionPolicy enum"]
        },
        {
          id: "jm_q46",
          title: "Enums",
          difficulty: "hard",
          tags: ["enums", "constants"],
          question: "Can you extend an enum in Java?",
          options: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "No, never" },
            { id: "c", text: "Only if it has abstract methods" },
            { id: "d", text: "Only through interfaces" }
          ],
          correctAnswerId: "d",
          explanation: "You cannot extend an enum (extends is forbidden). Enums implicitly extend java.lang.Enum. But an enum can implement interfaces.",
          hints: ["Enums are final implicitly", "Can implement multiple interfaces"]
        },
        {
          id: "jm_q47",
          title: "Type Casting",
          difficulty: "hard",
          tags: ["casting", "polymorphism"],
          question: "What is the difference between casting a parent to child vs child to parent?",
          options: [
            { id: "a", text: "Both are the same" },
            { id: "b", text: "Parent to child risks ClassCastException, child to parent is always safe" },
            { id: "c", text: "Both always work safely" },
            { id: "d", text: "Child to parent always causes ClassCastException" }
          ],
          correctAnswerId: "b",
          explanation: "Downcasting (parent to child) risks ClassCastException if object isn't actually that type. Upcasting (child to parent) is always safe.",
          hints: ["Use instanceof to check before downcasting", "Always check type before unsafe casting"]
        },
        {
          id: "jm_q48",
          title: "Variable Access in Anonymous Classes",
          difficulty: "hard",
          tags: ["anonymous-classes", "closure"],
          question: "What type of variables can be accessed from anonymous inner classes?",
          options: [
            { id: "a", text: "Only final variables" },
            { id: "b", text: "Only static variables" },
            { id: "c", text: "Only effectively final variables" },
            { id: "d", text: "Any variables" }
          ],
          correctAnswerId: "c",
          explanation: "Anonymous classes can access effectively final variables (not modified after initialization). Java 8+ relaxed requirement - variable doesn't need 'final' keyword if effectively final.",
          hints: ["Effectively final = not modified once assigned", "Prevents capture of mutable state"]
        },
        {
          id: "jm_q49",
          title: "Switch Statements",
          difficulty: "hard",
          tags: ["switch", "control-flow"],
          question: "Can you use String in a switch statement in Java?",
          options: [
            { id: "a", text: "No, only primitives" },
            { id: "b", text: "Yes, since Java 7" },
            { id: "c", text: "Only with enum" },
            { id: "d", text: "Never in older versions" }
          ],
          correctAnswerId: "b",
          explanation: "String can be used in switch statements since Java 7. Comparison is done using equals(), not ==. NullPointerException if null.",
          hints: ["Useful for string comparisons", "Uses equals() method internally"]
        },
        {
          id: "jm_q50",
          title: "Default Interface Methods",
          difficulty: "hard",
          tags: ["interfaces", "default-methods"],
          question: "Why were default methods introduced in interfaces (Java 8)?",
          options: [
            { id: "a", text: "To replace abstract classes" },
            { id: "b", text: "To add new methods without breaking existing implementations" },
            { id: "c", text: "To improve performance" },
            { id: "d", text: "To allow multiple inheritance" }
          ],
          correctAnswerId: "b",
          explanation: "Default methods (Java 8) allow adding methods to interfaces without forcing all implementations to override them. Enables backward compatibility and evolution.",
          hints: ["Use 'default' keyword", "Can be overridden by implementing classes"]
        }
      ]
    }
  ]
};
