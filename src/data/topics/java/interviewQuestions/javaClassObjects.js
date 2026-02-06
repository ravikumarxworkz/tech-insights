// src/data/topics/java/interviewQuestions/javaClassAndObjects.js

export const javaClassAndObjectsInterviewQuestions = {
  conceptGroup: "Class and Objects",
  totalQuestions: 20,
  difficulty: {
    easy: 20,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 3,
      questions: [
        {
          id: "jb_co21",
          title: "Class vs Object",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["oops", "class", "object"],
          question: "What is the difference between a class and an object in Java?",
          hints: ["Blueprint vs Instance"],
          answer: "A class is a blueprint or template used to create objects, while an object is a real-world instance of a class.",
          explanation: "A class defines properties and methods, whereas an object represents those properties with actual values in memory.",
          output: ""
        },
        {
          id: "jb_co22",
          title: "Defining a Method",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["methods", "syntax"],
          question: "How do you define a method within a class?",
          hints: ["Return type", "Method name"],
          answer: "A method is defined using an access modifier, return type, method name, and parameters inside a class.",
          explanation: "Example: public void display() { } where public is access modifier and void is return type.",
          output: ""
        },
        {
          id: "jb_co23",
          title: "Purpose of Constructors",
          difficulty: "easy",
          askedBy: ["Accenture", "Infosys"],
          tags: ["constructor", "initialization"],
          question: "What is the purpose of constructors in a class?",
          hints: ["Object initialization"],
          answer: "Constructors are used to initialize objects when they are created.",
          explanation: "They set initial values for instance variables and have the same name as the class.",
          output: ""
        },
        {
          id: "jb_co24",
          title: "Creating an Object",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["object", "new-keyword"],
          question: "How can you create an instance of a class?",
          hints: ["new keyword"],
          answer: "An object is created using the 'new' keyword followed by the class constructor.",
          explanation: "Example: ClassName obj = new ClassName();",
          output: ""
        },
        {
          id: "jb_co25",
          title: "this Keyword",
          difficulty: "easy",
          askedBy: ["Infosys", "Cognizant"],
          tags: ["keywords", "this"],
          question: "What is the significance of this keyword in a class?",
          hints: ["Current object reference"],
          answer: "'this' refers to the current object of the class.",
          explanation: "It is commonly used to differentiate instance variables from local variables.",
          output: ""
        },
        {
          id: "jb_co26",
          title: "Accessing Object Members",
          difficulty: "easy",
          askedBy: ["Wipro", "LTIMindtree"],
          tags: ["object", "dot-operator"],
          question: "How do you access the members of an object?",
          hints: ["Dot operator"],
          answer: "Members of an object are accessed using the dot (.) operator.",
          explanation: "Example: obj.variable or obj.method();",
          output: ""
        },
        {
          id: "jb_co27",
          title: "Method Hiding",
          difficulty: "easy",
          askedBy: ["TCS", "Oracle"],
          tags: ["static", "inheritance"],
          question: "What is method hiding in Java?",
          hints: ["Static methods"],
          answer: "Method hiding occurs when a subclass defines a static method with the same signature as a static method in the parent class.",
          explanation: "Unlike method overriding, method hiding is resolved at compile time.",
          output: ""
        },
        {
          id: "jb_co28",
          title: "Invoking a Method",
          difficulty: "easy",
          askedBy: ["Capgemini", "HCL"],
          tags: ["methods", "object"],
          question: "How can you invoke a method of an object?",
          hints: ["Method call"],
          answer: "By using the object reference followed by the method name and parentheses.",
          explanation: "Example: obj.methodName();",
          output: ""
        },
        {
          id: "jb_co29",
          title: "Static Members",
          difficulty: "easy",
          askedBy: ["IBM", "Infosys"],
          tags: ["static", "class-level"],
          question: "What is the use of static variables and methods in a class?",
          hints: ["Shared data"],
          answer: "Static members belong to the class rather than to objects.",
          explanation: "They are shared among all instances and can be accessed using the class name.",
          output: ""
        },
        {
          id: "jb_co30",
          title: "Instance vs Local Variables",
          difficulty: "easy",
          askedBy: ["Accenture", "TCS"],
          tags: ["variables", "scope"],
          question: "How do you differentiate between instance variables and local variables?",
          hints: ["Scope", "Lifetime"],
          answer: "Instance variables belong to the object, while local variables exist only within methods.",
          explanation: "Instance variables have default values; local variables must be initialized.",
          output: ""
        },
        {
          id: "jb_co31",
          title: "Inner Class",
          difficulty: "easy",
          askedBy: ["Wipro", "Cognizant"],
          tags: ["nested-class", "inner-class"],
          question: "What is an inner class in Java?",
          hints: ["Class inside class"],
          answer: "An inner class is a class defined inside another class.",
          explanation: "It can access members of the outer class, including private ones.",
          output: ""
        },
        {
          id: "jb_co32",
          title: "Static vs Non-static Nested Class",
          difficulty: "easy",
          askedBy: ["Infosys", "Capgemini"],
          tags: ["nested-class", "static"],
          question: "How does a static nested class differ from a non-static nested class?",
          hints: ["Outer class reference"],
          answer: "A static nested class does not require an instance of the outer class, while a non-static nested class does.",
          explanation: "Non-static nested classes can directly access instance members of the outer class.",
          output: ""
        },
        {
          id: "jb_co33",
          title: "toString Method",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["object-class", "toString"],
          question: "What is the purpose of the toString() method in a class?",
          hints: ["String representation"],
          answer: "toString() returns a string representation of an object.",
          explanation: "It is commonly overridden to display meaningful object information.",
          output: ""
        },
        {
          id: "jb_co34",
          title: "Initialization Blocks",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["initialization", "blocks"],
          question: "How do you initialize a class with class-level initialization blocks?",
          hints: ["Static block"],
          answer: "Using static initialization blocks inside the class.",
          explanation: "Static blocks execute once when the class is loaded.",
          output: ""
        },
        {
          id: "jb_co35",
          title: "instanceof Operator",
          difficulty: "easy",
          askedBy: ["Wipro", "Accenture"],
          tags: ["operator", "type-checking"],
          question: "What is the purpose of the instanceof operator?",
          hints: ["Type checking"],
          answer: "It checks whether an object belongs to a specific class or interface.",
          explanation: "It helps prevent ClassCastException during runtime.",
          output: ""
        },
        {
          id: "jb_co36",
          title: "Overriding equals()",
          difficulty: "easy",
          askedBy: ["Oracle", "Infosys"],
          tags: ["equals", "object-class"],
          question: "How do you override the equals() method in a class?",
          hints: ["Logical equality"],
          answer: "By comparing object fields instead of memory references.",
          explanation: "It must follow the equals() contract: reflexive, symmetric, transitive, consistent.",
          output: ""
        },
        {
          id: "jb_co37",
          title: "Shallow vs Deep Copy",
          difficulty: "easy",
          askedBy: ["IBM", "TCS"],
          tags: ["copy", "objects"],
          question: "What is the difference between shallow copy and deep copy?",
          hints: ["Reference copy"],
          answer: "Shallow copy copies references, deep copy copies actual objects.",
          explanation: "Changes in deep copy do not affect the original object.",
          output: ""
        },
        {
          id: "jb_co38",
          title: "Object Cloning",
          difficulty: "easy",
          askedBy: ["Capgemini", "Oracle"],
          tags: ["clone", "copy"],
          question: "How do you create a copy of an object using cloning?",
          hints: ["clone() method"],
          answer: "By implementing Cloneable and calling the clone() method.",
          explanation: "clone() creates a shallow copy unless deep cloning is implemented.",
          output: ""
        },
        {
          id: "jb_co39",
          title: "Class.forName()",
          difficulty: "easy",
          askedBy: ["Infosys", "IBM"],
          tags: ["reflection", "class-loader"],
          question: "What is the use of Class.forName()?",
          hints: ["Load class dynamically"],
          answer: "It loads a class into memory dynamically at runtime.",
          explanation: "Commonly used in JDBC to load database drivers.",
          output: ""
        },
        {
          id: "jb_co40",
          title: "Immutable Class",
          difficulty: "easy",
          askedBy: ["TCS", "Accenture"],
          tags: ["immutability", "design"],
          question: "How do you make a class immutable in Java?",
          hints: ["Final class"],
          answer: "By making the class final, fields private and final, and not providing setters.",
          explanation: "Also ensure deep copies are returned for mutable objects.",
          output: ""
        }
      ]
    }
  ]
};

export default javaClassAndObjectsInterviewQuestions;
