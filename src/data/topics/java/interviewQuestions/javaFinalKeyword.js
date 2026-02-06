// src/data/topics/java/interviewQuestions/javaFinalKeyword.js

export const javaFinalKeywordQuestions = {
  conceptGroup: "final Keyword",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 23,
      title: "final Keyword",
      questions: [
        {
          id: "jfk_iq1",
          title: "Purpose of final Keyword",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["final", "basics"],
          question: "What is the purpose of the final keyword in Java?",
          hints: [
            "Restriction",
            "Immutability"
          ],
          answer: "The final keyword is used to restrict modification.",
          explanation: "It can be applied to variables, methods, and classes to prevent change, overriding, or inheritance.",
          output: ""
        },
        {
          id: "jfk_iq2",
          title: "final Variable",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["final", "variables"],
          question: "What happens when a variable is declared as final?",
          hints: [
            "Single assignment"
          ],
          answer: "A final variable can be assigned only once.",
          explanation: "After initialization, its value cannot be changed.",
          output: ""
        },
        {
          id: "jfk_iq3",
          title: "Blank Final Variable",
          difficulty: "medium",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["final", "constructors"],
          question: "What is a blank final variable?",
          hints: [
            "Not initialized at declaration"
          ],
          answer: "A final variable that is not initialized during declaration.",
          explanation: "It must be initialized inside the constructor.",
          output: ""
        },
        {
          id: "jfk_iq4",
          title: "final Method",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["final", "methods"],
          question: "What is a final method in Java?",
          hints: [
            "Override restriction"
          ],
          answer: "A method declared final cannot be overridden by subclasses.",
          explanation: "Used to prevent modification of critical behavior.",
          output: ""
        },
        {
          id: "jfk_iq5",
          title: "final Class",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["final", "class"],
          question: "What is a final class?",
          hints: [
            "Inheritance restriction"
          ],
          answer: "A class declared final cannot be inherited.",
          explanation: "Example: String class is final.",
          output: ""
        },
        {
          id: "jfk_iq6",
          title: "final vs finally vs finalize",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["final", "finally", "finalize"],
          question: "Differentiate between final, finally, and finalize.",
          hints: [
            "Keyword",
            "Block",
            "Method"
          ],
          answer: "final is a keyword, finally is a block, finalize is a method.",
          explanation: "They serve completely different purposes in Java.",
          output: ""
        },
        {
          id: "jfk_iq7",
          title: "final and Immutability",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["immutability"],
          question: "Does final make an object immutable?",
          hints: [
            "Reference vs object"
          ],
          answer: "No, final makes the reference immutable, not the object.",
          explanation: "Object state can still change unless the class is designed immutable.",
          output: ""
        },
        {
          id: "jfk_iq8",
          title: "final in Method Parameters",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["parameters"],
          question: "What is the use of final keyword with method parameters?",
          hints: [
            "No reassignment"
          ],
          answer: "It prevents reassignment of parameter values inside the method.",
          explanation: "Useful for readability and avoiding accidental reassignment.",
          output: ""
        },
        {
          id: "jfk_iq9",
          title: "final and Performance",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["performance"],
          question: "Does final keyword improve performance?",
          hints: [
            "Compiler optimization"
          ],
          answer: "In some cases, yes.",
          explanation: "The compiler may optimize calls to final methods as they cannot be overridden.",
          output: ""
        },
        {
          id: "jfk_iq10",
          title: "When to Use final",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["best-practices"],
          question: "When should you use the final keyword?",
          hints: [
            "Design safety"
          ],
          answer: "When you want to prevent modification or extension.",
          explanation: "Using final improves code safety, clarity, and maintainability.",
          output: ""
        }
      ]
    }
  ]
};

export default javaFinalKeywordQuestions;
