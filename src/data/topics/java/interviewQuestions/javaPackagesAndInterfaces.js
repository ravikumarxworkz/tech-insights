// src/data/topics/java/interviewQuestions/javaPackagesAndInterfaces.js

export const javaPackagesAndInterfacesInterviewQuestions = {
  conceptGroup: "Packages and Interfaces",
  totalQuestions: 10,
  difficulty: {
    easy: 10,
    medium: 0,
    hard: 0
  },
  pages: [
    {
      pageNumber: 10,
      questions: [
        {
          id: "jb_pi100",
          title: "Defining a Package",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["package", "basics"],
          question: "How do you define a package in Java?",
          hints: ["package keyword"],
          answer: "Using the package keyword at the top of the source file.",
          explanation: "Example: package com.example.util;",
          output: ""
        },
        {
          id: "jb_pi101",
          title: "Importing a Package",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["import", "package"],
          question: "How do you import a package in Java?",
          hints: ["import statement"],
          answer: "Using the import keyword.",
          explanation: "Example: import java.util.*;",
          output: ""
        },
        {
          id: "jb_pi102",
          title: "Purpose of Import",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["import", "usage"],
          question: "What is the purpose of import statements in Java?",
          hints: ["Access classes"],
          answer: "They allow access to classes defined in other packages.",
          explanation: "Without import, fully qualified class names must be used.",
          output: ""
        },
        {
          id: "jb_pi103",
          title: "Defining an Interface",
          difficulty: "easy",
          askedBy: ["TCS", "IBM"],
          tags: ["interface", "syntax"],
          question: "How do you define an interface in Java?",
          hints: ["interface keyword"],
          answer: "Using the interface keyword.",
          explanation: "Interfaces define abstract methods by default.",
          output: ""
        },
        {
          id: "jb_pi104",
          title: "Abstract Class vs Interface",
          difficulty: "easy",
          askedBy: ["Oracle", "Capgemini"],
          tags: ["interface", "abstract"],
          question: "What are the differences between abstract classes and interfaces?",
          hints: ["Multiple inheritance"],
          answer: "Interfaces support multiple inheritance; abstract classes do not.",
          explanation: "Interfaces cannot have instance variables.",
          output: ""
        },
        {
          id: "jb_pi105",
          title: "Implementing an Interface",
          difficulty: "easy",
          askedBy: ["Wipro", "Infosys"],
          tags: ["interface", "implements"],
          question: "How do you implement an interface in a class?",
          hints: ["implements keyword"],
          answer: "Using the implements keyword.",
          explanation: "All abstract methods must be implemented.",
          output: ""
        },
        {
          id: "jb_pi106",
          title: "Interface Inheritance",
          difficulty: "easy",
          askedBy: ["TCS", "HCL"],
          tags: ["interface", "inheritance"],
          question: "Can interfaces extend other interfaces?",
          hints: ["Multiple inheritance"],
          answer: "Yes, interfaces can extend multiple interfaces.",
          explanation: "This supports multiple inheritance.",
          output: ""
        },
        {
          id: "jb_pi107",
          title: "Default Methods",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["interface", "default-method"],
          question: "What are default methods in interfaces?",
          hints: ["Java 8"],
          answer: "Methods with implementation inside interfaces.",
          explanation: "Introduced in Java 8 using the default keyword.",
          output: ""
        },
        {
          id: "jb_pi108",
          title: "package Keyword Usage",
          difficulty: "easy",
          askedBy: ["Accenture", "Infosys"],
          tags: ["package", "keyword"],
          question: "How do you use the package keyword in Java?",
          hints: ["Top of file"],
          answer: "It must be the first statement in the source file.",
          explanation: "Defines the namespace for the class.",
          output: ""
        },
        {
          id: "jb_pi109",
          title: "Access Modifiers in Packages",
          difficulty: "easy",
          askedBy: ["TCS", "Capgemini"],
          tags: ["access-modifiers", "package"],
          question: "What is the purpose of access modifiers in packages?",
          hints: ["Visibility control"],
          answer: "They control access to classes and members across packages.",
          explanation: "Ensures encapsulation and security.",
          output: ""
        }
      ]
    }
  ]
};

export default javaPackagesAndInterfacesInterviewQuestions;
