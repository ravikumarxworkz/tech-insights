// src/data/topics/java/interviewQuestions/javaClassLoading.js

export const javaClassLoadingQuestions = {
  conceptGroup: "Class Loading & toString()",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 26,
      title: "Class Loading & toString()",
      questions: [
        {
          id: "jcl_iq1",
          title: "What Is Class Loading?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["class-loading", "basics"],
          question: "What is class loading in Java?",
          hints: [
            "Load class into JVM"
          ],
          answer: "Class loading is the process of loading class files into JVM memory.",
          explanation: "It is handled by the ClassLoader subsystem at runtime.",
          output: ""
        },
        {
          id: "jcl_iq2",
          title: "Phases of Class Loading",
          difficulty: "medium",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["class-loader", "phases"],
          question: "What are the phases involved in class loading?",
          hints: [
            "Load",
            "Link",
            "Initialize"
          ],
          answer: "Loading, Linking, and Initialization.",
          explanation: "Linking includes verification, preparation, and resolution.",
          output: ""
        },
        {
          id: "jcl_iq3",
          title: "Types of ClassLoaders",
          difficulty: "medium",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["classloader", "types"],
          question: "What are the different types of ClassLoaders in Java?",
          hints: [
            "Bootstrap",
            "Platform",
            "Application"
          ],
          answer: "Bootstrap, Platform (Extension), and Application ClassLoader.",
          explanation: "They follow a parent-first delegation model.",
          output: ""
        },
        {
          id: "jcl_iq4",
          title: "Parent Delegation Model",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["delegation-model"],
          question: "What is the parent delegation model in Java?",
          hints: [
            "Security",
            "Class uniqueness"
          ],
          answer: "Class loading request is delegated to parent first.",
          explanation: "This prevents core Java classes from being overridden.",
          output: ""
        },
        {
          id: "jcl_iq5",
          title: "When Is a Class Loaded?",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["runtime"],
          question: "When does JVM load a class?",
          hints: [
            "Object creation",
            "Static members"
          ],
          answer: "When an object is created or a static member is accessed.",
          explanation: "Classes are loaded lazily, not at compile time.",
          output: ""
        },
        {
          id: "jcl_iq6",
          title: "Class.forName()",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["reflection"],
          question: "What is the use of Class.forName()?",
          hints: [
            "Dynamic loading"
          ],
          answer: "It loads a class dynamically at runtime.",
          explanation: "Commonly used in JDBC to load database drivers.",
          output: ""
        },
        {
          id: "jcl_iq7",
          title: "Static Block Execution",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["static-block"],
          question: "When does a static block execute?",
          hints: [
            "Class loading time"
          ],
          answer: "Static blocks execute when the class is loaded.",
          explanation: "They run only once during the lifecycle of a class.",
          output: ""
        },
        {
          id: "jcl_iq8",
          title: "Default toString() Method",
          difficulty: "easy",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["toString"],
          question: "What does the default toString() method return?",
          hints: [
            "Class name",
            "Hashcode"
          ],
          answer: "It returns className@hashcode.",
          explanation: "Provided by the Object class.",
          output: ""
        },
        {
          id: "jcl_iq9",
          title: "Why Override toString()?",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["toString", "override"],
          question: "Why should we override the toString() method?",
          hints: [
            "Readable output"
          ],
          answer: "To provide meaningful object representation.",
          explanation: "Useful for logging, debugging, and printing objects.",
          output: ""
        },
        {
          id: "jcl_iq10",
          title: "ClassNotFoundException vs NoClassDefFoundError",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["exceptions", "classloading"],
          question: "Difference between ClassNotFoundException and NoClassDefFoundError?",
          hints: [
            "Checked vs Error"
          ],
          answer: "ClassNotFoundException is checked; NoClassDefFoundError is an Error.",
          explanation: "One occurs during dynamic loading, the other at runtime when class is missing.",
          output: ""
        }
      ]
    }
  ]
};

export default javaClassLoadingQuestions;
