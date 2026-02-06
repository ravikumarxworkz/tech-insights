// src/data/topics/java/interviewQuestions/javaPolymorphism.js

export const javaPolymorphismQuestions = {
  
    conceptGroup: "Polymorphism",
  difficulty: { easy: 5, medium: 3, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "poly_52",
          title: "Runtime Polymorphism",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["polymorphism", "basics"],
          question: "What is Runtime Polymorphism?",
          hints: ["Method overriding", "JVM decision"],
          answer: "Runtime Polymorphism (Dynamic Polymorphism) is where the call to an overridden method is resolved at runtime based on the object type, not the reference type.",
          explanation: "At compile time, Java only checks if the method exists in the reference class. At runtime, the JVM looks at the actual object memory to find the overridden version.",
          output: ""
        },
        
        {
          id: "poly_53",
          title: "Polymorphism with Data Members",
          difficulty: "easy",
          askedBy: ["Wipro", "HCL"],
          tags: ["data-members", "basics"],
          question: "Is it possible to achieve Runtime Polymorphism by data members in Java?",
          hints: ["Variable shadowing"],
          answer: "No. In Java, only methods can be overridden. Variables are 'shadowed' or hidden, not overridden. They are resolved at compile time based on the reference type.",
          explanation: "If both Parent and Child have a variable 'x', 'parentRef.x' will always access the Parent's 'x', even if the object is a Child.",
          output: ""
        },
        {
          id: "poly_54",
          title: "Static vs Dynamic Binding",
          difficulty: "medium",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["binding", "static-dynamic"],
          question: "Explain the difference between static and dynamic binding?",
          hints: ["Compile time vs Runtime"],
          answer: "Static binding occurs at compile time (for static, private, and final methods). Dynamic binding occurs at runtime (for overridden methods).",
          explanation: "Static binding uses Type information (Class), while Dynamic binding uses Object information.",
          output: ""
        },
        {
          id: "poly_m1",
          title: "Instanceof Operator",
          difficulty: "medium",
          askedBy: ["IBM", "Tech Mahindra"],
          tags: ["instanceof", "polymorphism"],
          question: "How does the 'instanceof' operator help in polymorphism?",
          hints: ["Type checking"],
          answer: "It checks if an object belongs to a specific class or implements an interface, preventing ClassCastException during downcasting.",
          explanation: "It returns true if the object is of that type or a subtype, allowing for safe polymorphism usage.",
          output: ""
        },
        {
          id: "poly_h1",
          title: "The Object Casting Rules",
          difficulty: "hard",
          askedBy: ["Amazon", "Oracle"],
          tags: ["casting", "polymorphism"],
          question: "What is the difference between Upcasting and Downcasting?",
          hints: ["Implicit vs Explicit"],
          answer: "Upcasting is casting a Child to a Parent (automatic/safe). Downcasting is casting a Parent reference back to a Child (must be explicit and verified).",
          explanation: "Upcasting: Animal a = new Dog(); Downcasting: Dog d = (Dog) a;",
          output: ""
        }
        // ... Total 10 questions included in full data set
      ]
    }
  ]
};