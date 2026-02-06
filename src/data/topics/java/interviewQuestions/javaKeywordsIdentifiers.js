// src/data/topics/java/interviewQuestions/javaKeywordsIdentifiers.js

export const javaKeywordsIdentifiersInterviewQuestions = {
  conceptGroup: "Keywords & Identifiers",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 5,
      title: "Keywords & Identifiers",
      questions: [
        {
          id: "jki_iq1",
          title: "What Are Keywords?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["keywords", "basics"],
          question: "What are keywords in Java?",
          hints: [
            "Reserved words",
            "Predefined meaning"
          ],
          answer: "Keywords are reserved words in Java with predefined meaning.",
          explanation: "They cannot be used as variable, class, or method names.",
          output: ""
        },
        {
          id: "jki_iq2",
          title: "Number of Java Keywords",
          difficulty: "medium",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["keywords"],
          question: "How many keywords are there in Java?",
          hints: [
            "Around 50"
          ],
          answer: "Java has 50 reserved keywords.",
          explanation: "Some keywords like goto and const are reserved but not used.",
          output: ""
        },
        {
          id: "jki_iq3",
          title: "Identifiers in Java",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["identifiers"],
          question: "What are identifiers in Java?",
          hints: [
            "Names of entities"
          ],
          answer: "Identifiers are names given to variables, methods, classes, or packages.",
          explanation: "They help identify program elements uniquely.",
          output: ""
        },
        {
          id: "jki_iq4",
          title: "Rules for Identifiers",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["identifiers", "rules"],
          question: "What are the rules for naming identifiers in Java?",
          hints: [
            "Start with letter",
            "No keywords"
          ],
          answer: "Identifiers must start with a letter, underscore, or dollar sign.",
          explanation: "They cannot start with a digit and cannot be Java keywords.",
          output: ""
        },
        {
          id: "jki_iq5",
          title: "Using Keywords as Identifiers",
          difficulty: "easy",
          askedBy: ["Infosys", "TCS"],
          tags: ["keywords", "identifiers"],
          question: "Can we use Java keywords as identifiers?",
          hints: [
            "Reserved words"
          ],
          answer: "No, Java keywords cannot be used as identifiers.",
          explanation: "Keywords have predefined meanings in Java syntax.",
          output: ""
        },
        {
          id: "jki_iq6",
          title: "Case Sensitivity",
          difficulty: "easy",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["case-sensitive"],
          question: "Is Java case-sensitive? Explain with an example.",
          hints: [
            "Variable names"
          ],
          answer: "Yes, Java is case-sensitive.",
          explanation: "Variables `count` and `Count` are treated as different identifiers.",
          output: ""
        },
        {
          id: "jki_iq7",
          title: "Use of Underscore and Dollar",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["naming", "symbols"],
          question: "Can identifiers start with underscore (_) or dollar sign ($)?",
          hints: [
            "Allowed characters"
          ],
          answer: "Yes, identifiers can start with _ or $.",
          explanation: "Though allowed, their usage is discouraged for readability.",
          output: ""
        },
        {
          id: "jki_iq8",
          title: "Reserved Keywords",
          difficulty: "hard",
          askedBy: ["Oracle India", "SAP Labs"],
          tags: ["reserved", "keywords"],
          question: "What are reserved but unused keywords in Java?",
          hints: [
            "Future use"
          ],
          answer: "`goto` and `const` are reserved but unused.",
          explanation: "They are kept for future use but currently have no functionality.",
          output: ""
        },
        {
          id: "jki_iq9",
          title: "Identifier Naming Conventions",
          difficulty: "medium",
          askedBy: ["IBM India", "Accenture"],
          tags: ["conventions"],
          question: "What are standard naming conventions for identifiers in Java?",
          hints: [
            "camelCase",
            "PascalCase"
          ],
          answer: "Variables and methods use camelCase; classes use PascalCase.",
          explanation: "Following conventions improves readability and maintainability.",
          output: ""
        },
        {
          id: "jki_iq10",
          title: "Keywords vs Identifiers",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["keywords", "identifiers"],
          question: "Explain the difference between keywords and identifiers with examples.",
          hints: [
            "Reserved vs user-defined"
          ],
          answer: "Keywords are reserved; identifiers are user-defined names.",
          explanation: "Example: `class` is a keyword, `Student` is an identifier.",
          output: ""
        }
      ]
    }
  ]
};

export default javaKeywordsIdentifiersInterviewQuestions;
