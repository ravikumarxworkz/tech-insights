// src/data/topics/java/interviewQuestions/javaMethods.js

export const javaMethodsInterviewQuestions = {
  conceptGroup: "Methods",
  totalQuestions: 10,
  difficulty: { easy: 3, medium: 5, hard: 2 },
  pages: [
    {
      pageNumber: 11,
      title: "Methods",
      questions: [
        {
          id: "jm_iq1",
          title: "What is a Method?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["methods"],
          question: "What is a method in Java?",
          hints: ["Reusable logic"],
          answer: "A method is a block of code that performs a specific task.",
          explanation: "Methods improve reusability, readability, and modularity.",
          output: ""
        },
        {
          id: "jm_iq2",
          title: "Method Signature",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["signature"],
          question: "What is a method signature in Java?",
          hints: ["Name + parameters"],
          answer: "Method name and parameter list form the signature.",
          explanation: "Return type is NOT part of method signature.",
          output: ""
        },
        {
          id: "jm_iq3",
          title: "Return Type Rules",
          difficulty: "medium",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["return-type"],
          question: "Can a method return multiple values in Java?",
          hints: ["Objects"],
          answer: "No, but objects or arrays can wrap multiple values.",
          explanation: "Java does not support multiple return values directly.",
          output: ""
        },
        {
          id: "jm_iq4",
          title: "Static vs Instance Methods",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["static"],
          question: "Difference between static and instance methods?",
          hints: ["Object required"],
          answer: "Static methods belong to class; instance methods belong to objects.",
          explanation: "Static methods cannot access instance variables directly.",
          output: ""
        },
        {
          id: "jm_iq5",
          title: "Method Overloading",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["overloading"],
          question: "What is method overloading?",
          hints: ["Same name"],
          answer: "Same method name with different parameter lists.",
          explanation: "Resolved at compile time.",
          output: ""
        },
        {
          id: "jm_iq6",
          title: "Access Modifiers in Methods",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["access-modifiers"],
          question: "Can we reduce visibility while overriding a method?",
          hints: ["Rules"],
          answer: "No, visibility cannot be reduced.",
          explanation: "It can be same or more permissive.",
          output: ""
        },
        {
          id: "jm_iq7",
          title: "Final Methods",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["final"],
          question: "Can a method be final?",
          hints: ["Override"],
          answer: "Yes, final methods cannot be overridden.",
          explanation: "Used to prevent modification in subclasses.",
          output: ""
        },
        {
          id: "jm_iq8",
          title: "Private Methods",
          difficulty: "hard",
          askedBy: ["Oracle India"],
          tags: ["private"],
          question: "Can private methods be overridden?",
          hints: ["Inheritance"],
          answer: "No, private methods are not inherited.",
          explanation: "They are bound at compile time.",
          output: ""
        },
        {
          id: "jm_iq9",
          title: "Recursive Methods",
          difficulty: "medium",
          askedBy: ["IBM India"],
          tags: ["recursion"],
          question: "What is a recursive method?",
          hints: ["Calls itself"],
          answer: "A method that calls itself.",
          explanation: "Must have a base condition to avoid stack overflow.",
          output: ""
        },
        {
          id: "jm_iq10",
          title: "Method vs Function",
          difficulty: "hard",
          askedBy: ["Google India"],
          tags: ["methods"],
          question: "Difference between method and function?",
          hints: ["OOP"],
          answer: "Methods belong to a class; functions are standalone.",
          explanation: "Java supports only methods.",
          output: ""
        }
      ]
    }
  ]
};

export default javaMethodsInterviewQuestions;
