// src/data/topics/java/interviewQuestions/javaWrapperClasses.js

export const javaWrapperClassQuestions = {
  conceptGroup: "Wrapper Classes",
  totalQuestions: 10,
  difficulty: {
    easy: 3,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 25,
      title: "Wrapper Classes",
      questions: [
        {
          id: "jwc_iq1",
          title: "What Are Wrapper Classes?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["wrapper", "basics"],
          question: "What are wrapper classes in Java?",
          hints: [
            "Primitive to object"
          ],
          answer: "Wrapper classes convert primitive data types into objects.",
          explanation: "Each primitive type has a corresponding wrapper class like int → Integer.",
          output: ""
        },
        {
          id: "jwc_iq2",
          title: "Why Wrapper Classes Are Needed",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["collections"],
          question: "Why do we need wrapper classes in Java?",
          hints: [
            "Collections",
            "Generics"
          ],
          answer: "Because collections and generics work only with objects.",
          explanation: "Wrapper classes allow primitives to be used where objects are required.",
          output: ""
        },
        {
          id: "jwc_iq3",
          title: "List of Wrapper Classes",
          difficulty: "easy",
          askedBy: ["Accenture", "Cognizant"],
          tags: ["wrapper", "mapping"],
          question: "List all wrapper classes in Java.",
          hints: [
            "8 primitives"
          ],
          answer: "Byte, Short, Integer, Long, Float, Double, Character, Boolean.",
          explanation: "Each corresponds to a primitive data type.",
          output: ""
        },
        {
          id: "jwc_iq4",
          title: "Autoboxing",
          difficulty: "medium",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["autoboxing"],
          question: "What is autoboxing in Java?",
          hints: [
            "Automatic conversion"
          ],
          answer: "Automatic conversion of primitive to wrapper object.",
          explanation: "Example: int → Integer.",
          output: ""
        },
        {
          id: "jwc_iq5",
          title: "Unboxing",
          difficulty: "medium",
          askedBy: ["Infosys", "TCS"],
          tags: ["unboxing"],
          question: "What is unboxing in Java?",
          hints: [
            "Object to primitive"
          ],
          answer: "Automatic conversion of wrapper object to primitive type.",
          explanation: "Example: Integer → int.",
          output: ""
        },
        {
          id: "jwc_iq6",
          title: "Wrapper Immutability",
          difficulty: "medium",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["immutability"],
          question: "Are wrapper classes immutable?",
          hints: [
            "Value change"
          ],
          answer: "Yes, wrapper classes are immutable.",
          explanation: "Once created, their value cannot be changed.",
          output: ""
        },
        {
          id: "jwc_iq7",
          title: "Integer Cache",
          difficulty: "hard",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["integer-cache"],
          question: "Explain Integer caching in Java.",
          hints: [
            "-128 to 127"
          ],
          answer: "Integer values between -128 and 127 are cached.",
          explanation: "Improves performance and memory efficiency.",
          output: ""
        },
        {
          id: "jwc_iq8",
          title: "== vs equals()",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["equals", "comparison"],
          question: "Difference between == and equals() for wrapper classes?",
          hints: [
            "Reference vs value"
          ],
          answer: "`==` compares references; equals() compares values.",
          explanation: "Due to caching, == may give unexpected results.",
          output: ""
        },
        {
          id: "jwc_iq9",
          title: "valueOf() vs Constructor",
          difficulty: "medium",
          askedBy: ["SAP Labs", "Oracle India"],
          tags: ["valueOf"],
          question: "Difference between valueOf() and constructor in wrapper classes?",
          hints: [
            "Caching"
          ],
          answer: "valueOf() uses caching; constructors always create new objects.",
          explanation: "valueOf() is preferred for performance.",
          output: ""
        },
        {
          id: "jwc_iq10",
          title: "Wrapper Classes and NullPointerException",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["npe"],
          question: "How can wrapper classes cause NullPointerException?",
          hints: [
            "Unboxing null"
          ],
          answer: "Unboxing a null wrapper object causes NullPointerException.",
          explanation: "Example: Integer i = null; int x = i;",
          output: ""
        }
      ]
    }
  ]
};

export default javaWrapperClassQuestions;
