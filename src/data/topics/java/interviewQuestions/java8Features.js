// src/data/topics/java/interviewQuestions/java8Features.js

export const java8FeaturesInterviewQuestions = {
  conceptGroup: "Java 8 Features",
  totalQuestions: 20,
  difficulty: {
    easy: 10,
    medium: 8,
    hard: 2
  },
  pages: [
    {
      pageNumber: 20,
      questions: [
        {
          id: "jb_j8_215",
          title: "Purpose of Lambda Expressions",
          difficulty: "easy",
          askedBy: ["Infosys", "TCS Digital", "SAP Labs"],
          tags: ["lambda", "java8"],
          question: "What is the purpose of Lambda expressions in Java 8?",
          hints: ["Functional programming", "Less boilerplate"],
          answer: "Lambda expressions enable writing concise and functional-style code.",
          explanation: "They eliminate boilerplate code for anonymous classes and make code more readable and expressive.",
          output: ""
        },
        {
          id: "jb_j8_216",
          title: "Functional Interface",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["functional-interface", "java8"],
          question: "What is a functional interface?",
          hints: ["Single abstract method"],
          answer: "An interface with exactly one abstract method.",
          explanation: "Functional interfaces are the foundation of lambda expressions. Example: Runnable, Comparator.",
          output: ""
        },
        {
          id: "jb_j8_217",
          title: "Stream API Advantage",
          difficulty: "medium",
          askedBy: ["Flipkart", "Swiggy"],
          tags: ["stream-api", "data-processing"],
          question: "How does the Stream API enhance data manipulation in Java 8?",
          hints: ["Pipeline operations", "Declarative style"],
          answer: "It allows declarative and functional-style processing of data.",
          explanation: "Streams support filtering, mapping, and aggregation with better readability and parallel execution support.",
          output: ""
        },
        {
          id: "jb_j8_218",
          title: "Default Methods",
          difficulty: "easy",
          askedBy: ["Oracle India", "IBM India"],
          tags: ["default-methods", "interfaces"],
          question: "What are default methods in interfaces?",
          hints: ["Method implementation"],
          answer: "Methods with implementation inside interfaces.",
          explanation: "Introduced to support backward compatibility when interfaces are enhanced.",
          output: ""
        },
        {
          id: "jb_j8_219",
          title: "Optional Class Usage",
          difficulty: "medium",
          askedBy: ["Infosys", "Accenture"],
          tags: ["optional", "null-safety"],
          question: "How do you use the Optional class to handle null values?",
          hints: ["Avoid NullPointerException"],
          answer: "By wrapping values in Optional objects.",
          explanation: "Optional provides methods like isPresent(), orElse(), and ifPresent() to safely handle nulls.",
          output: ""
        },
        {
          id: "jb_j8_220",
          title: "Method References",
          difficulty: "easy",
          askedBy: ["Zoho", "Freshworks"],
          tags: ["method-reference", "java8"],
          question: "What are method references and how are they used?",
          hints: [":: operator"],
          answer: "A shorthand way to refer to methods using :: operator.",
          explanation: "They improve readability by reusing existing methods instead of writing lambdas.",
          output: ""
        },
        {
          id: "jb_j8_221",
          title: "forEach with Streams",
          difficulty: "easy",
          askedBy: ["Mindtree", "L&T Technology Services"],
          tags: ["foreach", "streams"],
          question: "How does the forEach method work with streams?",
          hints: ["Terminal operation"],
          answer: "forEach processes each element of the stream.",
          explanation: "It is a terminal operation used to perform actions like printing elements.",
          output: ""
        },
        {
          id: "jb_j8_222",
          title: "Collectors Role",
          difficulty: "medium",
          askedBy: ["TCS", "Cognizant"],
          tags: ["collectors", "stream-api"],
          question: "What is the role of Collectors in the Stream API?",
          hints: ["Aggregation"],
          answer: "Collectors transform stream elements into collections or aggregated results.",
          explanation: "Common collectors include toList(), groupingBy(), and counting().",
          output: ""
        },
        {
          id: "jb_j8_223",
          title: "Creating Streams",
          difficulty: "easy",
          askedBy: ["Infosys", "Walmart Global Tech"],
          tags: ["stream", "collection"],
          question: "How do you create a Stream from a collection?",
          hints: ["stream() method"],
          answer: "By calling the stream() method on a collection.",
          explanation: "Example: list.stream();",
          output: ""
        },
        {
          id: "jb_j8_224",
          title: "Date and Time API",
          difficulty: "medium",
          askedBy: ["Oracle India", "SAP Labs"],
          tags: ["date-time", "java8"],
          question: "What improvements were introduced in the Date and Time API in Java 8?",
          hints: ["Immutable", "Thread-safe"],
          answer: "A new, immutable, and thread-safe Date-Time API was introduced.",
          explanation: "Classes like LocalDate, LocalTime, and LocalDateTime replaced Date and Calendar.",
          output: ""
        },
        {
          id: "jb_j8_225",
          title: "Lambda Expression",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["lambda", "syntax"],
          question: "What is a lambda expression and how is it used in Java 8?",
          hints: ["Anonymous function"],
          answer: "A lambda expression is an anonymous function.",
          explanation: "Used to implement functional interfaces in a concise way.",
          output: ""
        },
        {
          id: "jb_j8_226",
          title: "Benefits of Stream API",
          difficulty: "medium",
          askedBy: ["Flipkart", "Amazon India"],
          tags: ["stream-api", "benefits"],
          question: "What are the main benefits of using Stream API in Java 8?",
          hints: ["Readable", "Parallel"],
          answer: "Cleaner code, functional style, and parallel processing support.",
          explanation: "Streams simplify complex data processing logic.",
          output: ""
        },
        {
          id: "jb_j8_227",
          title: "Filtering Data",
          difficulty: "easy",
          askedBy: ["Zoho", "Paytm"],
          tags: ["filter", "streams"],
          question: "How do you filter data using streams?",
          hints: ["filter()"],
          answer: "Using the filter() method with a predicate.",
          explanation: "Example: stream.filter(x -> x > 10).",
          output: ""
        },
        {
          id: "jb_j8_228",
          title: "reduce() Method",
          difficulty: "medium",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["reduce", "streams"],
          question: "What is the use of reduce() method in the Stream API?",
          hints: ["Aggregate result"],
          answer: "It reduces stream elements into a single value.",
          explanation: "Commonly used for sum, max, or concatenation.",
          output: ""
        },
        {
          id: "jb_j8_229",
          title: "map() Function",
          difficulty: "easy",
          askedBy: ["Infosys", "TCS"],
          tags: ["map", "streams"],
          question: "How do you use the map() function in a stream?",
          hints: ["Transform data"],
          answer: "map() transforms each element in the stream.",
          explanation: "Example: stream.map(String::toUpperCase).",
          output: ""
        },
        {
          id: "jb_j8_230",
          title: "flatMap() Function",
          difficulty: "medium",
          askedBy: ["Swiggy", "Flipkart"],
          tags: ["flatmap", "streams"],
          question: "What is the purpose of the flatMap() function in streams?",
          hints: ["Flatten streams"],
          answer: "It flattens nested streams into a single stream.",
          explanation: "Used when dealing with collections of collections.",
          output: ""
        },
        {
          id: "jb_j8_231",
          title: "Optional Benefits",
          difficulty: "easy",
          askedBy: ["Mindtree", "Accenture"],
          tags: ["optional", "null-handling"],
          question: "How does the Optional class improve handling null values?",
          hints: ["Null safety"],
          answer: "It avoids NullPointerException.",
          explanation: "Encourages explicit handling of absence of values.",
          output: ""
        },
        {
          id: "jb_j8_232",
          title: "Significance of Default Methods",
          difficulty: "medium",
          askedBy: ["Oracle India", "IBM India"],
          tags: ["default-methods", "interfaces"],
          question: "What is the significance of default methods in interfaces introduced in Java 8?",
          hints: ["Backward compatibility"],
          answer: "They allow adding new methods to interfaces without breaking existing implementations.",
          explanation: "Ensures backward compatibility with older code.",
          output: ""
        },
        {
          id: "jb_j8_233",
          title: "Collectors Aggregation",
          difficulty: "medium",
          askedBy: ["Capgemini", "Cognizant"],
          tags: ["collectors", "aggregation"],
          question: "How do you use Collectors to aggregate results in streams?",
          hints: ["collect()"],
          answer: "Using collect() with Collectors methods.",
          explanation: "Example: stream.collect(Collectors.groupingBy()).",
          output: ""
        },
        {
          id: "jb_j8_234",
          title: "Method References Usage",
          difficulty: "easy",
          askedBy: ["Infosys", "SAP Labs"],
          tags: ["method-reference", "java8"],
          question: "What are method references and how are they used in Java 8?",
          hints: ["Cleaner lambdas"],
          answer: "They reference existing methods using :: operator.",
          explanation: "They improve readability and reduce lambda verbosity.",
          output: ""
        }
      ]
    }
  ]
};

export default java8FeaturesInterviewQuestions;
