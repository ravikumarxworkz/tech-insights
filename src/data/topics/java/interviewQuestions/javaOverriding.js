// src/data/topics/java/interviewQuestions/javaOverriding.js

export const javaOverridingQuestions = {
    conceptGroup: "Method Overriding",
    totalQuestions: 10,
  difficulty: { easy: 5, medium: 3, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "mr_iq45",
          title: "Implementing Overriding",
          difficulty: "easy",
          askedBy: ["Wipro", "LTIMindtree"],
          tags: ["overriding", "inheritance"],
          question: "How do we implement method overriding in Java?",
          hints: ["Parent vs Child"],
          answer: "Provide a new implementation of a parent class method in the child class using the exact same name and parameters.",
          explanation: "This allows the child class to define behavior specific to its type while using the same method call.",
          output: ""
        },
        {
          id: "mr_iq46",
          title: "Overriding Static Methods",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["static", "overriding"],
          question: "Are we allowed to override a static method in Java?",
          hints: ["Method hiding"],
          answer: "No. Static methods belong to the class, not the instance. If you redefine it, it's called 'Method Hiding', not overriding.",
          explanation: "Overriding depends on the object type at runtime; static methods are resolved at compile time.",
          output: ""
        },
        {
          id: "mr_iq49",
          title: "Overloading vs Overriding",
          difficulty: "easy",
          askedBy: ["Accenture", "HCL"],
          tags: ["comparison", "polymorphism"],
          question: "What is the key difference between overloading and overriding?",
          hints: ["Class location", "Parameters"],
          answer: "Overloading happens in the SAME class with different parameters. Overriding happens in CHILD classes with the SAME parameters.",
          explanation: "Overloading = Compile-time. Overriding = Runtime.",
          output: ""
        },
        
        {
          id: "mr_iq_m2",
          title: "Access Modifiers in Overriding",
          difficulty: "medium",
          askedBy: ["Oracle", "JPMorgan"],
          tags: ["access-modifiers", "overriding"],
          question: "Can we override a method and make it more restrictive (e.g., public to private)?",
          hints: ["Visibility rules"],
          answer: "No. The overriding method cannot have a more restrictive access modifier. It must be same or broader (e.g., protected to public is okay).",
          explanation: "If a parent says 'anyone can see this', the child cannot suddenly hide it.",
          output: ""
        },
        {
          id: "mr_iq_h2",
          title: "Covariant Return Types",
          difficulty: "hard",
          askedBy: ["Cisco", "Google"],
          tags: ["overriding", "covariant"],
          question: "Can the return type of an overridden method be different?",
          hints: ["Java 5 feature"],
          answer: "Yes, but only if the return type is a subclass of the original return type. This is called 'Covariant Return Type'.",
          explanation: "Example: If parent returns 'Animal', child can override it to return 'Dog'.",
          output: ""
        },
        {
          id: "mr_iq_h3",
          title: "Dynamic Method Dispatch Code",
          difficulty: "hard",
          askedBy: ["Walmart", "Amazon"],
          tags: ["polymorphism", "dispatch"],
          question: "What is the output? \n Parent obj = new Child(); \n obj.show(); \n (Assume show() is overridden in Child)",
          hints: ["Object type vs Reference type"],
          answer: "It will call the Child's show() method.",
          explanation: "In Java, the JVM looks at the actual object (Child) at runtime to decide which overridden method to execute. This is Dynamic Method Dispatch.",
          output: "Child's show() is executed"
        }
      ]
    }
  ]
};