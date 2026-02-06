// src/data/topics/java/interviewQuestions/javaExceptionHandling.js

export const javaExceptionHandlingInterviewQuestions = {
  conceptGroup: "Exception Handling",
  totalQuestions: 41,
  difficulty: {
    easy: 20,
    medium: 15,
    hard: 6
  },
  pages: [
    {
      pageNumber: 13,
      questions: [
        {
          id: "jb_ex130",
          title: "throw vs throws",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["exception", "throw", "throws"],
          question: "What is the difference between throw and throws in Java?",
          hints: ["Explicit vs declaration"],
          answer: "`throw` explicitly throws an exception, while `throws` declares exceptions that a method may pass to the caller.",
          explanation: "`throw` is used inside a method body, whereas `throws` is used in the method signature.\n\nExample:\nthrow new IllegalArgumentException();\n\nvoid read() throws IOException { }",
          output: ""
        },
        {
          id: "jb_ex131",
          title: "Try-with-Resources",
          difficulty: "medium",
          askedBy: ["Oracle", "IBM"],
          tags: ["try-with-resources", "java-7"],
          question: "How do you use the try-with-resources statement?",
          hints: ["Auto close resources"],
          answer: "It automatically closes resources after execution.",
          explanation: "Introduced in Java 7. Resources must implement AutoCloseable.\n\nExample:\ntry (FileReader fr = new FileReader(\"a.txt\")) {\n  // use resource\n}",
          output: ""
        },
        {
          id: "jb_ex132",
          title: "Throwable Class",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["throwable", "hierarchy"],
          question: "What is the purpose of the Throwable class?",
          hints: ["Root exception class"],
          answer: "Throwable is the root class of all errors and exceptions.",
          explanation: "Both Exception and Error extend Throwable. Only Throwable objects can be thrown.",
          output: ""
        },
        {
          id: "jb_ex133",
          title: "Exceptions Across Methods",
          difficulty: "medium",
          askedBy: ["TCS", "Capgemini"],
          tags: ["exception", "propagation"],
          question: "How do you handle exceptions that occur in multiple methods?",
          hints: ["Propagation"],
          answer: "By propagating exceptions using throws and handling them at a higher level.",
          explanation: "Lower-level methods declare exceptions; higher-level methods handle them in try-catch blocks.",
          output: ""
        },
        {
          id: "jb_ex134",
          title: "StackTrace",
          difficulty: "easy",
          askedBy: ["Wipro", "HCL"],
          tags: ["stacktrace", "debugging"],
          question: "What is a StackTrace in exception handling?",
          hints: ["Call history"],
          answer: "It shows the sequence of method calls leading to the exception.",
          explanation: "Useful for debugging runtime errors.",
          output: ""
        },
        {
          id: "jb_ex135",
          title: "Rethrowing Exception",
          difficulty: "medium",
          askedBy: ["IBM", "Oracle"],
          tags: ["exception", "rethrow"],
          question: "How do you rethrow an exception in Java?",
          hints: ["Throw again"],
          answer: "By catching an exception and throwing it again.",
          explanation: "Example:\ncatch(Exception e) { throw e; }",
          output: ""
        },
        {
          id: "jb_ex136",
          title: "Exception Definition",
          difficulty: "easy",
          askedBy: ["Infosys", "TCS"],
          tags: ["exception", "basics"],
          question: "What is an exception in Java?",
          hints: ["Runtime error"],
          answer: "An exception is an event that disrupts normal program flow.",
          explanation: "It occurs during runtime and must be handled to avoid program termination.",
          output: ""
        },
        {
          id: "jb_ex137",
          title: "Checked vs Unchecked",
          difficulty: "medium",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["checked", "unchecked"],
          question: "What is the difference between a checked and an unchecked exception?",
          hints: ["Compile-time vs Runtime"],
          answer: "Checked exceptions are checked at compile time; unchecked exceptions occur at runtime.",
          explanation: "IOException is checked, NullPointerException is unchecked.",
          output: ""
        },
        {
          id: "jb_ex138",
          title: "Runtime vs Compile-Time Exceptions",
          difficulty: "medium",
          askedBy: ["IBM", "Oracle"],
          tags: ["runtime", "compile-time"],
          question: "How does Java differentiate between runtime exceptions and compile-time exceptions?",
          hints: ["Inheritance"],
          answer: "By their position in the exception hierarchy.",
          explanation: "RuntimeException and its subclasses are unchecked; others are checked.",
          output: ""
        },
        {
          id: "jb_ex139",
          title: "throw Keyword",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro"],
          tags: ["throw", "exception"],
          question: "What is the purpose of the throw keyword in Java?",
          hints: ["Explicit exception"],
          answer: "It explicitly throws an exception.",
          explanation: "Used for custom or manual exception triggering.",
          output: ""
        },
        {
          id: "jb_ex140",
          title: "throws Keyword",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["throws", "exception"],
          question: "How does the throws keyword differ from throw?",
          hints: ["Declaration vs execution"],
          answer: "throws declares exceptions; throw actually throws them.",
          explanation: "Used for exception propagation.",
          output: ""
        },
        {
          id: "jb_ex141",
          title: "finally Block Execution",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["finally", "exception"],
          question: "Can a finally block be skipped if no exception is thrown?",
          hints: ["Always executes"],
          answer: "No, finally always executes.",
          explanation: "Except when JVM exits or program crashes.",
          output: ""
        },
        {
          id: "jb_ex142",
          title: "Uncaught Exception",
          difficulty: "easy",
          askedBy: ["TCS", "Capgemini"],
          tags: ["uncaught", "exception"],
          question: "What happens if you don't catch an exception in a method?",
          hints: ["Program termination"],
          answer: "The exception propagates up and may terminate the program.",
          explanation: "Handled by JVM if not caught.",
          output: ""
        },
        {
          id: "jb_ex143",
          title: "Multiple Catch",
          difficulty: "medium",
          askedBy: ["Wipro", "HCL"],
          tags: ["multi-catch", "java-7"],
          question: "How do you catch multiple exceptions in a single catch block?",
          hints: ["Pipe operator"],
          answer: "Using the | operator.",
          explanation: "Example:\ncatch(IOException | SQLException e) { }",
          output: ""
        },
        {
          id: "jb_ex144",
          title: "Performance Impact",
          difficulty: "medium",
          askedBy: ["Oracle", "IBM"],
          tags: ["performance", "exception"],
          question: "What is the impact of exception handling on performance?",
          hints: ["Costly operation"],
          answer: "Exception handling is expensive if overused.",
          explanation: "Exceptions should not be used for normal control flow.",
          output: ""
        },
        {
          id: "jb_ex145",
          title: "Custom Exception",
          difficulty: "medium",
          askedBy: ["TCS", "Infosys"],
          tags: ["custom-exception"],
          question: "How do you create a custom exception in Java?",
          hints: ["Extend Exception"],
          answer: "By extending Exception or RuntimeException.",
          explanation: "Example:\nclass MyException extends Exception { }",
          output: ""
        },
        {
          id: "jb_ex146",
          title: "Exception Class Role",
          difficulty: "easy",
          askedBy: ["Capgemini", "Accenture"],
          tags: ["exception", "hierarchy"],
          question: "What is the purpose of the Exception class in the Java exception hierarchy?",
          hints: ["Checked exceptions"],
          answer: "It represents conditions that applications may want to catch.",
          explanation: "Used for recoverable problems.",
          output: ""
        },
        {
          id: "jb_ex163",
          title: "NullPointerException",
          difficulty: "easy",
          askedBy: ["TCS", "IBM"],
          tags: ["npe", "runtime"],
          question: "What is a NullPointerException, and how can you avoid it?",
          hints: ["Null check"],
          answer: "Occurs when accessing an object reference that is null.",
          explanation: "Avoid using null checks, Optional, and proper initialization.",
          output: ""
        },
        {
          id: "jb_ex170",
          title: "Runtime Exceptions",
          difficulty: "easy",
          askedBy: ["Infosys", "Oracle"],
          tags: ["runtime", "exception"],
          question: "How does Java handle runtime exceptions?",
          hints: ["Unchecked"],
          answer: "They occur at runtime and are not checked by the compiler.",
          explanation: "Program terminates if not handled.",
          output: ""
        }
      ]
    }
  ]
};

export default javaExceptionHandlingInterviewQuestions;
