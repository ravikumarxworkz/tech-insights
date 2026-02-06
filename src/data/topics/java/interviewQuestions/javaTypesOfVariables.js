// src/data/topics/java/interviewQuestions/javaTypesOfVariables.js

export const javaTypesOfVariablesInterviewQuestions = {
  conceptGroup: "Types of Variables",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 8,
      title: "Types of Variables in Java",
      questions: [
        {
          id: "jtv_iq1",
          title: "Types of Variables in Java",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["variables", "basics"],
          question: "What are the different types of variables in Java?",
          hints: [
            "Based on scope",
            "Local, Instance, Static"
          ],
          answer: "Local variables, Instance variables, and Static variables.",
          explanation: "Variables are classified based on scope and lifetime.",
          output: ""
        },
        {
          id: "jtv_iq2",
          title: "Local Variables",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["local-variables"],
          question: "What is a local variable in Java?",
          hints: [
            "Method or block level"
          ],
          answer: "A local variable is declared inside a method or block.",
          explanation: "Local variables must be initialized before use and are stored in stack memory.",
          output: ""
        },
        {
          id: "jtv_iq3",
          title: "Instance Variables",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["instance-variables"],
          question: "What is an instance variable?",
          hints: [
            "Object-level variable"
          ],
          answer: "Instance variables belong to an object.",
          explanation: "Each object has its own copy and they are stored in heap memory.",
          output: ""
        },
        {
          id: "jtv_iq4",
          title: "Static Variables",
          difficulty: "easy",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["static-variables"],
          question: "What is a static variable?",
          hints: [
            "Class-level variable"
          ],
          answer: "A static variable belongs to the class, not to instances.",
          explanation: "Only one copy exists and it is shared among all objects.",
          output: ""
        },
        {
          id: "jtv_iq5",
          title: "Lifetime of Variables",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["lifetime"],
          question: "Explain the lifetime of local, instance, and static variables.",
          hints: [
            "Method execution",
            "Object lifecycle",
            "Class loading"
          ],
          answer: "Local variables live during method execution; instance variables live as long as the object exists; static variables live until the class is unloaded.",
          explanation: "Lifetime depends on scope and memory allocation.",
          output: ""
        },
        {
          id: "jtv_iq6",
          title: "Default Values",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["default-values"],
          question: "Do all types of variables get default values?",
          hints: [
            "Local vs instance/static"
          ],
          answer: "Only instance and static variables get default values.",
          explanation: "Local variables must be initialized explicitly.",
          output: ""
        },
        {
          id: "jtv_iq7",
          title: "Static vs Instance Variables",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["static", "instance"],
          question: "Differentiate between static and instance variables.",
          hints: [
            "Memory",
            "Sharing"
          ],
          answer: "Static variables are shared; instance variables are object-specific.",
          explanation: "Static variables exist once per class; instance variables exist per object.",
          output: ""
        },
        {
          id: "jtv_iq8",
          title: "Variable Shadowing",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["shadowing"],
          question: "What is variable shadowing and how can it be resolved?",
          hints: [
            "Same variable name",
            "this keyword"
          ],
          answer: "Variable shadowing occurs when a local variable hides an instance variable.",
          explanation: "Use `this.variableName` to access the instance variable.",
          output: ""
        },
        {
          id: "jtv_iq9",
          title: "Static Variables and Multithreading",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["static", "multithreading"],
          question: "What issues can static variables cause in multithreaded applications?",
          hints: [
            "Shared state",
            "Thread safety"
          ],
          answer: "Static variables can cause data inconsistency.",
          explanation: "Since static variables are shared, synchronization is needed to avoid race conditions.",
          output: ""
        },
        {
          id: "jtv_iq10",
          title: "Best Practices",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["best-practices"],
          question: "What are best practices for using variables in Java?",
          hints: [
            "Limit scope",
            "Avoid static misuse"
          ],
          answer: "Use minimal scope, initialize properly, and avoid unnecessary static variables.",
          explanation: "Good practices improve readability, maintainability, and thread safety.",
          output: ""
        }
      ]
    }
  ]
};

export default javaTypesOfVariablesInterviewQuestions;
