// src/data/topics/java/interviewQuestions/javaStrings.js

export const javaStringsQuestions = {
  totalQuestions: 15,
  difficulty: { easy: 8, medium: 4, hard: 3 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "str_121",
          title: "String Immutability",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Wipro"],
          tags: ["strings", "immutability"],
          question: "What is the meaning of Immutable in the context of String class in Java?",
          hints: ["Cannot be changed"],
          answer: "Immutable means that once a String object is created, its state or value cannot be modified. Any operation that appears to change the string actually creates a new String object.",
          explanation: "For example, calling concat() on a String doesn't change the original; it returns a brand new string with the combined text.",
          output: ""
        },
        {
          id: "str_122",
          title: "Why is String Immutable?",
          difficulty: "medium",
          askedBy: ["Accenture", "HCL"],
          tags: ["strings", "scp"],
          question: "Why is a String object considered immutable in Java?",
          hints: ["String Constant Pool", "Security"],
          answer: "Java uses a String Constant Pool (SCP). If multiple variables point to the same literal, changing one would affect all others if they were mutable. Immutability also provides security (for class loading and URLs) and thread safety.",
          explanation: "If String A and B both point to 'Data', and we change A to 'NewData', B should still point to 'Data'. Immutability ensures this by creating a new object for A instead of modifying the shared literal.",
          output: ""
        },
        
        {
          id: "str_123",
          title: "Object Creation - Literals",
          difficulty: "easy",
          askedBy: ["Capgemini", "Cognizant"],
          tags: ["strings", "objects"],
          question: "How many objects does the following code create?\nString s1='Hello';\nString s2='Hello';\nString s3='Hello';",
          hints: ["String Constant Pool"],
          answer: "Only one object is created in the String Constant Pool.",
          explanation: "Because all three variables use the same literal, the JVM finds 'Hello' in the pool for s1, and then simply points s2 and s3 to that same existing memory address.",
          output: ""
        },
        {
          id: "str_125",
          title: "New Operator Object Creation",
          difficulty: "medium",
          askedBy: ["IBM", "Tech Mahindra"],
          tags: ["strings", "new-keyword"],
          question: "How many objects does the following code create?\nString s = new String('HelloWorld');",
          hints: ["Heap vs Pool"],
          answer: "Two objects are created. One in the String Constant Pool (if 'HelloWorld' isn't already there) and one in the regular Heap memory.",
          explanation: "The 'new' keyword always forces the creation of a new object in the heap, while the literal itself is placed in the SCP.",
          output: ""
        },
        {
          id: "str_126",
          title: "String Interning",
          difficulty: "medium",
          askedBy: ["Oracle", "JPMorgan"],
          tags: ["strings", "intern"],
          question: "What is String interning?",
          hints: ["intern() method"],
          answer: "String interning is the process of storing only one copy of each distinct string value in the String Constant Pool. You can manually intern a string using the intern() method.",
          explanation: "When s.intern() is called, if the pool already contains a string equal to s, the pool version is returned. Otherwise, s is added to the pool.",
          output: ""
        },
        {
          id: "str_128",
          title: "String vs StringBuffer",
          difficulty: "easy",
          askedBy: ["Wipro", "LTIMindtree"],
          tags: ["comparison", "mutable"],
          question: "What is the basic difference between a String and StringBuffer object?",
          hints: ["Mutability"],
          answer: "String is immutable (cannot change), whereas StringBuffer is mutable (can change).",
          explanation: "Use String for constant values and StringBuffer when you need to perform many modifications (like in a loop) to save memory.",
          output: ""
        },
        {
          id: "str_129",
          title: "Creating an Immutable Class",
          difficulty: "hard",
          askedBy: ["Amazon", "Google"],
          tags: ["design-patterns", "immutability"],
          question: "How will you create an immutable class in Java?",
          hints: ["Final class", "Deep copy"],
          answer: "1. Declare class as final. 2. Make all fields private and final. 3. No setter methods. 4. Initialize fields via constructor using Deep Copy. 5. Perform deep copies in getter methods for mutable objects.",
          explanation: "Deep copying is crucial to ensure that internal mutable objects (like a Date or List) cannot be modified from the outside after the object is created.",
          output: ""
        },
        {
          id: "str_130",
          title: "The toString() Method",
          difficulty: "easy",
          askedBy: ["TCS", "Accenture"],
          tags: ["object-class", "strings"],
          question: "What is the use of toString() method in Java?",
          hints: ["String representation"],
          answer: "It returns a string representation of an object. The Object class provides a default (ClassName@Hashcode), but it is usually overridden to provide meaningful data.",
          explanation: "Whenever you print an object (System.out.println(obj)), Java internally calls its toString() method.",
          output: ""
        },
        
        {
          id: "str_131",
          title: "Efficiency: String vs Buffer vs Builder",
          difficulty: "hard",
          askedBy: ["Walmart", "Cisco"],
          tags: ["performance", "builder"],
          question: "Arrange String, StringBuffer, and StringBuilder in order of efficiency.",
          hints: ["Synchronization overhead"],
          answer: "StringBuilder (Fastest) > StringBuffer > String (Slowest).",
          explanation: "StringBuilder is fastest because it is NOT synchronized (not thread-safe). StringBuffer is synchronized (thread-safe), making it slower. String is slowest for modifications because every change creates a new object.",
          output: ""
        },
        {
          id: "str_h1",
          title: "String Comparison: == vs .equals()",
          difficulty: "hard",
          askedBy: ["Morgan Stanley", "Intuit"],
          tags: ["comparison", "logic"],
          question: "What is the difference between == and .equals() for Strings?",
          hints: ["Reference vs Content"],
          answer: "== compares memory references (addresses), while .equals() compares the actual character content of the strings.",
          explanation: "Two strings can have the same text but different memory addresses if created with 'new'. Always use .equals() for content comparison.",
          output: ""
        }
      ]
    }
  ]
};

export default javaStringsQuestions;