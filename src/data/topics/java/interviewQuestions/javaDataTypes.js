// src/data/topics/java/interviewQuestions/javaDataTypes.js

export const javaDataTypesInterviewQuestions = {
  conceptGroup: "Data Types",
  totalQuestions: 10,
  difficulty: {
    easy: 4,
    medium: 4,
    hard: 2
  },
  pages: [
    {
      pageNumber: 6,
      title: "Data Types in Java",
      questions: [
        {
          id: "jdt_iq1",
          title: "What Are Data Types?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["datatypes", "basics"],
          question: "What are data types in Java and why are they required?",
          hints: [
            "Type safety",
            "Memory allocation"
          ],
          answer: "Data types define the type of data a variable can hold.",
          explanation: "They help Java allocate memory efficiently and ensure type safety at compile time.",
          output: ""
        },
        {
          id: "jdt_iq2",
          title: "Primitive vs Non-Primitive",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["primitive", "reference"],
          question: "What is the difference between primitive and non-primitive data types?",
          hints: [
            "Stores value vs reference"
          ],
          answer: "Primitive data types store values, non-primitive store references.",
          explanation: "int, char are primitive; String, arrays are non-primitive.",
          output: ""
        },
        {
          id: "jdt_iq3",
          title: "List of Primitive Data Types",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["primitive"],
          question: "List all primitive data types in Java.",
          hints: [
            "Total count"
          ],
          answer: "byte, short, int, long, float, double, char, boolean.",
          explanation: "Java has 8 primitive data types.",
          output: ""
        },
        {
          id: "jdt_iq4",
          title: "Size of Primitive Data Types",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["memory"],
          question: "What are the sizes of primitive data types in Java?",
          hints: [
            "Fixed size"
          ],
          answer: "Sizes are fixed and platform independent.",
          explanation: "byte:1, short:2, int:4, long:8, float:4, double:8, char:2, boolean: JVM dependent.",
          output: ""
        },
        {
          id: "jdt_iq5",
          title: "Why char Is 2 Bytes",
          difficulty: "medium",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["char", "unicode"],
          question: "Why is char 2 bytes in Java?",
          hints: [
            "Unicode support"
          ],
          answer: "Java uses Unicode, which requires 2 bytes.",
          explanation: "Unicode supports international characters beyond ASCII.",
          output: ""
        },
        {
          id: "jdt_iq6",
          title: "Default Values of Data Types",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["default-values"],
          question: "What are the default values of data types in Java?",
          hints: [
            "Only for instance variables"
          ],
          answer: "Each data type has a default value.",
          explanation: "int:0, boolean:false, char:\\u0000, objects:null. Local variables have no default values.",
          output: ""
        },
        {
          id: "jdt_iq7",
          title: "Why boolean Size Is Not Fixed",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["boolean"],
          question: "Why is the size of boolean not specified in Java?",
          hints: [
            "JVM implementation"
          ],
          answer: "Boolean size depends on JVM implementation.",
          explanation: "Java leaves boolean size flexible for JVM optimization.",
          output: ""
        },
        {
          id: "jdt_iq8",
          title: "Wrapper Classes",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["wrapper"],
          question: "What are wrapper classes and why are they needed?",
          hints: [
            "Object representation"
          ],
          answer: "Wrapper classes convert primitives into objects.",
          explanation: "Needed for collections, generics, and object-based APIs.",
          output: ""
        },
        {
          id: "jdt_iq9",
          title: "Autoboxing and Unboxing",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["autoboxing"],
          question: "What is autoboxing and unboxing?",
          hints: [
            "Automatic conversion"
          ],
          answer: "Automatic conversion between primitive and wrapper types.",
          explanation: "Example: int ↔ Integer.",
          output: ""
        },
        {
          id: "jdt_iq10",
          title: "Why Java Is Strongly Typed",
          difficulty: "hard",
          askedBy: ["Oracle India", "SAP Labs"],
          tags: ["strongly-typed"],
          question: "Why is Java considered a strongly typed language?",
          hints: [
            "Compile-time checks"
          ],
          answer: "Java enforces strict type checking at compile time.",
          explanation: "This reduces runtime errors and improves code safety.",
          output: ""
        }
      ]
    }
  ]
};

export default javaDataTypesInterviewQuestions;
