// src/data/topics/java/interviewQuestions/javaOverloading.js

export const javaOverloadingQuestions = {
  conceptGroup: "Method Overloading",
  totalQuestions: 10,
  difficulty: { easy: 5, medium: 3, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "mo_iq40",
          title: "Other name for Overloading",
          difficulty: "easy",
          askedBy: ["TCS", "Wipro"],
          tags: ["overloading", "polymorphism"],
          question: "What is the other name of Method Overloading?",
          hints: ["Compile-time"],
          answer:
            "Method Overloading is also known as Static Polymorphism or Compile-time Polymorphism.",
          explanation:
            "It is called static because the compiler decides which method to call during the compilation phase based on the method signature.",
          output: "",
        },
        {
          id: "mo_iq41",
          title: "Implementing Overloading",
          difficulty: "easy",
          askedBy: ["Infosys", "HCL"],
          tags: ["overloading", "basics"],
          question: "How will you implement method overloading in Java?",
          hints: ["Same name, different parameters"],
          answer:
            "By creating methods with the same name but different: 1. Number of parameters, 2. Data types, or 3. Sequence of data types.",
          explanation:
            "The method name remains the same, but the 'signature' must change so the compiler can distinguish them.",
          output: "",
        },
        {
          id: "mo_iq43",
          title: "Overloading vs Return Type",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["overloading", "syntax"],
          question:
            "Why is it not possible to do method overloading by changing only the return type?",
          hints: ["Compiler ambiguity"],
          answer:
            "Because it leads to ambiguity. If you call a method without assigning its result, the compiler won't know which version to execute.",
          explanation:
            "The compiler only looks at the method name and parameter list. Return type is not part of the method signature for overloading.",
          output: "",
        },
        {
          id: "mo_iq44",
          title: "Overloading main()",
          difficulty: "easy",
          askedBy: ["Tech Mahindra", "Cognizant"],
          tags: ["main", "overloading"],
          question: "Is it allowed to overload main() method in Java?",
          hints: ["JVM standard"],
          answer:
            "Yes, you can have multiple main methods, but the JVM will only call the one with the 'String[] args' signature as the entry point.",
          explanation:
            "Other main methods act like regular methods and must be called explicitly from the primary main method.",
          output: "",
        },
        {
          id: "mo_iq_m1",
          title: "Automatic Type Promotion",
          difficulty: "medium",
          askedBy: ["IBM", "Oracle"],
          tags: ["overloading", "type-promotion"],
          question:
            "What happens in overloading if the exact data type match is not found?",
          hints: ["Think: int to long"],
          answer:
            "Java performs 'Automatic Type Promotion'. For example, if you pass an 'int' and only a 'long' parameter version exists, it will promote the int to long.",
          explanation:
            "Promotion order: byte -> short -> int -> long -> float -> double.",
          output: "",
        },
        {
          id: "mo_iq_h1",
          title: "Ambiguity Error in Overloading",
          difficulty: "hard",
          askedBy: ["Amazon", "Goldman Sachs"],
          tags: ["overloading", "ambiguity"],
          question:
            "What is the output of the following code? \n\n void sum(int a, long b) { } \n void sum(long a, int b) { } \n obj.sum(10, 20);",
          hints: ["Both matches are possible"],
          answer:
            "Compile-time error: 'The method sum(int, long) is ambiguous'.",
          explanation:
            "Since 10 and 20 can both be promoted to long, the compiler cannot decide which version to use.",
          output: "Error: reference to sum is ambiguous",
        },
      ],
    },
  ],
};
