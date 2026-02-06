// src/data/topics/java/interviewQuestions/javaInterfaces.js

export const javaInterfaceQuestions = {
    
    conceptGroup: "Interfaces",
    totalQuestions: 10,
  difficulty: { easy: 5, medium: 3, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "int_61",
          title: "Interface Definition",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["interface", "basics"],
          question: "What is an interface in Java?",
          hints: ["Blueprint"],
          answer: "An interface is a blueprint of a class that contains static constants and abstract methods. It specifies what a class must do, but not how.",
          explanation: "It is used to achieve 100% abstraction (before Java 8) and multiple inheritance.",
          output: ""
        },
        {
          id: "int_62",
          title: "Static Methods in Interface",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["java8", "interface"],
          question: "Is it allowed to mark an interface method as static?",
          hints: ["Java 8 features"],
          answer: "Yes, from Java 8 onwards, interfaces can have static methods which can be called using the Interface name.",
          explanation: "This allows providing utility methods related to the interface without needing an object.",
          output: ""
        },
        {
          id: "int_64",
          title: "Marker Interface",
          difficulty: "medium",
          askedBy: ["HCL", "Accenture"],
          tags: ["marker-interface"],
          question: "What is a marker interface?",
          hints: ["Empty interface"],
          answer: "An interface with no methods or fields. It tells the JVM or a compiler that the class has some special behavior (e.g., Serializable, Cloneable).",
          explanation: "It 'marks' a class for special treatment by the JVM.",
          output: ""
        },
        {
          id: "int_67",
          title: "Abstract Class vs Interface",
          difficulty: "medium",
          askedBy: ["Tech Mahindra", "IBM"],
          tags: ["comparison", "basics"],
          question: "What is the difference between abstract class and interface in Java?",
          hints: ["Multiple inheritance", "Variables"],
          answer: "Abstract classes can have constructors and instance variables; interfaces cannot. A class can implement multiple interfaces but extend only one abstract class.",
          explanation: "Abstract classes are for 'is-a' relationships; interfaces are for 'can-do' capabilities.",
          output: ""
        },
        
        {
          id: "int_h1",
          title: "Default Methods (Java 8)",
          difficulty: "hard",
          askedBy: ["Oracle", "Amazon"],
          tags: ["java8", "default-methods"],
          question: "Why were default methods introduced in interfaces?",
          hints: ["Backward compatibility"],
          answer: "To allow adding new methods to existing interfaces without breaking the classes that already implement them.",
          explanation: "Before Java 8, adding a method to an interface forced all implementing classes to change. Default methods provide a standard implementation.",
          output: ""
        },
        {
          id: "int_h2",
          title: "Interface Casting",
          difficulty: "hard",
          askedBy: ["Cisco", "Walmart"],
          tags: ["casting", "interface"],
          question: "How can we cast an object reference to an interface reference?",
          hints: ["Inheritance rules"],
          answer: "If the class of the object implements the interface, you can perform the cast directly: MyInterface ref = (MyInterface) myObject;",
          explanation: "The JVM verifies at runtime that the object actually implements the interface before allowing the cast.",
          output: ""
        }
      ]
    }
  ]
};