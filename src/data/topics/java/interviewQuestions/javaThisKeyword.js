// src/data/topics/java/interviewQuestions/javaThisKeyword.js

export const javaThisKeywordInterviewQuestions = {
  conceptGroup: "this Keyword",
  totalQuestions: 10,
  difficulty: { easy: 3, medium: 5, hard: 2 },
  pages: [
    {
      pageNumber: 12,
      title: "this Keyword",
      questions: [
        {
          id: "jtk_iq1",
          title: "Purpose of this",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["this"],
          question: "What is the purpose of this keyword?",
          hints: ["Current object"],
          answer: "`this` refers to the current object.",
          explanation: "Used to differentiate instance variables from local variables.",
          output: ""
        },
        {
          id: "jtk_iq2",
          title: "this with Variables",
          difficulty: "easy",
          askedBy: ["Wipro"],
          tags: ["shadowing"],
          question: "Why is this used with instance variables?",
          hints: ["Same name"],
          answer: "To resolve variable shadowing.",
          explanation: "Local variables hide instance variables.",
          output: ""
        },
        {
          id: "jtk_iq3",
          title: "this() Constructor Call",
          difficulty: "medium",
          askedBy: ["Capgemini"],
          tags: ["constructor"],
          question: "What is this() in Java?",
          hints: ["Constructor chaining"],
          answer: "Calls another constructor of the same class.",
          explanation: "Must be first statement in constructor.",
          output: ""
        },
        {
          id: "jtk_iq4",
          title: "this vs super",
          difficulty: "medium",
          askedBy: ["Infosys"],
          tags: ["inheritance"],
          question: "Difference between this and super?",
          hints: ["Current vs parent"],
          answer: "`this` refers to current object, `super` to parent.",
          explanation: "Used in inheritance.",
          output: ""
        },
        {
          id: "jtk_iq5",
          title: "this in Method Call",
          difficulty: "medium",
          askedBy: ["Zoho"],
          tags: ["methods"],
          question: "Can this be used to call a method?",
          hints: ["Optional"],
          answer: "Yes, implicitly or explicitly.",
          explanation: "Compiler adds it automatically.",
          output: ""
        },
        {
          id: "jtk_iq6",
          title: "this as Argument",
          difficulty: "medium",
          askedBy: ["Freshworks"],
          tags: ["argument"],
          question: "Can this be passed as a method argument?",
          hints: ["Current object"],
          answer: "Yes.",
          explanation: "Useful in callbacks and chaining.",
          output: ""
        },
        {
          id: "jtk_iq7",
          title: "Static Context",
          difficulty: "medium",
          askedBy: ["Mindtree"],
          tags: ["static"],
          question: "Can this be used in static methods?",
          hints: ["No object"],
          answer: "No.",
          explanation: "Static methods do not belong to objects.",
          output: ""
        },
        {
          id: "jtk_iq8",
          title: "Return this",
          difficulty: "hard",
          askedBy: ["IBM"],
          tags: ["fluent-api"],
          question: "Why return this from a method?",
          hints: ["Method chaining"],
          answer: "To enable method chaining.",
          explanation: "Common in builder patterns.",
          output: ""
        },
        {
          id: "jtk_iq9",
          title: "this and Memory",
          difficulty: "hard",
          askedBy: ["Oracle"],
          tags: ["memory"],
          question: "Does this consume extra memory?",
          hints: ["Reference"],
          answer: "No.",
          explanation: "`this` is just a reference.",
          output: ""
        },
        {
          id: "jtk_iq10",
          title: "Best Practices",
          difficulty: "medium",
          askedBy: ["Amazon India"],
          tags: ["best-practices"],
          question: "When should you avoid using this?",
          hints: ["Readability"],
          answer: "When no ambiguity exists.",
          explanation: "Avoid unnecessary verbosity.",
          output: ""
        }
      ]
    }
  ]
};

export default javaThisKeywordInterviewQuestions;
