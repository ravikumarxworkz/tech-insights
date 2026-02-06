// src/data/topics/java/interviewQuestions/javaCollectionsFramework.js

export const javaCollectionsFrameworkInterviewQuestions = {
  conceptGroup: "Java Collections Framework",
  totalQuestions: 20,
  difficulty: {
    easy: 12,
    medium: 6,
    hard: 2
  },
  pages: [
    {
      pageNumber: 17,
      questions: [
        {
          id: "jb_cf171",
          title: "Java Collections Framework",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys"],
          tags: ["collections", "framework"],
          question: "What is the Java Collections Framework?",
          hints: ["Unified architecture"],
          answer: "It is a unified framework for storing and manipulating groups of objects.",
          explanation: "It provides interfaces, implementations, and algorithms (like sorting and searching) to work with collections efficiently.",
          output: ""
        },
        {
          id: "jb_cf172",
          title: "Unique Elements Interface",
          difficulty: "easy",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["set", "unique-elements"],
          question: "Which interface in the Java Collections Framework represents a collection of elements with unique values?",
          hints: ["No duplicates"],
          answer: "The Set interface.",
          explanation: "Implementations like HashSet and TreeSet do not allow duplicate elements.",
          output: ""
        },
        {
          id: "jb_cf173",
          title: "Dynamic List Implementation",
          difficulty: "easy",
          askedBy: ["Infosys", "Accenture"],
          tags: ["list", "arraylist"],
          question: "What is the primary implementation of the List interface that allows dynamic resizing?",
          hints: ["Resizable array"],
          answer: "ArrayList.",
          explanation: "ArrayList automatically grows when elements are added beyond its capacity.",
          output: ""
        },
        {
          id: "jb_cf174",
          title: "Iterating HashSet",
          difficulty: "easy",
          askedBy: ["TCS", "IBM"],
          tags: ["hashset", "iteration"],
          question: "How do you iterate over elements in a HashSet?",
          hints: ["Iterator or for-each"],
          answer: "Using an Iterator or enhanced for-loop.",
          explanation: "Example:\nfor(String s : set) { }\nIterator<String> it = set.iterator();",
          output: ""
        },
        {
          id: "jb_cf175",
          title: "Remove from HashMap",
          difficulty: "easy",
          askedBy: ["Oracle", "Capgemini"],
          tags: ["hashmap", "remove"],
          question: "What method is used to remove a specific element from a HashMap?",
          hints: ["Key-based removal"],
          answer: "remove(key).",
          explanation: "Example: map.remove(\"id\"); removes the entry associated with the key.",
          output: ""
        },
        {
          id: "jb_cf176",
          title: "ArrayList vs LinkedList",
          difficulty: "medium",
          askedBy: ["Infosys", "Wipro"],
          tags: ["arraylist", "linkedlist"],
          question: "What is the difference between ArrayList and LinkedList?",
          hints: ["Data structure"],
          answer: "ArrayList uses a dynamic array; LinkedList uses a doubly linked list.",
          explanation: "ArrayList is faster for access, LinkedList is faster for insertions/deletions.",
          output: ""
        },
        {
          id: "jb_cf177",
          title: "Key-Value Mapping Class",
          difficulty: "easy",
          askedBy: ["TCS", "Accenture"],
          tags: ["map", "key-value"],
          question: "Which class in the Collections Framework provides a key-value mapping?",
          hints: ["Map implementation"],
          answer: "HashMap.",
          explanation: "It stores data as key-value pairs with unique keys.",
          output: ""
        },
        {
          id: "jb_cf178",
          title: "Collections.sort()",
          difficulty: "easy",
          askedBy: ["IBM", "Oracle"],
          tags: ["sorting", "collections"],
          question: "What does the Collections.sort() method do?",
          hints: ["Natural ordering"],
          answer: "It sorts a List in ascending order.",
          explanation: "Uses natural ordering or a Comparator if provided.",
          output: ""
        },
        {
          id: "jb_cf179",
          title: "TreeSet contains()",
          difficulty: "easy",
          askedBy: ["Infosys", "Capgemini"],
          tags: ["treeset", "search"],
          question: "How do you check if a TreeSet contains a specific element?",
          hints: ["contains method"],
          answer: "Using the contains() method.",
          explanation: "Example: treeSet.contains(10);",
          output: ""
        },
        {
          id: "jb_cf180",
          title: "Comparator vs Comparable",
          difficulty: "medium",
          askedBy: ["TCS", "Oracle"],
          tags: ["sorting", "comparator", "comparable"],
          question: "What is the role of Comparator and Comparable interfaces in sorting collections?",
          hints: ["Custom sorting"],
          answer: "Comparable defines natural ordering; Comparator defines custom ordering.",
          explanation: "Comparable is implemented by the class, Comparator is external.",
          output: ""
        },
        {
          id: "jb_cf181",
          title: "Deque Interface",
          difficulty: "easy",
          askedBy: ["IBM", "Infosys"],
          tags: ["deque", "queue"],
          question: "What is the purpose of the Deque interface in Java?",
          hints: ["Double-ended queue"],
          answer: "It allows insertion and removal at both ends.",
          explanation: "Supports stack and queue operations.",
          output: ""
        },
        {
          id: "jb_cf182",
          title: "LinkedList as Deque",
          difficulty: "medium",
          askedBy: ["Wipro", "Capgemini"],
          tags: ["linkedlist", "deque"],
          question: "How does the LinkedList class implement the Deque interface?",
          hints: ["Implements Deque"],
          answer: "LinkedList implements the Deque interface directly.",
          explanation: "It provides methods like addFirst(), addLast(), removeFirst().",
          output: ""
        },
        {
          id: "jb_cf183",
          title: "HashSet vs LinkedHashSet",
          difficulty: "easy",
          askedBy: ["TCS", "Accenture"],
          tags: ["hashset", "linkedhashset"],
          question: "What is the difference between HashSet and LinkedHashSet?",
          hints: ["Order preservation"],
          answer: "LinkedHashSet maintains insertion order; HashSet does not.",
          explanation: "Both do not allow duplicates.",
          output: ""
        },
        {
          id: "jb_cf184",
          title: "Iterating Vector",
          difficulty: "easy",
          askedBy: ["Oracle", "IBM"],
          tags: ["vector", "iteration"],
          question: "How do you iterate over elements in a Vector?",
          hints: ["Enumeration"],
          answer: "Using Enumeration, Iterator, or for-each loop.",
          explanation: "Vector supports legacy Enumeration interface.",
          output: ""
        },
        {
          id: "jb_cf185",
          title: "HashMap Purpose",
          difficulty: "easy",
          askedBy: ["Infosys", "Capgemini"],
          tags: ["hashmap", "map"],
          question: "What is the purpose of the HashMap class?",
          hints: ["Fast lookup"],
          answer: "It stores key-value pairs for fast retrieval.",
          explanation: "Allows one null key and multiple null values.",
          output: ""
        },
        {
          id: "jb_cf186",
          title: "Access TreeMap Elements",
          difficulty: "medium",
          askedBy: ["TCS", "IBM"],
          tags: ["treemap", "navigation"],
          question: "How do you access elements in a TreeMap?",
          hints: ["Key-based access"],
          answer: "Using get(key) or navigation methods.",
          explanation: "TreeMap maintains sorted order of keys.",
          output: ""
        },
        {
          id: "jb_cf187",
          title: "List Size Method",
          difficulty: "easy",
          askedBy: ["Wipro", "Infosys"],
          tags: ["list", "size"],
          question: "What method in the List interface returns the number of elements?",
          hints: ["Count"],
          answer: "size().",
          explanation: "Returns total number of elements in the list.",
          output: ""
        },
        {
          id: "jb_cf188",
          title: "ArrayList vs Vector",
          difficulty: "medium",
          askedBy: ["Oracle", "Accenture"],
          tags: ["arraylist", "vector"],
          question: "What is the difference between ArrayList and Vector?",
          hints: ["Synchronization"],
          answer: "Vector is synchronized; ArrayList is not.",
          explanation: "ArrayList is faster in single-threaded environments.",
          output: ""
        },
        {
          id: "jb_cf189",
          title: "PriorityQueue Working",
          difficulty: "medium",
          askedBy: ["TCS", "Capgemini"],
          tags: ["priorityqueue", "heap"],
          question: "How does the PriorityQueue class work?",
          hints: ["Heap structure"],
          answer: "Elements are ordered based on priority.",
          explanation: "Internally uses a min-heap by default.",
          output: ""
        },
        {
          id: "jb_cf190",
          title: "NavigableMap Interface",
          difficulty: "hard",
          askedBy: ["IBM", "Oracle"],
          tags: ["navigablemap", "sorted-map"],
          question: "What is the purpose of the NavigableMap interface?",
          hints: ["Navigation methods"],
          answer: "It provides navigation methods over sorted maps.",
          explanation: "Supports methods like lowerKey(), higherKey(), and subMap().",
          output: ""
        }
      ]
    }
  ]
};

export default javaCollectionsFrameworkInterviewQuestions;
