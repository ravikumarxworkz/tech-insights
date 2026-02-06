// src/data/topics/java/interviewQuestions/javaTypeCasting.js

export const javaTypeCastingInterviewQuestions = {
  conceptGroup: "Type Casting",
  totalQuestions: 10,
  difficulty: {
    easy: 10,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 7,
      questions: [
        {
          id: "jb_tc70",
          title: "Type Casting",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["casting", "basics"],
          question: "What is type casting in Java?",
          hints: ["Data conversion"],
          answer: "Type casting is converting one data type into another.",
          explanation: "It is commonly used between compatible data types.",
          output: ""
        },
        {
          id: "jb_tc71",
          title: "Implicit vs Explicit Casting",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["casting", "conversion"],
          question: "What is the difference between implicit and explicit type casting?",
          hints: ["Automatic vs Manual"],
          answer: "Implicit casting is automatic; explicit casting is done manually.",
          explanation: "Explicit casting may cause data loss.",
          output: ""
        },
        {
          id: "jb_tc72",
          title: "Double to Int Casting",
          difficulty: "easy",
          askedBy: ["Accenture", "Infosys"],
          tags: ["casting", "primitive"],
          question: "How do you cast a double to an int in Java?",
          hints: ["Type casting syntax"],
          answer: "By explicitly casting: int x = (int) doubleValue;",
          explanation: "Decimal part is truncated.",
          output: ""
        },
        {
          id: "jb_tc73",
          title: "Autoboxing and Unboxing",
          difficulty: "easy",
          askedBy: ["TCS", "Oracle"],
          tags: ["wrapper", "boxing"],
          question: "What is autoboxing and unboxing?",
          hints: ["Primitive and Wrapper"],
          answer: "Autoboxing converts primitive to wrapper; unboxing converts wrapper to primitive.",
          explanation: "Handled automatically by the compiler.",
          output: ""
        },
        {
          id: "jb_tc74",
          title: "Object Type Casting",
          difficulty: "easy",
          askedBy: ["IBM", "Infosys"],
          tags: ["casting", "objects"],
          question: "How does type casting work with objects?",
          hints: ["Upcasting", "Downcasting"],
          answer: "Objects can be cast within inheritance hierarchy.",
          explanation: "Downcasting requires explicit casting.",
          output: ""
        },
        {
          id: "jb_tc75",
          title: "instanceof Operator",
          difficulty: "easy",
          askedBy: ["Wipro", "Accenture"],
          tags: ["instanceof", "casting"],
          question: "What is the purpose of the instanceof operator?",
          hints: ["Type checking"],
          answer: "It checks whether an object belongs to a specific class.",
          explanation: "Prevents ClassCastException.",
          output: ""
        },
        {
          id: "jb_tc76",
          title: "Casting to Subclass",
          difficulty: "easy",
          askedBy: ["Capgemini", "HCL"],
          tags: ["downcasting", "objects"],
          question: "How do you cast an object to a subclass type?",
          hints: ["Explicit casting"],
          answer: "By explicit casting after checking with instanceof.",
          explanation: "Ensures runtime safety.",
          output: ""
        },
        {
          id: "jb_tc77",
          title: "ClassCastException",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["exception", "casting"],
          question: "What happens during a ClassCastException?",
          hints: ["Invalid cast"],
          answer: "It occurs when casting an object to an incompatible type.",
          explanation: "Detected at runtime.",
          output: ""
        },
        {
          id: "jb_tc78",
          title: "Unrelated Class Casting",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["casting", "inheritance"],
          question: "Can you cast between unrelated classes in Java?",
          hints: ["No relationship"],
          answer: "No, casting is allowed only within inheritance hierarchy.",
          explanation: "Otherwise ClassCastException occurs.",
          output: ""
        },
        {
          id: "jb_tc79",
          title: "Object Class Significance",
          difficulty: "easy",
          askedBy: ["IBM", "Accenture"],
          tags: ["object-class", "casting"],
          question: "What is the significance of the Object class in type casting?",
          hints: ["Root class"],
          answer: "All classes inherit from Object.",
          explanation: "It enables upcasting of any object.",
          output: ""
        }
      ]
    }
  ]
};

export default javaTypeCastingInterviewQuestions;
