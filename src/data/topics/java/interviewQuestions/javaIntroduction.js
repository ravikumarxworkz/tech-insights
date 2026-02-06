// src/data/topics/java/interviewQuestions/javaIntroduction.js

export const javaIntroductionInterviewQuestions = {
  conceptGroup: "Introduction to Java",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 1,
      title: "Introduction to Java",
      questions: [
        {
          id: "ji_iq1",
          title: "What is Java?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["java", "basics"],
          question: "What is Java and why is it called a platform-independent language?",
          hints: [
            "Bytecode",
            "JVM"
          ],
          answer: "Java is a high-level, object-oriented programming language that is platform independent.",
          explanation: "Java programs are compiled into bytecode, which can run on any system having a JVM. This makes Java platform independent.",
          output: ""
        },
        {
          id: "ji_iq2",
          title: "Why Java is Robust?",
          difficulty: "medium",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["robust", "features"],
          question: "Why is Java considered a robust programming language?",
          hints: [
            "Exception handling",
            "Memory management"
          ],
          answer: "Java is robust due to strong memory management, exception handling, and type checking.",
          explanation: "Java avoids pointers, handles runtime errors using exceptions, and uses garbage collection to manage memory safely.",
          output: ""
        },
        {
          id: "ji_iq3",
          title: "Java vs C++",
          difficulty: "medium",
          askedBy: ["Accenture", "IBM India"],
          tags: ["java-vs-cpp"],
          question: "What are the key differences between Java and C++?",
          hints: [
            "Pointers",
            "Multiple inheritance"
          ],
          answer: "Java does not support pointers or multiple inheritance using classes, while C++ does.",
          explanation: "Java focuses on security and simplicity, whereas C++ gives more low-level control.",
          output: ""
        },
        {
          id: "ji_iq4",
          title: "Is Java Purely Object-Oriented?",
          difficulty: "medium",
          askedBy: ["Oracle India", "SAP Labs"],
          tags: ["oop"],
          question: "Is Java a purely object-oriented language?",
          hints: [
            "Primitive data types"
          ],
          answer: "No, Java is not purely object-oriented.",
          explanation: "Java supports primitive data types like int, char, etc., which are not objects.",
          output: ""
        },
        {
          id: "ji_iq5",
          title: "Why No Pointers in Java?",
          difficulty: "hard",
          askedBy: ["Google India", "Amazon India"],
          tags: ["pointers", "security"],
          question: "Why does Java not support pointers?",
          hints: [
            "Security",
            "Memory safety"
          ],
          answer: "Java avoids pointers to ensure security and prevent memory corruption.",
          explanation: "Direct memory access can cause security issues and crashes. Java uses references managed by JVM instead.",
          output: ""
        },
        {
          id: "ji_iq6",
          title: "Java Security Model",
          difficulty: "hard",
          askedBy: ["Cisco India", "IBM India"],
          tags: ["security"],
          question: "How does Java provide security?",
          hints: [
            "ClassLoader",
            "Security Manager"
          ],
          answer: "Java uses bytecode verification, class loaders, and security managers.",
          explanation: "These mechanisms prevent unauthorized memory access and execution of unsafe code.",
          output: ""
        },
        {
          id: "ji_iq7",
          title: "Java Editions",
          difficulty: "easy",
          askedBy: ["Infosys", "TCS"],
          tags: ["java-editions"],
          question: "What are the different editions of Java?",
          hints: [
            "SE, EE, ME"
          ],
          answer: "Java SE, Java EE, and Java ME.",
          explanation: "Java SE is core, EE is enterprise, and ME is for embedded systems.",
          output: ""
        },
        {
          id: "ji_iq8",
          title: "Java and Multithreading",
          difficulty: "medium",
          askedBy: ["Flipkart", "Swiggy"],
          tags: ["multithreading"],
          question: "Why is Java well-suited for multithreaded applications?",
          hints: [
            "Thread class",
            "Concurrency API"
          ],
          answer: "Java provides built-in multithreading support.",
          explanation: "Java has Thread, Runnable, and high-level concurrency APIs.",
          output: ""
        },
        {
          id: "ji_iq9",
          title: "Java Performance",
          difficulty: "medium",
          askedBy: ["Paytm", "Razorpay"],
          tags: ["performance"],
          question: "How does Java achieve high performance despite being interpreted?",
          hints: [
            "JIT compiler"
          ],
          answer: "Java uses JIT compilation to improve performance.",
          explanation: "Frequently executed bytecode is compiled into native machine code at runtime.",
          output: ""
        },
        {
          id: "ji_iq10",
          title: "Java Use Cases",
          difficulty: "easy",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["use-cases"],
          question: "Where is Java commonly used in real-world applications?",
          hints: [
            "Enterprise",
            "Android"
          ],
          answer: "Java is widely used in enterprise systems, Android apps, and backend services.",
          explanation: "Its scalability and robustness make it ideal for large systems.",
          output: ""
        }
      ]
    }
  ]
};

export default javaIntroductionInterviewQuestions;
