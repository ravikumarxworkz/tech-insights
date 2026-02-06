// src/data/topics/java/interviewQuestions/javaOops.js

export const javaOopsInterviewQuestions = {
  conceptGroup: "OOPs",
  totalQuestions: 20, // Updated count
  difficulty: {
    easy: 20,
    medium: 0,
    hard: 0
  },
  pages: [
    // ... page 1 remains the same ...
    {
      pageNumber: 2,
      questions: [
        {
          id: "jb_iq13",
          title: "Main Principles of OOPs",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro", "LTIMindtree"],
          tags: ["oops", "basics"],
          question: "What are the main principles of Object Oriented Programming?",
          hints: ["Think of the 4 pillars"],
          answer: "The four main principles are Abstraction, Encapsulation, Inheritance, and Polymorphism.",
          explanation: "OOPS is based on 4 pillars: 1. Abstraction (hiding complexity), 2. Encapsulation (data binding), 3. Inheritance (reusability), 4. Polymorphism (one name many forms).",
          output: ""
        },
        {
          id: "jb_iq14",
          title: "Object Oriented vs Object Based",
          difficulty: "easy",
          askedBy: ["Infosys", "HCL"],
          tags: ["oops", "javascript"],
          question: "What is the difference between Object Oriented Programming (OOP) and Object Based Programming?",
          hints: ["Think about Inheritance support"],
          answer: "OOP languages (Java, C++) support all features including Inheritance and Polymorphism. Object Based languages (JavaScript, VBScript) support objects and encapsulation but lack built-in Inheritance.",
          explanation: "Object Based languages are often called 'Prototype-oriented'. They allow building objects but don't fully support Inheritance and Polymorphism like Java does.",
          output: ""
        },
        {
          id: "jb_iq15",
          title: "Default Value of Object Reference",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["variables", "null"],
          question: "In Java, what is the default value of an object reference defined as an instance variable?",
          hints: ["Non-primitive default"],
          answer: "The default value of any object reference (instance variable) is null.",
          explanation: "While primitives have values like 0 or false, all reference types (like String, Custom Objects) are initialized to null by default.",
          output: ""
        },
        {
          id: "jb_iq16",
          title: "Need for Constructor",
          difficulty: "easy",
          askedBy: ["TCS", "Capgemini"],
          tags: ["constructor"],
          question: "Why do we need a constructor in Java?",
          hints: ["Object initialization"],
          answer: "A constructor is used to create an object and initialize its state. Without a constructor, we cannot create an instance of a class.",
          explanation: "Constructors have the same name as the class. They set up the initial values for the object. Java provides a default one if you don't write any.",
          output: ""
        },
        {
          id: "jb_iq17",
          title: "Why Default Constructor?",
          difficulty: "easy",
          askedBy: ["Wipro", "Tech Mahindra"],
          tags: ["constructor"],
          question: "Why do we need a default constructor in Java classes?",
          hints: ["No-argument constructor", "Custom constructors"],
          answer: "It allows object creation without passing arguments. If you write a parameterized constructor, Java won't provide the default one automatically, so you must define it manually if needed.",
          explanation: "Java provides a free no-arg constructor only if you write zero constructors. If you write even one custom constructor, the free one is removed.",
          output: ""
        },
        {
          id: "jb_iq18",
          title: "Constructor Return Value",
          difficulty: "easy",
          askedBy: ["IBM", "Infosys"],
          tags: ["constructor"],
          question: "What is the value returned by a Constructor in Java?",
          hints: ["Think about the 'new' keyword"],
          answer: "A constructor returns the current class instance (the newly created object).",
          explanation: "Although we don't write a 'return' type for constructors, they implicitly return the object they just created.",
          output: ""
        },
        {
          id: "jb_iq19",
          title: "Constructor Inheritance",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["constructor", "inheritance"],
          question: "Can we inherit a Constructor?",
          hints: ["Parent vs Child"],
          answer: "No, constructors cannot be inherited. You can only call the parent constructor using 'super()'.",
          explanation: "Constructors are specific to the class they are defined in. A child class can call the parent's constructor, but it doesn't 'own' it.",
          output: ""
        },
        {
          id: "jb_iq20",
          title: "Final, Static, Abstract Constructors",
          difficulty: "easy",
          askedBy: ["Oracle", "Accenture"],
          tags: ["constructor", "modifiers"],
          question: "Why constructors cannot be final, static, or abstract in Java?",
          hints: ["How constructors work"],
          answer: "Constructors can't be final (they aren't inherited anyway), static (they belong to objects, not classes), or abstract (they must have a body to initialize objects).",
          explanation: "Final prevents overriding, but constructors don't override. Static belongs to the class, but constructors create objects. Abstract means no body, but constructors must initialize data.",
          output: ""
        }
      ]
    }
  ]
};

export default javaOopsInterviewQuestions;
