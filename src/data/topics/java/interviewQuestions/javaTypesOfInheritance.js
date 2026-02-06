// src/data/topics/java/interviewQuestions/javaTypesOfInheritance.js

export const javaTypesOfInheritanceQuestions = {
  conceptGroup: "Types of Inheritance",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 15,
      title: "Types of Inheritance",
      questions: [
        {
          id: "jti_iq1",
          title: "Inheritance Types in Java",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["inheritance", "basics"],
          question: "What are the different types of inheritance supported by Java?",
          hints: [
            "Class-based inheritance",
            "Interface-based inheritance"
          ],
          answer: "Single, Multilevel, and Hierarchical inheritance are supported using classes. Multiple inheritance is supported using interfaces.",
          explanation: "Java avoids multiple inheritance with classes to prevent ambiguity, but allows it via interfaces.",
          output: ""
        },
        {
          id: "jti_iq2",
          title: "Single Inheritance",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["single-inheritance"],
          question: "What is single inheritance in Java?",
          hints: [
            "One parent, one child"
          ],
          answer: "Single inheritance is when a class inherits from only one parent class.",
          explanation: "Example: class Dog extends Animal.",
          output: ""
        },
        {
          id: "jti_iq3",
          title: "Multilevel Inheritance",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["multilevel-inheritance"],
          question: "Explain multilevel inheritance with an example.",
          hints: [
            "Chain of inheritance"
          ],
          answer: "In multilevel inheritance, a class inherits from a child class.",
          explanation: "Example: Animal → Dog → Puppy.",
          output: ""
        },
        {
          id: "jti_iq4",
          title: "Hierarchical Inheritance",
          difficulty: "easy",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["hierarchical-inheritance"],
          question: "What is hierarchical inheritance?",
          hints: [
            "One parent, many children"
          ],
          answer: "Multiple child classes inherit from a single parent class.",
          explanation: "Example: Animal → Dog, Cat, Cow.",
          output: ""
        },
        {
          id: "jti_iq5",
          title: "Why No Multiple Inheritance with Classes?",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["multiple-inheritance"],
          question: "Why does Java not support multiple inheritance using classes?",
          hints: [
            "Diamond problem",
            "Ambiguity"
          ],
          answer: "To avoid ambiguity caused by method conflicts.",
          explanation: "If two parent classes have the same method, JVM cannot decide which one to inherit.",
          output: ""
        },
        {
          id: "jti_iq6",
          title: "Multiple Inheritance Using Interfaces",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["interfaces"],
          question: "How does Java support multiple inheritance using interfaces?",
          hints: [
            "implements keyword"
          ],
          answer: "A class can implement multiple interfaces.",
          explanation: "Interfaces only declare methods (or default methods), avoiding ambiguity.",
          output: ""
        },
        {
          id: "jti_iq7",
          title: "Diamond Problem in Java",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["diamond-problem"],
          question: "What is the Diamond Problem and how does Java handle it?",
          hints: [
            "Default methods"
          ],
          answer: "Diamond problem occurs when two interfaces provide the same default method.",
          explanation: "Java forces the implementing class to override the method explicitly.",
          output: ""
        },
        {
          id: "jti_iq8",
          title: "Constructor Inheritance",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["constructors", "inheritance"],
          question: "Are constructors inherited in Java?",
          hints: [
            "super()"
          ],
          answer: "No, constructors are not inherited.",
          explanation: "However, parent constructors are invoked using super().",
          output: ""
        },
        {
          id: "jti_iq9",
          title: "Inheritance and Access Modifiers",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["access-modifiers"],
          question: "How do access modifiers affect inheritance?",
          hints: [
            "private, protected"
          ],
          answer: "private members are not inherited; protected members are inherited.",
          explanation: "public and protected members are accessible in child classes.",
          output: ""
        },
        {
          id: "jti_iq10",
          title: "When Not to Use Inheritance",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["best-practices"],
          question: "When should inheritance be avoided?",
          hints: [
            "HAS-A vs IS-A"
          ],
          answer: "When relationship is HAS-A instead of IS-A.",
          explanation: "Composition is preferred over inheritance for better flexibility.",
          output: ""
        }
      ]
    }
  ]
};

export default javaTypesOfInheritanceQuestions;
