// src/data/topics/java/interviewQuestions/javaCompilationExecution.js

export const javaCompilationExecutionInterviewQuestions = {
  conceptGroup: "Compilation & Execution",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 4,
      title: "Compilation & Execution in Java",
      questions: [
        {
          id: "jce_iq1",
          title: "Java Compilation Process",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["compilation", "javac"],
          question: "What happens during the compilation of a Java program?",
          hints: [
            "Source to bytecode",
            "javac"
          ],
          answer: "The Java compiler converts source code into bytecode.",
          explanation: "The `javac` compiler checks syntax, type safety, and generates a `.class` file containing bytecode.",
          output: ""
        },
        {
          id: "jce_iq2",
          title: "Why Java Uses Bytecode",
          difficulty: "medium",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["bytecode", "portability"],
          question: "Why does Java compile code into bytecode instead of machine code?",
          hints: [
            "Platform independence",
            "JVM"
          ],
          answer: "Bytecode enables platform independence.",
          explanation: "Bytecode can run on any JVM, whereas machine code is OS and hardware specific.",
          output: ""
        },
        {
          id: "jce_iq3",
          title: "Compilation Errors vs Runtime Errors",
          difficulty: "medium",
          askedBy: ["Wipro", "Cognizant"],
          tags: ["errors", "compile-time"],
          question: "What is the difference between compilation errors and runtime errors?",
          hints: [
            "Detected by compiler vs JVM"
          ],
          answer: "Compilation errors occur during compilation; runtime errors occur during execution.",
          explanation: "Syntax and type errors are compile-time, while exceptions like NullPointerException occur at runtime.",
          output: ""
        },
        {
          id: "jce_iq4",
          title: "Execution of Java Program",
          difficulty: "easy",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["execution", "java-command"],
          question: "What happens internally when you execute `java ClassName`?",
          hints: [
            "Class loading",
            "main method"
          ],
          answer: "JVM loads the class and invokes the main method.",
          explanation: "ClassLoader loads the class, bytecode is verified, memory is allocated, and execution begins with `main()`.",
          output: ""
        },
        {
          id: "jce_iq5",
          title: "Role of javac vs java",
          difficulty: "easy",
          askedBy: ["Infosys", "IBM India"],
          tags: ["javac", "java"],
          question: "What is the difference between `javac` and `java` commands?",
          hints: [
            "Compile vs Execute"
          ],
          answer: "`javac` compiles source code, `java` executes bytecode.",
          explanation: "`javac` generates `.class` files, while `java` runs them using the JVM.",
          output: ""
        },
        {
          id: "jce_iq6",
          title: "Multiple Class Compilation",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["multiple-classes", "compilation"],
          question: "How does Java handle compilation when multiple classes are present in a single source file?",
          hints: [
            "One public class rule"
          ],
          answer: "Each class gets its own `.class` file.",
          explanation: "Only one public class is allowed per file, and the file name must match the public class name.",
          output: ""
        },
        {
          id: "jce_iq7",
          title: "main Method Requirement",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["main-method"],
          question: "Why is the main method required to be public static void?",
          hints: [
            "JVM access",
            "No object creation"
          ],
          answer: "JVM needs to access main without creating an object.",
          explanation: "`public` allows JVM access, `static` avoids object creation, and `void` means no return value expected.",
          output: ""
        },
        {
          id: "jce_iq8",
          title: "ClassNotFoundException vs NoClassDefFoundError",
          difficulty: "hard",
          askedBy: ["Oracle India", "SAP Labs"],
          tags: ["exceptions", "class-loading"],
          question: "What is the difference between ClassNotFoundException and NoClassDefFoundError?",
          hints: [
            "Checked vs Error",
            "Compile vs Runtime"
          ],
          answer: "ClassNotFoundException is checked; NoClassDefFoundError is an error.",
          explanation: "ClassNotFoundException occurs when loading a class dynamically, while NoClassDefFoundError occurs when class was present at compile time but missing at runtime.",
          output: ""
        },
        {
          id: "jce_iq9",
          title: "Classpath Role",
          difficulty: "medium",
          askedBy: ["TCS Digital", "Accenture"],
          tags: ["classpath"],
          question: "What is the role of CLASSPATH in Java compilation and execution?",
          hints: [
            "Finding classes"
          ],
          answer: "CLASSPATH tells JVM where to find class files.",
          explanation: "If classpath is incorrect, JVM throws ClassNotFoundException.",
          output: ""
        },
        {
          id: "jce_iq10",
          title: "Java as Hybrid Language",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["compiled", "interpreted"],
          question: "Why is Java called a hybrid compiled and interpreted language?",
          hints: [
            "Bytecode",
            "JIT"
          ],
          answer: "Java uses both compilation and interpretation.",
          explanation: "Source code is compiled to bytecode, then interpreted and optimized at runtime using JIT.",
          output: ""
        }
      ]
    }
  ]
};

export default javaCompilationExecutionInterviewQuestions;
