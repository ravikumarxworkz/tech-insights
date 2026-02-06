// src/data/topics/java/interviewQuestions/javaGarbageCollection.js

export const javaGarbageCollectionQuestions = {
  totalQuestions: 10,
  difficulty: { easy: 5, medium: 3, hard: 2 },
  pages: [
    {
      pageNumber: 1,
      questions: [
        {
          id: "gc_100",
          title: "What is Garbage Collection?",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Wipro"],
          tags: ["gc", "basics"],
          question: "What is Garbage Collection in Java?",
          hints: ["Memory reclamation"],
          answer: "Garbage Collection (GC) is an internal JVM mechanism that automatically reclaims memory by deleting unused objects at runtime.",
          explanation: "It is known as automatic memory management, saving developers from manually allocating and freeing memory like in C++.",
          output: ""
        },
        {
          id: "gc_101",
          title: "Purpose of Garbage Collector",
          difficulty: "easy",
          askedBy: ["HCL", "Accenture"],
          tags: ["gc", "jvm"],
          question: "Why does Java provide a Garbage Collector?",
          hints: ["No pointers", "Automation"],
          answer: "Since Java doesn't use pointers, the JVM manages memory. The GC prevents 'Out of Memory' errors by clearing objects that are no longer needed by the application.",
          explanation: "It ensures the heap memory is reused efficiently, making the language more robust and secure against memory leaks.",
          output: ""
        },
        {
          id: "gc_102",
          title: "System.gc() vs Runtime.gc()",
          difficulty: "easy",
          askedBy: ["Cognizant", "Capgemini"],
          tags: ["gc", "methods"],
          question: "What is the purpose of gc() in Java?",
          hints: ["Requesting GC"],
          answer: "These methods are used to suggest that the JVM run the garbage collector. However, it is just a request; the JVM does not guarantee when or if the GC will run.",
          explanation: "System.gc() is essentially a wrapper that calls Runtime.getRuntime().gc(). It is generally better to let the JVM decide when to run GC.",
          output: ""
        },
        {
          id: "gc_103",
          title: "How GC Works",
          difficulty: "medium",
          askedBy: ["LTIMindtree", "Tech Mahindra"],
          tags: ["gc", "internals"],
          question: "How does Garbage Collection work in Java?",
          hints: ["Daemon thread", "Mark and Sweep"],
          answer: "GC runs as a daemon thread. It finds unreachable objects (those with no active references) and clears them from the heap memory.",
          explanation: "Most collectors use a 'Mark and Sweep' algorithm: first marking live objects, then sweeping away the unmarked ones.",
          output: ""
        },
        
        {
          id: "gc_104",
          title: "Eligibility for GC",
          difficulty: "easy",
          askedBy: ["IBM", "Infosys"],
          tags: ["gc", "eligibility"],
          question: "When does an object become eligible for Garbage Collection in Java?",
          hints: ["Unreachable objects"],
          answer: "An object is eligible when it is no longer reachable by any live thread. This happens if its reference is set to null, it's reassigned, or it's part of an isolated island of isolation.",
          explanation: "If no active part of the program can reach the object, it is considered 'garbage'.",
          output: ""
        },
        {
          id: "gc_105",
          title: "The finalize() Method",
          difficulty: "medium",
          askedBy: ["Oracle", "TCS"],
          tags: ["gc", "finalize"],
          question: "Why do we use finalize() method in Java?",
          hints: ["Cleanup before death"],
          answer: "finalize() is called by the GC just before an object is destroyed to perform cleanup (like closing a file or database connection).",
          explanation: "Note: finalize() is deprecated since Java 9 because it is unpredictable. Try-with-resources or cleaners are now preferred.",
          output: ""
        },
        {
          id: "gc_m1",
          title: "Generational Garbage Collection",
          difficulty: "medium",
          askedBy: ["Amazon", "Walmart"],
          tags: ["gc", "generations"],
          question: "What are the different memory generations in Java GC?",
          hints: ["Young, Old, PermGen"],
          answer: "The Heap is divided into: 1. Young Generation (Eden and Survivor spaces), 2. Old (Tenured) Generation, and 3. Metaspace (formerly PermGen).",
          explanation: "New objects are born in the Young Gen. If they survive multiple GC cycles, they are 'promoted' to the Old Gen.",
          output: ""
        },
        
        {
          id: "gc_m2",
          title: "Island of Isolation",
          difficulty: "medium",
          askedBy: ["JPMorgan", "Morgan Stanley"],
          tags: ["gc", "logic"],
          question: "What is an 'Island of Isolation' in GC?",
          hints: ["Circular references"],
          answer: "It is a group of objects that reference each other but have no references from any live thread. The GC will treat the entire group as garbage.",
          explanation: "Even if Object A points to B and B points to A, if no one else points to them, they are unreachable.",
          output: ""
        },
        {
          id: "gc_h1",
          title: "Types of Garbage Collectors",
          difficulty: "hard",
          askedBy: ["Google", "Adobe"],
          tags: ["gc", "algorithms"],
          question: "Can you name different types of Garbage Collectors in Java?",
          hints: ["Serial, Parallel, G1"],
          answer: "1. Serial GC, 2. Parallel GC (Throughput), 3. CMS (Concurrent Mark Sweep), 4. G1 (Garbage First), and 5. ZGC (Scalable low-latency).",
          explanation: "Modern Java (since version 9) uses G1 GC as the default collector.",
          output: ""
        },
        {
          id: "gc_h2",
          title: "Memory Leaks in Java",
          difficulty: "hard",
          askedBy: ["Intuit", "Paytm"],
          tags: ["gc", "memory-leaks"],
          question: "If Java has GC, how can a memory leak still occur?",
          hints: ["Unintentional references"],
          answer: "Memory leaks occur when objects are no longer used by the logic but are still referenced by a live thread (e.g., static collections, unclosed resources).",
          explanation: "Because the reference still exists, the GC assumes the object is 'live' and refuses to clear it, leading to OutOfMemoryError.",
          output: ""
        }
      ]
    }
  ]
};

export default javaGarbageCollectionQuestions;