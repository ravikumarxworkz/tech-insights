// src/data/topics/java/interviewQuestions/javaStatic.js

export const javaStaticInterviewQuestions = {
  conceptGroup: "Static",
    totalQuestions: 39, 
  difficulty: {
    easy: 39,
    medium: 0,
    hard: 0
  },
  pages: [
    // ... Previous pages (Questions 1-31) ...
    {
      pageNumber: 4,
      questions: [
        {
          id: "jb_iq32",
          title: "Use of Static Variable",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Wipro"],
          tags: ["static", "memory"],
          question: "In Java, why do we use static variable?",
          hints: ["Common property", "Memory saving"],
          answer: "We use static variables to define common properties shared by all objects of a class (e.g., company name for employees). It is loaded only once in memory during class loading.",
          explanation: "Unlike instance variables, static variables don't get a new memory slot for every object. This saves a lot of RAM when dealing with thousands of objects.",
          output: ""
        },
        {
          id: "jb_iq33",
          title: "Static Variables vs OOP Principles",
          difficulty: "easy",
          askedBy: ["HCL", "Accenture"],
          tags: ["static", "best-practices"],
          question: "Why is it not a good practice to create static variables in Java?",
          hints: ["Global scope", "OOP principles"],
          answer: "Static variables can be accessed from anywhere, making their scope 'open-ended.' This goes against the principle of Encapsulation and can make debugging difficult since any part of the code can change the value.",
          explanation: "For better control, variables should ideally be object-level. Static variables act like global variables, which makes unit testing and state management harder.",
          output: ""
        },
        {
          id: "jb_iq34",
          title: "Purpose of Static Method",
          difficulty: "easy",
          askedBy: ["Cognizant", "Capgemini"],
          tags: ["static", "methods"],
          question: "What is the purpose of static method in Java?",
          hints: ["Class level behavior", "No object needed"],
          answer: "Static methods belong to the class rather than an object. They can be called without creating an instance, providing convenience for utility functions (like Math.sqrt()).",
          explanation: "Static methods can only access other static data. They are great for logic that doesn't change based on the specific state of an object.",
          output: ""
        },
        {
          id: "jb_iq35",
          title: "Why main() is Static",
          difficulty: "easy",
          askedBy: ["TCS", "Tech Mahindra", "IBM"],
          tags: ["main", "jvm"],
          question: "Why do we mark main method as static in Java?",
          hints: ["JVM entry point", "Object creation paradox"],
          answer: "So that the JVM can call it without creating an instance of the class. If it weren't static, the JVM wouldn't know which constructor to call or how to instantiate the class to start the program.",
          explanation: "Making it static provides a clear, unambiguous entry point for the Java process to start execution.",
          output: ""
        },
        {
          id: "jb_iq36",
          title: "Scenario for Static Block",
          difficulty: "easy",
          askedBy: ["Wipro", "LTIMindtree"],
          tags: ["static", "initialization"],
          question: "In what scenario do we use a static block?",
          hints: ["Complex initialization"],
          answer: "Static blocks are used for complex initialization of static variables. They execute automatically when the class is loaded, even before the main method.",
          explanation: "If a static variable needs logic (like a loop or database connection) to be initialized, we wrap that code in a static block.",
          output: ""
        },
        {
          id: "jb_iq37",
          title: "Executing Program Without main()",
          difficulty: "easy",
          askedBy: ["Infosys", "HCL"],
          tags: ["main", "java-versions"],
          question: "Is it possible to execute a program without defining a main() method?",
          hints: ["Java 7 change"],
          answer: "No, from Java 7 onwards, a main() method is mandatory to run a program. In older versions, you could trick the JVM using a static block, but that gap is now closed.",
          explanation: "If you try to run a class without main() in modern Java, the JVM will throw a runtime error immediately.",
          output: ""
        },
        {
          id: "jb_iq38",
          title: "Missing Static in main()",
          difficulty: "easy",
          askedBy: ["TCS", "Accenture"],
          tags: ["main", "errors"],
          question: "What happens when static modifier is not mentioned in the signature of main method?",
          hints: ["Compile-time vs Runtime"],
          answer: "The program will compile successfully, but at runtime, it will throw a 'NoSuchMethodError' because the JVM specifically looks for a 'public static void main'.",
          explanation: "Java permits having a non-static method named main, but it won't be recognized as the starting point of the application.",
          output: ""
        },
        
        {
          id: "jb_iq39",
          title: "Static Method vs Instance Method",
          difficulty: "easy",
          askedBy: ["Capgemini", "Oracle"],
          tags: ["methods", "static"],
          question: "What is the difference between static method and instance method in Java?",
          hints: ["Object dependency", "Accessing variables"],
          answer: "Static methods belong to the class and don't need an object to be called. Instance methods belong to an object and can access both instance and static variables.",
          explanation: "To call an instance method, you must use 'new'. Static methods are called using the ClassName. Also, static methods cannot use the 'this' keyword.",
          output: ""
        }
      ]
    }
  ]
};

export default javaStaticInterviewQuestions;