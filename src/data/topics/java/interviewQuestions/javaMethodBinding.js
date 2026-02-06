// src/data/topics/java/interviewQuestions/javaMethodBinding.js

export const javaMethodBindingInterviewQuestions = {
  conceptGroup: "Method Binding",
  totalQuestions: 10,
  difficulty: {
    easy: 10,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 8,
      questions: [
        {
          id: "jb_mb80",
          title: "Method Binding",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["binding", "methods"],
          question: "What is method binding in Java?",
          hints: ["Method call resolution"],
          answer: "Method binding is linking a method call to its method body.",
          explanation: "It can happen at compile-time or runtime.",
          output: ""
        },
        {
          id: "jb_mb81",
          title: "Early Binding",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["static-binding", "compile-time"],
          question: "What is early binding (static binding)?",
          hints: ["Compile time"],
          answer: "Binding resolved at compile time.",
          explanation: "Used for static, private, and final methods.",
          output: ""
        },
        {
          id: "jb_mb82",
          title: "Late Binding",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["dynamic-binding", "runtime"],
          question: "What is late binding (dynamic binding)?",
          hints: ["Runtime resolution"],
          answer: "Binding resolved at runtime based on object type.",
          explanation: "Used in method overriding.",
          output: ""
        },
        {
          id: "jb_mb83",
          title: "Overriding and Binding",
          difficulty: "easy",
          askedBy: ["TCS", "IBM"],
          tags: ["overriding", "binding"],
          question: "How does method overriding affect binding?",
          hints: ["Runtime polymorphism"],
          answer: "Overridden methods use dynamic binding.",
          explanation: "Resolved based on object reference.",
          output: ""
        },
        {
          id: "jb_mb84",
          title: "super and Binding",
          difficulty: "easy",
          askedBy: ["Oracle", "Infosys"],
          tags: ["super", "binding"],
          question: "What role does the super keyword play in method binding?",
          hints: ["Parent method"],
          answer: "super invokes parent class method explicitly.",
          explanation: "It bypasses overridden methods.",
          output: ""
        },
        {
          id: "jb_mb85",
          title: "Overloading vs Overriding",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["overloading", "overriding"],
          question: "What is the difference between method overloading and method overriding?",
          hints: ["Compile vs Runtime"],
          answer: "Overloading is compile-time; overriding is runtime.",
          explanation: "Overloading depends on parameters, overriding on inheritance.",
          output: ""
        },
        {
          id: "jb_mb86",
          title: "Method Resolution Ambiguity",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["resolution", "compiler"],
          question: "How does Java handle method resolution in case of ambiguity?",
          hints: ["Compiler rules"],
          answer: "Compiler applies most specific method rule.",
          explanation: "If unresolved, compilation error occurs.",
          output: ""
        },
        {
          id: "jb_mb87",
          title: "Final Methods",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["final", "binding"],
          question: "What is the purpose of final methods in method binding?",
          hints: ["Prevent override"],
          answer: "Final methods cannot be overridden.",
          explanation: "They use static binding.",
          output: ""
        },
        {
          id: "jb_mb88",
          title: "Private Methods Binding",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["private", "binding"],
          question: "How are private methods bound in Java?",
          hints: ["Compile-time"],
          answer: "Private methods use static binding.",
          explanation: "They are not inherited.",
          output: ""
        },
        {
          id: "jb_mb89",
          title: "Constructor Binding",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro"],
          tags: ["constructor", "binding"],
          question: "Can constructors be dynamically bound?",
          hints: ["No polymorphism"],
          answer: "No, constructors are statically bound.",
          explanation: "They cannot be overridden.",
          output: ""
        }
      ]
    }
  ]
};

export default javaMethodBindingInterviewQuestions;
