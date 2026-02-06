// src/data/topics/java/interviewQuestions/javaHistoryAndFeatures.js

export const javaHistoryAndFeaturesInterviewQuestions = {
  conceptGroup: "History & Features of Java",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 2,
      title: "History & Features of Java",
      questions: [
        {
          id: "jhf_iq1",
          title: "Origin of Java",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["history", "origin"],
          question: "Who developed Java and what was its original name?",
          hints: [
            "James Gosling",
            "Oak language"
          ],
          answer: "Java was developed by James Gosling at Sun Microsystems and was originally called Oak.",
          explanation: "The name Oak was changed to Java due to trademark issues. Java was designed for embedded and network-based systems.",
          output: ""
        },
        {
          id: "jhf_iq2",
          title: "Why Java Was Created",
          difficulty: "medium",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["history", "design-goals"],
          question: "Why was Java created when C and C++ already existed?",
          hints: [
            "Portability",
            "Security"
          ],
          answer: "Java was created to provide platform independence, security, and simplicity.",
          explanation: "C/C++ programs were platform dependent and unsafe. Java introduced bytecode, JVM, and automatic memory management.",
          output: ""
        },
        {
          id: "jhf_iq3",
          title: "Write Once Run Anywhere",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["features", "wora"],
          question: "How does Java achieve the 'Write Once, Run Anywhere' principle?",
          hints: [
            "Bytecode",
            "JVM"
          ],
          answer: "Java compiles source code into platform-independent bytecode.",
          explanation: "The same bytecode can run on any system with a compatible JVM, eliminating recompilation.",
          output: ""
        },
        {
          id: "jhf_iq4",
          title: "Platform Independence vs Platform Neutral",
          difficulty: "medium",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["platform", "concepts"],
          question: "Is Java platform independent or platform neutral? Explain.",
          hints: [
            "JVM dependency"
          ],
          answer: "Java is platform independent at the source level but platform dependent at JVM level.",
          explanation: "Java bytecode is platform neutral, but JVM implementations are platform specific.",
          output: ""
        },
        {
          id: "jhf_iq5",
          title: "Robust Feature",
          difficulty: "medium",
          askedBy: ["TCS Digital", "SAP Labs"],
          tags: ["features", "robust"],
          question: "What makes Java a robust programming language?",
          hints: [
            "Exception handling",
            "Garbage collection"
          ],
          answer: "Java is robust due to strong memory management and exception handling.",
          explanation: "It avoids pointers, performs runtime checks, and uses garbage collection to prevent memory leaks.",
          output: ""
        },
        {
          id: "jhf_iq6",
          title: "Secure Feature",
          difficulty: "hard",
          askedBy: ["Cisco India", "Google India"],
          tags: ["security", "features"],
          question: "How does Java ensure security at runtime?",
          hints: [
            "Bytecode verifier",
            "ClassLoader"
          ],
          answer: "Java ensures security using bytecode verification, class loaders, and security manager.",
          explanation: "These mechanisms prevent unauthorized access to memory and restrict execution of unsafe code.",
          output: ""
        },
        {
          id: "jhf_iq7",
          title: "Interpreted vs Compiled",
          difficulty: "medium",
          askedBy: ["Infosys", "HCL"],
          tags: ["compiled", "interpreted"],
          question: "Is Java a compiled or interpreted language?",
          hints: [
            "Hybrid approach"
          ],
          answer: "Java is both compiled and interpreted.",
          explanation: "Java code is compiled into bytecode, which is interpreted and optimized at runtime by the JVM using JIT.",
          output: ""
        },
        {
          id: "jhf_iq8",
          title: "Architecture Neutral",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["architecture", "features"],
          question: "What does it mean when Java is called architecture-neutral?",
          hints: [
            "No hardware dependency"
          ],
          answer: "Java bytecode is not tied to any specific CPU architecture.",
          explanation: "This allows Java programs to run on different hardware platforms without modification.",
          output: ""
        },
        {
          id: "jhf_iq9",
          title: "Java and Multithreading",
          difficulty: "easy",
          askedBy: ["Flipkart", "Swiggy"],
          tags: ["multithreading", "features"],
          question: "Why is multithreading considered a core feature of Java?",
          hints: [
            "Built-in support"
          ],
          answer: "Java provides built-in support for multithreading at the language level.",
          explanation: "Thread creation, synchronization, and concurrency APIs are part of Java itself.",
          output: ""
        },
        {
          id: "jhf_iq10",
          title: "Evolution of Java",
          difficulty: "hard",
          askedBy: ["Amazon India", "Oracle India"],
          tags: ["evolution", "versions"],
          question: "How has Java evolved over the years while maintaining backward compatibility?",
          hints: [
            "JVM stability",
            "Language enhancements"
          ],
          answer: "Java evolves by enhancing APIs and language features without breaking existing code.",
          explanation: "Backward compatibility is maintained through JVM design and careful language evolution.",
          output: ""
        }
      ]
    }
  ]
};

export default javaHistoryAndFeaturesInterviewQuestions;

