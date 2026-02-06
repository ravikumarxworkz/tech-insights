// src/data/topics/java/interviewQuestions/javaInheritance.js

export const javaInheritanceInterviewQuestions = {
  conceptGroup: "Inheritance",
  totalQuestions: 31, 
  difficulty: {
    easy: 31,
    medium: 0,
    hard: 0
  },
  pages: [
    // ... Page 1 & 2 (Questions 1-20) ...
    {
      pageNumber: 3,
      questions: [
        {
          id: "jb_iq21",
          title: "Purpose of 'this' Keyword",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["keywords", "this"],
          question: "What is the purpose of ‘this’ keyword in java?",
          hints: ["Current instance"],
          answer: "'this' refers to the current instance of the object. It is used to differentiate between instance variables and local variables, or to call one constructor from another.",
          explanation: "It helps avoid confusion when parameter names are the same as instance variable names. It can also be used to pass the current object as a parameter to other methods.",
          output: ""
        },
        {
          id: "jb_iq22",
          title: "Concept of Inheritance",
          difficulty: "easy",
          askedBy: ["Wipro", "LTIMindtree"],
          tags: ["oops", "inheritance"],
          question: "Explain the concept of Inheritance?",
          hints: ["IS-A relationship", "Code reuse"],
          answer: "Inheritance allows a child class to acquire properties and behaviors of a parent class. It is represented by the IS-A relationship (e.g., Dog IS-A Animal).",
          explanation: "It promotes code reusability. Common features are kept in a Superclass, and specific features are implemented in Subclasses.",
          output: ""
        },
        {
          id: "jb_iq23",
          title: "Root Class in Java",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["basics", "object-class"],
          question: "Which class in Java is superclass of every other class?",
          hints: ["The root of all classes"],
          answer: "The 'Object' class (java.lang.Object) is the parent class of all classes in Java, either directly or indirectly.",
          explanation: "Every class you create automatically inherits methods like toString(), equals(), and hashCode() from the Object class.",
          output: ""
        },
        {
          id: "jb_iq24",
          title: "Multiple Inheritance in Java",
          difficulty: "easy",
          askedBy: ["TCS", "HCL", "Tech Mahindra"],
          tags: ["inheritance", "multiple-inheritance"],
          question: "Why Java does not support multiple inheritance?",
          hints: ["Diamond problem", "Ambiguity"],
          answer: "To avoid ambiguity (the Diamond Problem). If two parent classes have the same method with different logic, the compiler won't know which one to pick for the child.",
          explanation: "While multiple inheritance of classes is not allowed to prevent confusion, Java allows a class to implement multiple Interfaces.",
          output: ""
        },
        
        {
          id: "jb_iq25",
          title: "What is Composition?",
          difficulty: "easy",
          askedBy: ["Cognizant", "Infosys"],
          tags: ["oops", "composition"],
          question: "In OOPS, what is meant by composition?",
          hints: ["HAS-A relationship"],
          answer: "Composition is a 'HAS-A' relationship where one class holds an instance of another class (e.g., a Car HAS-A Engine).",
          explanation: "It is a way to combine objects to build more complex ones. If the container object is destroyed, the contained objects are usually destroyed too.",
          output: ""
        },
        {
          id: "jb_iq26",
          title: "Aggregation vs Composition",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["oops", "association"],
          question: "How aggregation and composition are different concepts?",
          hints: ["Strong vs Weak relationship"],
          answer: "Composition is a strong relationship (Car and Engine); if the Car is destroyed, the Engine is gone. Aggregation is a weak relationship (Library and Student); if the Library is destroyed, Students still exist.",
          explanation: "In Composition, the child cannot exist without the parent. In Aggregation, both can exist independently.",
          output: ""
        },
        {
          id: "jb_iq27",
          title: "Why No Pointers in Java?",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro"],
          tags: ["basics", "pointers"],
          question: "Why there are no pointers in Java?",
          hints: ["Security", "Memory management"],
          answer: "To provide security and simplicity. Direct memory access via pointers is risky. Java uses 'References' which are managed by the JVM and Garbage Collector.",
          explanation: "By removing pointers, Java prevents programmers from accessing memory locations directly, which avoids many common bugs and security leaks.",
          output: ""
        },
        {
          id: "jb_iq28",
          title: "Why NullPointerException?",
          difficulty: "easy",
          askedBy: ["Accenture", "Infosys"],
          tags: ["exceptions", "npe"],
          question: "If there are no pointers in Java, then why do we get NullPointerException?",
          hints: ["References point to null"],
          answer: "In Java, 'references' are essentially managed pointers. If a reference variable does not point to any object (is null) and you try to call a method on it, the JVM throws a NullPointerException.",
          explanation: "Even though we don't handle memory addresses manually, the 'dot' operator requires a valid object to work. If it's missing, the error occurs.",
          output: ""
        },
        {
          id: "jb_iq29",
          title: "Purpose of 'super' Keyword",
          difficulty: "easy",
          askedBy: ["Capgemini", "HCL"],
          tags: ["keywords", "super"],
          question: "What is the purpose of ‘super’ keyword in java?",
          hints: ["Parent class reference"],
          answer: "'super' is used to refer to the immediate parent class. It can call parent methods, parent constructors, or access parent variables.",
          explanation: "It is most commonly used in a child constructor as 'super()' to initialize the parent part of the object.",
          output: ""
        },
        {
          id: "jb_iq30",
          title: "this() and super() Together",
          difficulty: "easy",
          askedBy: ["Wipro", "TCS"],
          tags: ["constructor", "syntax"],
          question: "Is it possible to use this() and super() both in same constructor?",
          hints: ["First statement rule"],
          answer: "No. Both this() and super() must be the first statement in a constructor. Since you can only have one 'first' statement, you cannot use both.",
          explanation: "If you don't write super(), Java adds it automatically. If you write this(), it calls another constructor which eventually calls super().",
          output: ""
        },
        {
          id: "jb_iq31",
          title: "Object Cloning",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["cloning", "object-methods"],
          question: "What is the meaning of object cloning in Java?",
          hints: ["Creating a copy"],
          answer: "Object cloning is the process of creating an exact copy of an existing object using the clone() method of the Object class.",
          explanation: "To use it, a class must implement the 'Cloneable' interface. It copies all fields from the original to the new object.",
          output: ""
        }
      ]
    }
  ]
};

export default javaInheritanceInterviewQuestions;
