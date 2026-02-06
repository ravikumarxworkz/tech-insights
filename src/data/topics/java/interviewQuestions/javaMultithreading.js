// src/data/topics/java/interviewQuestions/javaMultithreading.js

export const javaMultithreadingInterviewQuestions = {
  conceptGroup: "Multithreading",
  totalQuestions: 14,
  difficulty: {
    easy: 7,
    medium: 5,
    hard: 2
  },
  pages: [
    {
      pageNumber: 19,
      questions: [
        {
          id: "jb_mt201",
          title: "Purpose of Multithreading",
          difficulty: "easy",
          askedBy: ["TCS", "Infosys", "Wipro"],
          tags: ["multithreading", "performance"],
          question: "What is the purpose of multithreading in Java?",
          hints: [
            "Parallel execution",
            "Better CPU utilization"
          ],
          answer: "Multithreading allows multiple tasks to run concurrently within a single program.",
          explanation: "It improves application performance, responsiveness, and efficient CPU utilization, especially in multi-core systems.",
          output: ""
        },
        {
          id: "jb_mt202",
          title: "Creating Thread Using Thread Class",
          difficulty: "easy",
          askedBy: ["Accenture", "Capgemini"],
          tags: ["thread", "inheritance"],
          question: "How do you create a thread by extending the Thread class?",
          hints: [
            "Extend Thread",
            "Override run()"
          ],
          answer: "By extending the Thread class and overriding the run() method.",
          explanation: "After overriding run(), call start() to begin thread execution.",
          output: ""
        },
        {
          id: "jb_mt203",
          title: "Thread vs Runnable",
          difficulty: "medium",
          askedBy: ["IBM India", "Oracle India"],
          tags: ["thread", "runnable"],
          question: "What is the difference between Thread and Runnable?",
          hints: [
            "Inheritance vs Interface",
            "Better design"
          ],
          answer: "Thread is a class, Runnable is an interface.",
          explanation: "Using Runnable is preferred as it allows multiple inheritance and better separation of task and thread.",
          output: ""
        },
        {
          id: "jb_mt204",
          title: "Starting a Thread",
          difficulty: "easy",
          askedBy: ["HCL", "Tech Mahindra"],
          tags: ["thread", "start"],
          question: "How do you start a thread in Java?",
          hints: [
            "start() method",
            "Not run()"
          ],
          answer: "By calling the start() method on a Thread object.",
          explanation: "start() creates a new thread and internally calls run().",
          output: ""
        },
        {
          id: "jb_mt205",
          title: "run() Method Role",
          difficulty: "easy",
          askedBy: ["Infosys", "Zoho"],
          tags: ["run-method", "thread"],
          question: "What is the role of the run() method in a thread?",
          hints: [
            "Thread logic",
            "Executed by JVM"
          ],
          answer: "run() contains the code executed by the thread.",
          explanation: "JVM invokes run() when start() is called.",
          output: ""
        },
        {
          id: "jb_mt206",
          title: "Thread Synchronization",
          difficulty: "medium",
          askedBy: ["Flipkart", "Swiggy"],
          tags: ["synchronization", "thread-safety"],
          question: "What is thread synchronization?",
          hints: [
            "Shared resources",
            "Race condition"
          ],
          answer: "Synchronization controls access to shared resources by multiple threads.",
          explanation: "It prevents data inconsistency caused by race conditions.",
          output: ""
        },
        {
          id: "jb_mt207",
          title: "Avoiding Deadlock",
          difficulty: "hard",
          askedBy: ["Amazon India", "Google India"],
          tags: ["deadlock", "concurrency"],
          question: "How do you avoid deadlock in Java?",
          hints: [
            "Lock ordering",
            "Timeouts"
          ],
          answer: "By avoiding circular wait and maintaining proper lock ordering.",
          explanation: "Using tryLock(), minimizing synchronized blocks, and avoiding nested locks help prevent deadlock.",
          output: ""
        },
        {
          id: "jb_mt208",
          title: "synchronized Keyword",
          difficulty: "medium",
          askedBy: ["TCS Digital", "SAP Labs"],
          tags: ["synchronized", "locking"],
          question: "What is the purpose of synchronized keyword?",
          hints: [
            "Mutual exclusion",
            "Thread safety"
          ],
          answer: "It ensures that only one thread accesses a critical section at a time.",
          explanation: "It prevents thread interference and memory consistency errors.",
          output: ""
        },
        {
          id: "jb_mt209",
          title: "wait() and notify()",
          difficulty: "hard",
          askedBy: ["IBM India", "Cisco India"],
          tags: ["inter-thread", "communication"],
          question: "How does wait() and notify() work in inter-thread communication?",
          hints: [
            "Object class methods",
            "Release lock"
          ],
          answer: "wait() pauses a thread and notify() wakes up a waiting thread.",
          explanation: "They must be called inside synchronized blocks and operate on object monitors.",
          output: ""
        },
        {
          id: "jb_mt210",
          title: "Thread Life Cycle",
          difficulty: "medium",
          askedBy: ["Infosys", "Accenture"],
          tags: ["thread-life-cycle"],
          question: "What is the thread life cycle in Java?",
          hints: [
            "States",
            "Execution flow"
          ],
          answer: "New → Runnable → Running → Waiting/Blocked → Terminated.",
          explanation: "Thread transitions between states based on execution and synchronization.",
          output: ""
        },
        {
          id: "jb_mt211",
          title: "Synchronized Method vs Block",
          difficulty: "medium",
          askedBy: ["Capgemini", "Mindtree"],
          tags: ["synchronized", "blocks"],
          question: "What is the difference between synchronized method and synchronized block?",
          hints: [
            "Granularity",
            "Performance"
          ],
          answer: "Synchronized block provides finer control than synchronized method.",
          explanation: "Blocks improve performance by locking only critical sections.",
          output: ""
        },
        {
          id: "jb_mt212",
          title: "Thread.sleep()",
          difficulty: "easy",
          askedBy: ["Wipro", "Persistent Systems"],
          tags: ["sleep", "thread"],
          question: "How does Thread.sleep() affect a thread’s execution?",
          hints: [
            "Pause execution",
            "Timed waiting"
          ],
          answer: "It pauses the current thread for a specified time.",
          explanation: "sleep() does not release locks held by the thread.",
          output: ""
        },
        {
          id: "jb_mt213",
          title: "volatile Keyword",
          difficulty: "medium",
          askedBy: ["Oracle India", "Paytm"],
          tags: ["volatile", "memory-visibility"],
          question: "What is the purpose of the volatile keyword in multithreading?",
          hints: [
            "Visibility",
            "Not atomic"
          ],
          answer: "It ensures visibility of variable changes across threads.",
          explanation: "volatile does not guarantee atomicity, only visibility.",
          output: ""
        },
        {
          id: "jb_mt214",
          title: "Thread Interruption",
          difficulty: "easy",
          askedBy: ["Infosys", "Razorpay"],
          tags: ["interrupt", "thread"],
          question: "How do you handle thread interruption?",
          hints: [
            "interrupt flag",
            "Graceful shutdown"
          ],
          answer: "By checking the interrupt status and handling InterruptedException.",
          explanation: "Threads should stop execution gracefully when interrupted.",
          output: ""
        }
      ]
    }
  ]
};

export default javaMultithreadingInterviewQuestions;
