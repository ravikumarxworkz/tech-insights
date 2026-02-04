export const dsaData = {
  title: "Data Structures & Algorithms",
  subtitle: "Master the logic for Top Product Companies",
  questions: [
    // ===========================
    // PATTERN PROGRAMS
    // ===========================
    {
      id: "dsa1",
      title: "1. Square Pattern",
      desc: "Print a square pattern of stars",
      output: "* * * * *\n* * * * *\n* * * * *\n* * * * *\n* * * * *",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int n = 5;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        python: `n = 5
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()`,
        csharp: `using System;
class Program {
    static void Main() {
        int n = 5;
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                Console.Write("* ");
            }
            Console.WriteLine();
        }
    }
}`
      }
    },
    {
      id: "dsa2",
      title: "2. Right Triangle Pattern",
      desc: "Print right-angled triangle pattern",
      output: "*\n* *\n* * *\n* * * *\n* * * * *",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int n = 5;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        python: `n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print("*", end=" ")
    print()`,
        csharp: `using System;
class Program {
    static void Main() {
        int n = 5;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                Console.Write("* ");
            }
            Console.WriteLine();
        }
    }
}`
      }
    },
    {
      id: "dsa3",
      title: "3. Floyd's Triangle",
      desc: "Print Floyd's triangle with numbers",
      output: "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int n = 5, num = 1;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(num++ + " ");
            }
            System.out.println();
        }
    }
}`,
        python: `n = 5
num = 1
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(num, end=" ")
        num += 1
    print()`,
        csharp: `using System;
class Program {
    static void Main() {
        int n = 5, num = 1;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                Console.Write(num++ + " ");
            }
            Console.WriteLine();
        }
    }
}`
      }
    },
    {
      id: "dsa4",
      title: "4. Inverted Half Pyramid",
      desc: "Print inverted right triangle",
      output: "* * * * *\n* * * *\n* * *\n* *\n*",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int n = 5;
        for(int i = n; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        python: `n = 5
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print("*", end=" ")
    print()`,
        csharp: `using System;
class Program {
    static void Main() {
        int n = 5;
        for(int i = n; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                Console.Write("* ");
            }
            Console.WriteLine();
        }
    }
}`
      }
    },

    // ===========================
    // NUMBER PROGRAMS
    // ===========================
    {
      id: "dsa5",
      title: "5. Check Even or Odd",
      desc: "Determine if a number is even or odd",
      output: "12 is Even",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int num = 12;
        if(num % 2 == 0)
            System.out.println(num + " is Even");
        else
            System.out.println(num + " is Odd");
    }
}`,
        python: `num = 12
if num % 2 == 0:
    print(f"{num} is Even")
else:
    print(f"{num} is Odd")`,
        csharp: `using System;
class Program {
    static void Main() {
        int num = 12;
        if(num % 2 == 0)
            Console.WriteLine($"{num} is Even");
        else
            Console.WriteLine($"{num} is Odd");
    }
}`
      }
    },
    {
      id: "dsa6",
      title: "6. Print Even Numbers Between Two Values",
      desc: "Print all even numbers in a given range",
      output: "Even numbers: 2 4 6 8 10",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int start = 1, end = 10;
        System.out.print("Even numbers: ");
        for(int i = start; i <= end; i++) {
            if(i % 2 == 0)
                System.out.print(i + " ");
        }
    }
}`,
        python: `start, end = 1, 10
print("Even numbers:", end=" ")
for i in range(start, end + 1):
    if i % 2 == 0:
        print(i, end=" ")`,
        csharp: `using System;
class Program {
    static void Main() {
        int start = 1, end = 10;
        Console.Write("Even numbers: ");
        for(int i = start; i <= end; i++) {
            if(i % 2 == 0)
                Console.Write(i + " ");
        }
    }
}`
      }
    },
    {
      id: "dsa7",
      title: "7. Print Odd Numbers Between Two Values",
      desc: "Print all odd numbers in a given range",
      output: "Odd numbers: 1 3 5 7 9",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int start = 1, end = 10;
        System.out.print("Odd numbers: ");
        for(int i = start; i <= end; i++) {
            if(i % 2 != 0)
                System.out.print(i + " ");
        }
    }
}`,
        python: `start, end = 1, 10
print("Odd numbers:", end=" ")
for i in range(start, end + 1):
    if i % 2 != 0:
        print(i, end=" ")`,
        csharp: `using System;
class Program {
    static void Main() {
        int start = 1, end = 10;
        Console.Write("Odd numbers: ");
        for(int i = start; i <= end; i++) {
            if(i % 2 != 0)
                Console.Write(i + " ");
        }
    }
}`
      }
    },
    {
      id: "dsa8",
      title: "8. Swap Two Numbers",
      desc: "Swap two numbers without using third variable",
      output: "Before: a=10, b=20\nAfter: a=20, b=10",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int a = 10, b = 20;
        System.out.println("Before: a=" + a + ", b=" + b);
        
        a = a + b;
        b = a - b;
        a = a - b;
        
        System.out.println("After: a=" + a + ", b=" + b);
    }
}`,
        python: `a, b = 10, 20
print(f"Before: a={a}, b={b}")

a, b = b, a

print(f"After: a={a}, b={b}")`,
        csharp: `using System;
class Program {
    static void Main() {
        int a = 10, b = 20;
        Console.WriteLine($"Before: a={a}, b={b}");
        
        a = a + b;
        b = a - b;
        a = a - b;
        
        Console.WriteLine($"After: a={a}, b={b}");
    }
}`
      }
    },
    {
      id: "dsa9",
      title: "9. Find Factors of a Number",
      desc: "Find all factors of a given number",
      output: "Factors of 24: 1 2 3 4 6 8 12 24",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int num = 24;
        System.out.print("Factors of " + num + ": ");
        for(int i = 1; i <= num; i++) {
            if(num % i == 0)
                System.out.print(i + " ");
        }
    }
}`,
        python: `num = 24
print(f"Factors of {num}:", end=" ")
for i in range(1, num + 1):
    if num % i == 0:
        print(i, end=" ")`,
        csharp: `using System;
class Program {
    static void Main() {
        int num = 24;
        Console.Write($"Factors of {num}: ");
        for(int i = 1; i <= num; i++) {
            if(num % i == 0)
                Console.Write(i + " ");
        }
    }
}`
      }
    },
    {
      id: "dsa10",
      title: "10. Check If a Number Is Prime",
      desc: "Check if a number is prime",
      output: "17 is Prime",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int num = 17;
        boolean isPrime = true;
        
        if(num <= 1) {
            isPrime = false;
        } else {
            for(int i = 2; i <= Math.sqrt(num); i++) {
                if(num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        System.out.println(num + (isPrime ? " is Prime" : " is not Prime"));
    }
}`,
        python: `import math

num = 17
is_prime = True

if num <= 1:
    is_prime = False
else:
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            is_prime = False
            break

print(f"{num} {'is Prime' if is_prime else 'is not Prime'}")`,
        csharp: `using System;
class Program {
    static void Main() {
        int num = 17;
        bool isPrime = true;
        
        if(num <= 1) {
            isPrime = false;
        } else {
            for(int i = 2; i <= Math.Sqrt(num); i++) {
                if(num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        Console.WriteLine($"{num} {(isPrime ? "is Prime" : "is not Prime")}");
    }
}`
      }
    },
    {
      id: "dsa11",
      title: "11. Generating Prime Numbers",
      desc: "Print all prime numbers up to N",
      output: "Primes up to 20: 2 3 5 7 11 13 17 19",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int n = 20;
        System.out.print("Primes up to " + n + ": ");
        
        for(int num = 2; num <= n; num++) {
            boolean isPrime = true;
            for(int i = 2; i <= Math.sqrt(num); i++) {
                if(num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime)
                System.out.print(num + " ");
        }
    }
}`,
        python: `import math

n = 20
print(f"Primes up to {n}:", end=" ")

for num in range(2, n + 1):
    is_prime = True
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num, end=" ")`,
        csharp: `using System;
class Program {
    static void Main() {
        int n = 20;
        Console.Write($"Primes up to {n}: ");
        
        for(int num = 2; num <= n; num++) {
            bool isPrime = true;
            for(int i = 2; i <= Math.Sqrt(num); i++) {
                if(num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime)
                Console.Write(num + " ");
        }
    }
}`
      }
    },
    {
      id: "dsa12",
      title: "12. Find Factorials of Numbers",
      desc: "Calculate factorial of a number",
      output: "Factorial of 5 is 120",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int num = 5;
        long factorial = 1;
        
        for(int i = 1; i <= num; i++) {
            factorial *= i;
        }
        
        System.out.println("Factorial of " + num + " is " + factorial);
    }
}`,
        python: `num = 5
factorial = 1

for i in range(1, num + 1):
    factorial *= i

print(f"Factorial of {num} is {factorial}")`,
        csharp: `using System;
class Program {
    static void Main() {
        int num = 5;
        long factorial = 1;
        
        for(int i = 1; i <= num; i++) {
            factorial *= i;
        }
        
        Console.WriteLine($"Factorial of {num} is {factorial}");
    }
}`
      }
    },

    // ===========================
    // STRING PROGRAMS
    // ===========================
    {
      id: "dsa13",
      title: "13. Reversing a String",
      desc: "Reverse the given string",
      output: "Original: Hello\nReversed: olleH",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        String str = "Hello";
        String reversed = "";
        
        for(int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        System.out.println("Original: " + str);
        System.out.println("Reversed: " + reversed);
    }
}`,
        python: `str = "Hello"
reversed_str = str[::-1]

print(f"Original: {str}")
print(f"Reversed: {reversed_str}")`,
        csharp: `using System;
class Program {
    static void Main() {
        string str = "Hello";
        char[] arr = str.ToCharArray();
        Array.Reverse(arr);
        string reversed = new string(arr);
        
        Console.WriteLine($"Original: {str}");
        Console.WriteLine($"Reversed: {reversed}");
    }
}`
      }
    },
    {
      id: "dsa14",
      title: "14. Checking for Palindromes",
      desc: "Check if string reads same forwards and backwards",
      output: "madam is a Palindrome",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        String str = "madam";
        String reversed = "";
        
        for(int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        if(str.equals(reversed))
            System.out.println(str + " is a Palindrome");
        else
            System.out.println(str + " is not a Palindrome");
    }
}`,
        python: `str = "madam"

if str == str[::-1]:
    print(f"{str} is a Palindrome")
else:
    print(f"{str} is not a Palindrome")`,
        csharp: `using System;
class Program {
    static void Main() {
        string str = "madam";
        char[] arr = str.ToCharArray();
        Array.Reverse(arr);
        string reversed = new string(arr);
        
        if(str == reversed)
            Console.WriteLine($"{str} is a Palindrome");
        else
            Console.WriteLine($"{str} is not a Palindrome");
    }
}`
      }
    },
    {
      id: "dsa15",
      title: "15. Character Frequency Count",
      desc: "Count frequency of each character in string",
      output: "h:1 e:1 l:3 o:2 w:1 r:1 d:1",
      code: {
        java: `import java.util.*;

class Main {
    public static void main(String[] args) {
        String str = "hello world";
        Map<Character, Integer> freq = new HashMap<>();
        
        for(char c : str.toCharArray()) {
            if(c != ' ')
                freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        freq.forEach((k, v) -> System.out.print(k + ":" + v + " "));
    }
}`,
        python: `from collections import Counter

str = "hello world"
freq = Counter(str.replace(" ", ""))

for char, count in freq.items():
    print(f"{char}:{count}", end=" ")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        string str = "hello world";
        var freq = str.Where(c => c != ' ')
                      .GroupBy(c => c)
                      .ToDictionary(g => g.Key, g => g.Count());
        
        foreach(var pair in freq) {
            Console.Write($"{pair.Key}:{pair.Value} ");
        }
    }
}`
      }
    },
    {
      id: "dsa16",
      title: "16. Find Count Frequency of Number",
      desc: "Count how many times a specific number appears",
      output: "Number 5 appears 3 times",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 5, 7, 5, 9};
        int target = 5;
        int count = 0;
        
        for(int num : arr) {
            if(num == target)
                count++;
        }
        
        System.out.println("Number " + target + " appears " + count + " times");
    }
}`,
        python: `arr = [1, 5, 3, 5, 7, 5, 9]
target = 5
count = arr.count(target)

print(f"Number {target} appears {count} times")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = {1, 5, 3, 5, 7, 5, 9};
        int target = 5;
        int count = arr.Count(x => x == target);
        
        Console.WriteLine($"Number {target} appears {count} times");
    }
}`
      }
    },
    {
      id: "dsa17",
      title: "17. Count Vowels and Consonants",
      desc: "Count number of vowels and consonants in string",
      output: "Vowels: 3, Consonants: 7",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        int vowels = 0, consonants = 0;
        str = str.toLowerCase();
        
        for(char c : str.toCharArray()) {
            if(c >= 'a' && c <= 'z') {
                if("aeiou".indexOf(c) != -1)
                    vowels++;
                else
                    consonants++;
            }
        }
        
        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
    }
}`,
        python: `str = "Hello World"
vowels = 0
consonants = 0

for c in str.lower():
    if c.isalpha():
        if c in 'aeiou':
            vowels += 1
        else:
            consonants += 1

print(f"Vowels: {vowels}, Consonants: {consonants}")`,
        csharp: `using System;
class Program {
    static void Main() {
        string str = "Hello World";
        int vowels = 0, consonants = 0;
        str = str.ToLower();
        
        foreach(char c in str) {
            if(char.IsLetter(c)) {
                if("aeiou".Contains(c))
                    vowels++;
                else
                    consonants++;
            }
        }
        
        Console.WriteLine($"Vowels: {vowels}, Consonants: {consonants}");
    }
}`
      }
    },

    // ===========================
    // ARRAY PROGRAMS
    // ===========================
    {
      id: "dsa18",
      title: "18. Print Array Elements in Reverse Order",
      desc: "Reverse the given array in-place",
      output: "Original: 1 2 3 4 5\nReversed: 5 4 3 2 1",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        System.out.print("Original: ");
        for(int i : arr) System.out.print(i + " ");
        
        int start = 0, end = arr.length - 1;
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        
        System.out.print("\nReversed: ");
        for(int i : arr) System.out.print(i + " ");
    }
}`,
        python: `arr = [1, 2, 3, 4, 5]

print("Original:", *arr)

start, end = 0, len(arr) - 1
while start < end:
    arr[start], arr[end] = arr[end], arr[start]
    start += 1
    end -= 1

print("Reversed:", *arr)`,
        csharp: `using System;
class Program {
    static void Main() {
        int[] arr = {1, 2, 3, 4, 5};
        
        Console.Write("Original: ");
        Console.WriteLine(string.Join(" ", arr));
        
        Array.Reverse(arr);
        
        Console.Write("Reversed: ");
        Console.WriteLine(string.Join(" ", arr));
    }
}`
      }
    },
    {
      id: "dsa19",
      title: "19. Find Maximum Element",
      desc: "Find the largest element in array",
      output: "Maximum element: 98",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {12, 45, 23, 98, 67, 34};
        int max = arr[0];
        
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max)
                max = arr[i];
        }
        
        System.out.println("Maximum element: " + max);
    }
}`,
        python: `arr = [12, 45, 23, 98, 67, 34]
max_element = max(arr)

print(f"Maximum element: {max_element}")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = {12, 45, 23, 98, 67, 34};
        int max = arr.Max();
        
        Console.WriteLine($"Maximum element: {max}");
    }
}`
      }
    },
    {
      id: "dsa20",
      title: "20. Find the Minimum Element",
      desc: "Find the smallest element in array",
      output: "Minimum element: 12",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {45, 23, 12, 98, 67, 34};
        int min = arr[0];
        
        for(int i = 1; i < arr.length; i++) {
            if(arr[i] < min)
                min = arr[i];
        }
        
        System.out.println("Minimum element: " + min);
    }
}`,
        python: `arr = [45, 23, 12, 98, 67, 34]
min_element = min(arr)

print(f"Minimum element: {min_element}")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = {45, 23, 12, 98, 67, 34};
        int min = arr.Min();
        
        Console.WriteLine($"Minimum element: {min}");
    }
}`
      }
    },
    {
      id: "dsa21",
      title: "21. Find Second Largest Element",
      desc: "Find the second largest element in array",
      output: "Second Largest: 67",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {12, 45, 23, 98, 67, 34};
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        
        for(int num : arr) {
            if(num > max) {
                secondMax = max;
                max = num;
            } else if(num > secondMax && num != max) {
                secondMax = num;
            }
        }
        
        System.out.println("Second Largest: " + secondMax);
    }
}`,
        python: `arr = [12, 45, 23, 98, 67, 34]
arr_sorted = sorted(set(arr), reverse=True)
second_largest = arr_sorted[1] if len(arr_sorted) > 1 else None

print(f"Second Largest: {second_largest}")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = {12, 45, 23, 98, 67, 34};
        var distinct = arr.Distinct().OrderByDescending(x => x).ToArray();
        int secondLargest = distinct.Length > 1 ? distinct[1] : distinct[0];
        
        Console.WriteLine($"Second Largest: {secondLargest}");
    }
}`
      }
    },
    {
      id: "dsa22",
      title: "22. Find Second Smallest Element",
      desc: "Find the second smallest element in array",
      output: "Second Smallest: 23",
      code: {
        java: `class Main {
    public static void main(String[] args) {
        int[] arr = {45, 23, 12, 98, 67, 34};
        int min = Integer.MAX_VALUE;
        int secondMin = Integer.MAX_VALUE;
        
        for(int num : arr) {
            if(num < min) {
                secondMin = min;
                min = num;
            } else if(num < secondMin && num != min) {
                secondMin = num;
            }
        }
        
        System.out.println("Second Smallest: " + secondMin);
    }
}`,
        python: `arr = [45, 23, 12, 98, 67, 34]
arr_sorted = sorted(set(arr))
second_smallest = arr_sorted[1] if len(arr_sorted) > 1 else None

print(f"Second Smallest: {second_smallest}")`,
        csharp: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = {45, 23, 12, 98, 67, 34};
        var distinct = arr.Distinct().OrderBy(x => x).ToArray();
        int secondSmallest = distinct.Length > 1 ? distinct[1] : distinct[0];
        
        Console.WriteLine($"Second Smallest: {secondSmallest}");
    }
}`
      }
    }
  ]
};