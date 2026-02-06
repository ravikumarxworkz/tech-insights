// src/data/topics/java/interviewQuestions/javaAccessModifiers.js

export const javaAccessModifiersInterviewQuestions = {
  conceptGroup: "Access Modifiers",
  totalQuestions: 10,
  difficulty: {
    easy: 10,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 11,
      questions: [
        {
          id: "jb_am110",
          title: "Access Modifiers",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["access-modifiers", "basics"],
          question: "What are access modifiers in Java?",
          hints: ["Visibility"],
          answer: "Keywords that control access to classes and members.",
          explanation: "They enforce encapsulation.",
          output: ""
        },
        {
          id: "jb_am111",
          title: "Default Access Level",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["default", "access"],
          question: "What is the default access level in Java?",
          hints: ["Package-private"],
          answer: "Package-private access.",
          explanation: "Accessible only within the same package.",
          output: ""
        },
        {
          id: "jb_am112",
          title: "Public Modifier",
          difficulty: "easy",
          askedBy: ["Infosys", "IBM"],
          tags: ["public", "access"],
          question: "How does the public access modifier work?",
          hints: ["Everywhere"],
          answer: "Accessible from anywhere.",
          explanation: "No restrictions on access.",
          output: ""
        },
        {
          id: "jb_am113",
          title: "Protected Modifier",
          difficulty: "easy",
          askedBy: ["TCS", "Oracle"],
          tags: ["protected", "inheritance"],
          question: "How does the protected access modifier work?",
          hints: ["Subclass access"],
          answer: "Accessible within package and subclasses.",
          explanation: "Supports inheritance across packages.",
          output: ""
        },
        {
          id: "jb_am114",
          title: "Private Modifier",
          difficulty: "easy",
          askedBy: ["Capgemini", "Accenture"],
          tags: ["private", "access"],
          question: "How does the private access modifier work?",
          hints: ["Class-only"],
          answer: "Accessible only within the same class.",
          explanation: "Strongest encapsulation.",
          output: ""
        },
        {
          id: "jb_am115",
          title: "Local Variables",
          difficulty: "easy",
          askedBy: ["Wipro", "Infosys"],
          tags: ["local-variable", "scope"],
          question: "Can access modifiers be applied to local variables?",
          hints: ["No"],
          answer: "No, local variables cannot have access modifiers.",
          explanation: "They are accessible only within the block.",
          output: ""
        },
        {
          id: "jb_am116",
          title: "Package-Private Access",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["package-private", "access"],
          question: "What is the significance of package-private access level?",
          hints: ["Default access"],
          answer: "Accessible only within the same package.",
          explanation: "Used when no modifier is specified.",
          output: ""
        },
        {
          id: "jb_am117",
          title: "Inheritance Impact",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["inheritance", "access"],
          question: "How do access modifiers affect inheritance?",
          hints: ["Visibility"],
          answer: "They control which members are inherited.",
          explanation: "Private members are not inherited.",
          output: ""
        },
        {
          id: "jb_am118",
          title: "Private Method Access",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["private", "methods"],
          question: "Can a private method be accessed from outside the class?",
          hints: ["No"],
          answer: "No, private methods are class-restricted.",
          explanation: "They are hidden from subclasses.",
          output: ""
        },
        {
          id: "jb_am119",
          title: "Protected vs Public",
          difficulty: "easy",
          askedBy: ["TCS", "Capgemini"],
          tags: ["protected", "public"],
          question: "How does the protected access modifier differ from public?",
          hints: ["Restricted access"],
          answer: "Protected is limited to package and subclasses.",
          explanation: "Public has no access restrictions.",
          output: ""
        }
      ]
    }
  ]
};

export default javaAccessModifiersInterviewQuestions;
