// src/data/topics/java/interviewQuestions/javaConstructors.js

export const javaConstructorsInterviewQuestions = {
  conceptGroup: "Constructors",
  totalQuestions: 10,
  difficulty: {
    easy: 10,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 6,
      questions: [
        {
          id: "jb_con60",
          title: "Constructor in Java",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["constructor", "basics"],
          question: "What is a constructor in Java?",
          hints: ["Object initialization"],
          answer: "A constructor is a special method used to initialize objects.",
          explanation: "It has the same name as the class and is called automatically when an object is created.",
          output: ""
        },
        {
          id: "jb_con61",
          title: "Default Constructor",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["constructor", "default"],
          question: "What is a default constructor?",
          hints: ["No-argument constructor"],
          answer: "A default constructor is a constructor with no parameters.",
          explanation: "If no constructor is defined, Java provides a default constructor implicitly.",
          output: ""
        },
        {
          id: "jb_con62",
          title: "Parameterized Constructor",
          difficulty: "easy",
          askedBy: ["Accenture", "Infosys"],
          tags: ["constructor", "parameters"],
          question: "What is a parameterized constructor?",
          hints: ["Arguments"],
          answer: "A constructor that accepts parameters to initialize object values.",
          explanation: "It allows passing values at the time of object creation.",
          output: ""
        },
        {
          id: "jb_con63",
          title: "this() in Constructor",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["this", "constructor"],
          question: "What is the purpose of this() in constructors?",
          hints: ["Constructor chaining"],
          answer: "this() is used to call another constructor of the same class.",
          explanation: "It must be the first statement in a constructor.",
          output: ""
        },
        {
          id: "jb_con64",
          title: "Constructor Overloading",
          difficulty: "easy",
          askedBy: ["Infosys", "Cognizant"],
          tags: ["overloading", "constructor"],
          question: "How does constructor overloading work?",
          hints: ["Multiple constructors"],
          answer: "Constructor overloading allows multiple constructors with different parameters.",
          explanation: "It provides flexibility in object creation.",
          output: ""
        },
        {
          id: "jb_con65",
          title: "super() in Constructor",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["super", "inheritance"],
          question: "What is the purpose of super() in constructors?",
          hints: ["Parent constructor"],
          answer: "super() is used to call the parent class constructor.",
          explanation: "It must be the first statement in a child constructor.",
          output: ""
        },
        {
          id: "jb_con66",
          title: "Copy Constructor",
          difficulty: "easy",
          askedBy: ["TCS", "Capgemini"],
          tags: ["constructor", "copy"],
          question: "What is a copy constructor?",
          hints: ["Object copy"],
          answer: "A constructor used to create a copy of another object.",
          explanation: "Java does not provide it by default; it must be user-defined.",
          output: ""
        },
        {
          id: "jb_con67",
          title: "Constructor Inheritance",
          difficulty: "easy",
          askedBy: ["Infosys", "Wipro"],
          tags: ["constructor", "inheritance"],
          question: "Can constructors be inherited in Java?",
          hints: ["No inheritance"],
          answer: "No, constructors are not inherited.",
          explanation: "But they can be invoked using super().",
          output: ""
        },
        {
          id: "jb_con68",
          title: "No Constructor Defined",
          difficulty: "easy",
          askedBy: ["Accenture", "HCL"],
          tags: ["constructor", "default"],
          question: "What happens if you don’t define any constructor in a class?",
          hints: ["Compiler provided"],
          answer: "Java provides a default constructor automatically.",
          explanation: "It initializes instance variables with default values.",
          output: ""
        },
        {
          id: "jb_con69",
          title: "Constructor vs Method",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["constructor", "method"],
          question: "How is a constructor different from a method?",
          hints: ["Initialization vs behavior"],
          answer: "A constructor initializes objects, while a method defines behavior.",
          explanation: "Constructors don’t have return types and are called automatically.",
          output: ""
        }
      ]
    }
  ]
};

export default javaConstructorsInterviewQuestions;
