export const topicData = {
  java: {
    title: "Java Mastery",
    subtitle: "Core concepts, OOPs, and Interview Questions",
    questions: [
      {
        id: "q1",
        title: "1. Encapsulation in Java",
        desc: "Encapsulation is the mechanism of wrapping data (variables) and code acting on the data (methods) together as a single unit.",
        output: "Employee Name: Ravi\nAge: 25",
        code: {
          java: `
class Employee {
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        emp.setName("Ravi");
        emp.setAge(25);
        System.out.println("Employee Name: " + emp.getName());
        System.out.println("Age: " + emp.getAge());
    }
}`
        }
      },
      {
        id: "q2",
        title: "2. Polymorphism (Overloading vs Overriding)",
        desc: "Polymorphism allows us to perform a single action in different ways.",
        output: "Dog barks\nCat meows",
        code: {
          java: `
class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("Dog barks"); }
}

class Cat extends Animal {
    void sound() { System.out.println("Cat meows"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
        a = new Cat();
        a.sound();
    }
}`
        }
      },
      {
         id: "q3",
         title: "3. Check Palindrome Number",
         desc: "A common interview question to check if a number reads the same backward as forward.",
         output: "121 is a Palindrome",
         code: {
             java: `
public class Main {
    public static void main(String[] args) {
        int r, sum = 0, temp;
        int n = 121;
        
        temp = n;
        while (n > 0) {
            r = n % 10;
            sum = (sum * 10) + r;
            n = n / 10;
        }
        
        if (temp == sum)
            System.out.println(temp + " is a Palindrome");
        else
            System.out.println(temp + " is not a Palindrome");
    }
}
             `
         }
      }
      // Added simpler placeholders for brevity in this file, but UI will loop through all.
      // In a real app we would have 10 full objects here.
    ]
  },
  
  dsa: {
      title: "Data Structures & Algorithms",
      subtitle: "Master the logic for Top Product Companies",
      questions: [
          {
              id: "dsa1",
              title: "1. Reverse an Array",
              desc: "Reverse the given array in-place without using extra space.",
              output: "Reversed Array: 5 4 3 2 1",
              code: {
                  java: `
class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int start = 0, end = arr.length - 1;
        
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        
        System.out.print("Reversed Array: ");
        for(int i : arr) System.out.print(i + " ");
    }
}`,
                  python: `
arr = [1, 2, 3, 4, 5]
start, end = 0, len(arr) - 1

while start < end:
    arr[start], arr[end] = arr[end], arr[start]
    start += 1
    end -= 1

print("Reversed Array:", *arr)
                  `,
                  csharp: `
using System;
class Program {
    static void Main() {
        int[] arr = {1, 2, 3, 4, 5};
        Array.Reverse(arr);
        Console.Write("Reversed Array: " + string.Join(" ", arr));
    }
}
                  `
              }
          }
      ]
  }
};
