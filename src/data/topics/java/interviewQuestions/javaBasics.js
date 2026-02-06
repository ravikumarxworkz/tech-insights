// src/data/topics/java/interviewQuestions/javaBasics.js

export const javaBasicsInterviewQuestions = {
  conceptGroup: "Java Basics",
  totalQuestions: 12,
  difficulty: {
    easy: 12,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "jb_iq1",
          title: "Difference Between JDK and JRE",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Wipro"],
          tags: ["jdk", "jre", "basics"],
          question: "What is the difference between JDK and JRE?",
          hints: [
            "Think of tools vs runtime",
            "JDK includes JRE"
          ],
          answer: "JDK is the development kit with compiler/tools and it includes the JRE. JRE is the runtime environment (JVM + core libraries) needed to run Java apps.",
          explanation: "JDK is the full development kit (compiler, tools, libraries). JRE is the runtime environment (JVM + libraries) needed to run Java applications. JDK includes JRE.",
          output: ""
        },
        {
          id: "jb_iq2",
          title: "What Is the JVM?",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["jvm", "basics"],
          question: "What is Java Virtual Machine (JVM)?",
          hints: [
            "Executes bytecode",
            "Platform-dependent implementation"
          ],
          answer: "JVM is an abstract machine that loads, verifies, and executes Java bytecode. Different JVMs exist for different platforms.",
          explanation: "JVM is an abstract machine that executes Java bytecode. Different JVM implementations exist for different platforms, which makes Java programs portable.",
          output: ""
        },
        {
          id: "jb_iq3",
          title: "JVM Memory Areas",
          difficulty: "easy",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["jvm", "memory"],
          question: "What are the different types of memory areas allocated by JVM?",
          hints: [
            "Think: class loading, heap, stack, PC, native"
          ],
          answer: "ClassLoader, Method (Class) Area, Heap, JVM Stack, Program Counter Register, and Native Method Stack.",
          explanation: "Typical JVM memory areas include ClassLoader, Method Area, Heap, JVM Stack, Program Counter Register, and Native Method Stack.",
          output: ""
        },
        {
          id: "jb_iq4",
          title: "What Is JIT Compiler?",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["jit", "performance"],
          question: "What is JIT compiler?",
          hints: [
            "Just-In-Time",
            "Improves runtime performance"
          ],
          answer: "JIT (Just-In-Time) compiler converts frequently executed bytecode into native machine code at runtime to improve performance.",
          explanation: "JIT (Just-In-Time) compiler compiles bytecode into native machine code at runtime to improve performance.",
          output: ""
        },
        {
          id: "jb_iq5",
          title: "Java Platform Independence",
          difficulty: "easy",
          askedBy: ["Cognizant", "Infosys"],
          tags: ["platform", "bytecode"],
          question: "How is Java platform different from other platforms?",
          hints: [
            "Bytecode + JVM",
            "Write once, run anywhere"
          ],
          answer: "Java compiles to platform-independent bytecode. Any JVM on any OS can run that bytecode.",
          explanation: "Java compiles to bytecode that can run on any JVM, so the same program works across platforms without recompilation.",
          output: ""
        },
        {
          id: "jb_iq6",
          title: "Write Once, Run Anywhere",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro"],
          tags: ["wora", "bytecode"],
          question: "Why people say that Java is 'write once and run anywhere' language?",
          hints: [
            "Bytecode is portable",
            "JVM on each OS"
          ],
          answer: "The compiler creates bytecode once, and any JVM can execute it on any platform.",
          explanation: "The Java compiler produces platform-independent bytecode, which any JVM can execute on its platform. That makes Java portable.",
          output: ""
        },
        {
          id: "jb_iq7",
          title: "How ClassLoader Works",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["classloader", "jvm"],
          question: "How does ClassLoader work in Java?",
          hints: [
            "Loads classes from filesystem/network",
            "Bootstrap, Extension, Application"
          ],
          answer: "ClassLoader loads classes from disk/network into the JVM. Common loaders: Bootstrap, Extension/Platform, and Application.",
          explanation: "ClassLoader loads class files into the JVM. Common loaders include Bootstrap, Extension/Platform, and Application loaders.",
          output: ""
        },
        {
          id: "jb_iq8",
          title: "Is 'main' a Keyword?",
          difficulty: "easy",
          askedBy: ["HCL", "Wipro"],
          tags: ["main", "basics"],
          question: "Do you think 'main' used for main method is a keyword in Java?",
          hints: [
            "It's just a method name"
          ],
          answer: "No. \"main\" is not a keyword; it is just the entry-point method name the JVM looks for.",
          explanation: "No, \"main\" is not a keyword. It's just the method name the JVM looks for as the program entry point.",
          output: ""
        },
        {
          id: "jb_iq9",
          title: "Order of Modifiers in main()",
          difficulty: "easy",
          askedBy: ["Infosys", "Tech Mahindra"],
          tags: ["main", "syntax"],
          question: "Can we write main method as public void static instead of public static void?",
          hints: [
            "Order of modifiers can change",
            "Return type must come after modifiers"
          ],
          answer: "No. You can write `static public void main(...)`, but `public void static` is invalid because the return type must come after modifiers.",
          explanation: "No. Modifiers can be reordered (static public), but the return type must follow modifiers. \"public void static\" is invalid.",
          output: ""
        },
        {
          id: "jb_iq10",
          title: "Default Value of Local Variables",
          difficulty: "easy",
          askedBy: ["TCS", "Cognizant"],
          tags: ["variables", "basics"],
          question: "In Java, if we do not specify any value for local variables, then what will be the default value?",
          hints: [
            "Local variables are not auto-initialized"
          ],
          answer: "Local variables are not initialized by default. You must assign a value before using them.",
          explanation: "Local variables are not initialized by default. You must assign a value before using them.",
          output: ""
        },
        {
          id: "jb_iq11",
          title: "Default Value of args in main",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["main", "args"],
          question: "If we run a Java class without passing any arguments, what will be the value of the String array of arguments in main?",
          hints: [
            "It is an empty array"
          ],
          answer: "It is an empty array (length 0), not null.",
          explanation: "When no arguments are passed, args is an empty array (length 0), not null.",
          output: ""
        },
        {
          id: "jb_iq12",
          title: "Difference Between byte and char",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["datatypes", "byte", "char"],
          question: "What is the difference between byte and char data types in Java?",
          hints: [
            "Size and signedness",
            "Character vs raw numeric"
          ],
          answer: "byte is 8-bit signed (-128 to 127). char is 16-bit unsigned (0 to 65535) and represents Unicode characters.",
          explanation: "byte is an 8-bit signed integer. char is a 16-bit unsigned type used for Unicode characters.",
          output: ""
        }
      ]
    }
  ]
};

export default javaBasicsInterviewQuestions;
