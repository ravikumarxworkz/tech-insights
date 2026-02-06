// src/data/topics/java/interviewQuestions/javaAbstraction.js

export const javaAbstractionQuestions = {
    conceptGroup: "Abstraction",
    totalQuestions: 10,
  difficulty: { easy: 6, medium: 2, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "abs_55",
          title: "What is Abstraction?",
          difficulty: "easy",
          askedBy: ["TCS", "Cognizant"],
          tags: ["abstraction", "oops"],
          question: "What is Abstraction in Object Oriented programming?",
          hints: ["Hiding details"],
          answer: "Abstraction is the process of hiding implementation details and showing only the essential features to the user.",
          explanation: "It helps in reducing programming complexity and effort by focusing on 'what' an object does instead of 'how' it does it.",
          output: ""
        },
        {
          id: "abs_56",
          title: "Abstraction vs Encapsulation",
          difficulty: "easy",
          askedBy: ["Infosys", "Wipro"],
          tags: ["oops", "comparison"],
          question: "How is Abstraction different from Encapsulation?",
          hints: ["Design level vs Implementation level"],
          answer: "Abstraction hides complexity at the design level. Encapsulation hides data (internal state) using access modifiers like private.",
          explanation: "Abstraction says 'I don't care how the engine works'. Encapsulation says 'You cannot touch the internal wires of the engine directly'.",
          output: ""
        },
        
        {
          id: "abs_57",
          title: "Abstract Class Basics",
          difficulty: "easy",
          askedBy: ["HCL", "LTIMindtree"],
          tags: ["abstract-class"],
          question: "What is an abstract class in Java?",
          hints: ["Incomplete class"],
          answer: "A class declared with the 'abstract' keyword that cannot be instantiated. it can contain both abstract methods (no body) and concrete methods (with body).",
          explanation: "It serves as a template for other classes to extend and implement its abstract methods.",
          output: ""
        },
        {
          id: "abs_59",
          title: "Abstract and Final together",
          difficulty: "medium",
          askedBy: ["Accenture", "Cisco"],
          tags: ["modifiers", "syntax"],
          question: "Is it allowed to mark a method abstract as well as final?",
          hints: ["Override rules"],
          answer: "No. Abstract methods MUST be overridden, while Final methods CANNOT be overridden. This is a compile-time error.",
          explanation: "These two keywords are logically opposite in Java.",
          output: "Compile Error: illegal combination of modifiers"
        },
        {
          id: "abs_h1",
          title: "Constructor in Abstract Class",
          difficulty: "hard",
          askedBy: ["Goldman Sachs", "Morgan Stanley"],
          tags: ["constructor", "abstract-class"],
          question: "Can an abstract class have a constructor? If yes, why, since we can't instantiate it?",
          hints: ["super keyword"],
          answer: "Yes. It is used to initialize the instance variables of the abstract class when a subclass object is created via super().",
          explanation: "Even though you can't say 'new AbstractClass()', the child class still needs to call the parent's constructor.",
          output: ""
        }
      ]
    }
  ]
};