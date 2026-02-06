// src/data/topics/java/interviewQuestions/javaVariablesConstants.js

export const javaVariablesConstantsInterviewQuestions = {
  conceptGroup: "Variables & Constants",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 7,
      title: "Variables & Constants",
      questions: [
        {
          id: "jvc_iq1",
          title: "What Is a Variable?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["variables", "basics"],
          question: "What is a variable in Java?",
          hints: [
            "Memory location",
            "Stores data"
          ],
          answer: "A variable is a named memory location used to store data.",
          explanation: "Variables allow programs to store, modify, and retrieve data during execution.",
          output: ""
        },
        {
          id: "jvc_iq2",
          title: "What Is a Constant?",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["constants", "final"],
          question: "What is a constant in Java?",
          hints: [
            "final keyword",
            "Immutable value"
          ],
          answer: "A constant is a variable whose value cannot be changed.",
          explanation: "Constants are declared using the `final` keyword.",
          output: ""
        },
        {
          id: "jvc_iq3",
          title: "Difference Between Variable and Constant",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["variables", "constants"],
          question: "What is the difference between a variable and a constant?",
          hints: [
            "Changeable vs fixed"
          ],
          answer: "Variable values can change; constants cannot.",
          explanation: "Constants improve safety and readability by preventing reassignment.",
          output: ""
        },
        {
          id: "jvc_iq4",
          title: "Initialization of Variables",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["initialization"],
          question: "What happens if a variable is declared but not initialized?",
          hints: [
            "Local vs instance"
          ],
          answer: "Local variables must be initialized before use.",
          explanation: "Instance and static variables get default values; local variables do not.",
          output: ""
        },
        {
          id: "jvc_iq5",
          title: "Scope of Variables",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["scope"],
          question: "What is the scope of a variable in Java?",
          hints: [
            "Block",
            "Method",
            "Class"
          ],
          answer: "Scope defines where a variable is accessible.",
          explanation: "Variables can have local, instance, or class-level scope.",
          output: ""
        },
        {
          id: "jvc_iq6",
          title: "final Variable Behavior",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["final"],
          question: "Can a final variable be initialized later?",
          hints: [
            "Constructor"
          ],
          answer: "Yes, final variables can be initialized in constructors.",
          explanation: "Once initialized, they cannot be reassigned.",
          output: ""
        },
        {
          id: "jvc_iq7",
          title: "Static Constants",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["static", "constants"],
          question: "Why are constants usually declared as static final?",
          hints: [
            "Single copy",
            "Class-level"
          ],
          answer: "static final ensures one shared, immutable value.",
          explanation: "Used for global constants like PI or configuration values.",
          output: ""
        },
        {
          id: "jvc_iq8",
          title: "Shadowing Variables",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["shadowing"],
          question: "What is variable shadowing in Java?",
          hints: [
            "Same name",
            "Different scope"
          ],
          answer: "When a local variable hides an instance variable.",
          explanation: "Use `this` keyword to refer to the instance variable.",
          output: ""
        },
        {
          id: "jvc_iq9",
          title: "Constants vs Enums",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["enum", "constants"],
          question: "Why are enums preferred over constants?",
          hints: [
            "Type safety"
          ],
          answer: "Enums provide type safety and better readability.",
          explanation: "Enums prevent invalid values and support methods.",
          output: ""
        },
        {
          id: "jvc_iq10",
          title: "Memory Allocation of Variables",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["memory"],
          question: "Where are different types of variables stored in memory?",
          hints: [
            "Heap",
            "Stack",
            "Method area"
          ],
          answer: "Local variables: Stack, Instance variables: Heap, Static variables: Method area.",
          explanation: "Memory allocation depends on variable type and scope.",
          output: ""
        }
      ]
    }
  ]
};

export default javaVariablesConstantsInterviewQuestions;
