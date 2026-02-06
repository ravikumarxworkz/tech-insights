// src/data/topics/java/interviewQuestions/javaPackages.js

export const javaPackagesInterviewQuestions = {
  conceptGroup: "Packages",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 29,
      title: "Packages",
      questions: [
        {
          id: "jp_iq1",
          title: "What Is a Package?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["packages", "basics"],
          question: "What is a package in Java?",
          hints: [
            "Namespace",
            "Grouping"
          ],
          answer: "A package is a namespace that groups related classes and interfaces.",
          explanation: "Packages help avoid name conflicts and improve code organization and maintainability.",
          output: ""
        },
        {
          id: "jp_iq2",
          title: "Why Packages Are Needed",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["packages"],
          question: "Why do we use packages in Java?",
          hints: [
            "Modularity",
            "Access control"
          ],
          answer: "To organize large applications and control access.",
          explanation: "Packages support modularity, reuse, and security.",
          output: ""
        },
        {
          id: "jp_iq3",
          title: "Defining a Package",
          difficulty: "medium",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["package-keyword"],
          question: "How do you define a package in Java?",
          hints: [
            "package keyword"
          ],
          answer: "Using the `package` keyword at the top of a source file.",
          explanation: "Example: `package com.company.project;`",
          output: ""
        },
        {
          id: "jp_iq4",
          title: "Types of Packages",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["built-in", "user-defined"],
          question: "What are the types of packages in Java?",
          hints: [
            "Built-in",
            "Custom"
          ],
          answer: "Built-in packages and user-defined packages.",
          explanation: "Examples of built-in packages include java.lang, java.util, java.io.",
          output: ""
        },
        {
          id: "jp_iq5",
          title: "Access Control Using Packages",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["access-modifiers"],
          question: "How do packages help in access control?",
          hints: [
            "protected",
            "default"
          ],
          answer: "Packages work with access modifiers to control visibility.",
          explanation: "Default and protected access are package-sensitive.",
          output: ""
        },
        {
          id: "jp_iq6",
          title: "Import Statement",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["import"],
          question: "What is the purpose of the import statement in Java?",
          hints: [
            "Avoid fully qualified names"
          ],
          answer: "It allows access to classes defined in other packages.",
          explanation: "Without import, fully qualified class names must be used.",
          output: ""
        },
        {
          id: "jp_iq7",
          title: "Static Import",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["static-import"],
          question: "What is static import in Java?",
          hints: [
            "static members"
          ],
          answer: "It allows direct access to static members of a class.",
          explanation: "Example: `import static java.lang.Math.*;`",
          output: ""
        },
        {
          id: "jp_iq8",
          title: "Default Package",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["default-package"],
          question: "What is the default package in Java and why should it be avoided?",
          hints: [
            "No package declaration"
          ],
          answer: "Classes without a package statement belong to the default package.",
          explanation: "It should be avoided because it limits reuse and importability.",
          output: ""
        },
        {
          id: "jp_iq9",
          title: "JAR and Packages",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["jar"],
          question: "How are packages related to JAR files?",
          hints: [
            "Distribution"
          ],
          answer: "JAR files bundle packages for distribution.",
          explanation: "JARs preserve package structure inside the archive.",
          output: ""
        },
        {
          id: "jp_iq10",
          title: "Best Practices for Packages",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["best-practices"],
          question: "What are best practices for designing packages?",
          hints: [
            "Layered architecture"
          ],
          answer: "Use meaningful names, follow layered architecture, and avoid cyclic dependencies.",
          explanation: "Good package design improves scalability and maintainability.",
          output: ""
        }
      ]
    }
  ]
};

export default javaPackagesInterviewQuestions;
