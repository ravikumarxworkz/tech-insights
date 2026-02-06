// src/data/topics/java/interviewQuestions/javaStreamsAndFileIO.js

export const javaStreamsAndFileIOInterviewQuestions = {
  conceptGroup: "Streams and File I/O",
  totalQuestions: 10,
  difficulty: {
    easy: 6,
    medium: 3,
    hard: 1
  },
  pages: [
    {
      pageNumber: 18,
      questions: [
        {
          id: "jb_io191",
          title: "File Class Purpose",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Mindtree"],
          tags: ["file", "io-basics"],
          question: "What is the purpose of the File class in Java?",
          hints: [
            "Represents file or directory",
            "Does not read/write data"
          ],
          answer: "The File class represents a file or directory path in the file system.",
          explanation: "It is mainly used to create, delete, check existence, and get metadata of files or directories. It does not perform actual reading or writing of data.",
          output: ""
        },
        {
          id: "jb_io192",
          title: "Reading Binary Data",
          difficulty: "easy",
          askedBy: ["Wipro", "Bosch", "Intel India"],
          tags: ["binary", "input-stream"],
          question: "Which class is used to read binary data from a file?",
          hints: [
            "Byte-based stream",
            "Not for text files"
          ],
          answer: "FileInputStream.",
          explanation: "FileInputStream reads raw byte data and is commonly used for images, audio, and binary files.",
          output: ""
        },
        {
          id: "jb_io193",
          title: "Files.write() Method",
          difficulty: "easy",
          askedBy: ["Accenture", "Flipkart"],
          tags: ["nio", "files-api"],
          question: "What does the Files.write() method do?",
          hints: [
            "Java NIO",
            "Write bytes or lines"
          ],
          answer: "It writes data to a file using the NIO API.",
          explanation: "Files.write() can write byte arrays or lists of strings to a file and can also create the file if it does not exist.",
          output: ""
        },
        {
          id: "jb_io194",
          title: "Reading File Line by Line",
          difficulty: "medium",
          askedBy: ["Infosys", "Zoho"],
          tags: ["bufferedreader", "file-reading"],
          question: "How can you read a file line by line using BufferedReader?",
          hints: [
            "readLine() method",
            "Text files"
          ],
          answer: "By calling the readLine() method inside a loop.",
          explanation: "BufferedReader reads text efficiently and returns one line at a time until it reaches null (EOF).",
          output: ""
        },
        {
          id: "jb_io195",
          title: "Writing Formatted Text",
          difficulty: "easy",
          askedBy: ["TCS Digital", "SAP Labs"],
          tags: ["printwriter", "formatted-output"],
          question: "Which class provides methods to write formatted text to a file?",
          hints: [
            "printf support",
            "Human-readable output"
          ],
          answer: "PrintWriter.",
          explanation: "PrintWriter supports formatted output using printf() and println(), making it suitable for reports and logs.",
          output: ""
        },
        {
          id: "jb_io196",
          title: "FileInputStream Usage",
          difficulty: "easy",
          askedBy: ["HCL", "Cisco India"],
          tags: ["fileinputstream", "binary-data"],
          question: "What is the purpose of the FileInputStream class?",
          hints: [
            "Read bytes",
            "Low-level stream"
          ],
          answer: "It reads byte-level data from a file.",
          explanation: "Commonly used when working with binary files like images or serialized objects.",
          output: ""
        },
        {
          id: "jb_io197",
          title: "Files.copy() Method",
          difficulty: "medium",
          askedBy: ["Capgemini", "IBM India"],
          tags: ["nio", "file-copy"],
          question: "How does the Files.copy() method work?",
          hints: [
            "Source to destination",
            "NIO package"
          ],
          answer: "It copies a file or stream from a source to a destination.",
          explanation: "Files.copy() supports overwriting existing files and is faster than traditional stream-based copying.",
          output: ""
        },
        {
          id: "jb_io198",
          title: "ObjectOutputStream",
          difficulty: "hard",
          askedBy: ["Oracle India", "Paytm"],
          tags: ["serialization", "object-stream"],
          question: "What is the function of ObjectOutputStream?",
          hints: [
            "Serialization",
            "Write objects"
          ],
          answer: "It writes Java objects to an output stream.",
          explanation: "Used in serialization to convert objects into byte streams so they can be stored or transmitted.",
          output: ""
        },
        {
          id: "jb_io199",
          title: "Appending Data to File",
          difficulty: "easy",
          askedBy: ["Tech Mahindra", "Swiggy"],
          tags: ["filewriter", "append"],
          question: "How do you append data to an existing file using FileWriter?",
          hints: [
            "Append flag",
            "true parameter"
          ],
          answer: "By passing true as the second argument to FileWriter.",
          explanation: "Example: new FileWriter(\"data.txt\", true) appends data instead of overwriting.",
          output: ""
        },
        {
          id: "jb_io200",
          title: "FileReader vs FileWriter",
          difficulty: "medium",
          askedBy: ["Infosys", "Razorpay"],
          tags: ["filereader", "filewriter"],
          question: "What is the difference between FileReader and FileWriter?",
          hints: [
            "Read vs Write",
            "Character streams"
          ],
          answer: "FileReader reads character data, while FileWriter writes character data.",
          explanation: "Both are character-based streams mainly used for text files.",
          output: ""
        }
      ]
    }
  ]
};

export default javaStreamsAndFileIOInterviewQuestions;
