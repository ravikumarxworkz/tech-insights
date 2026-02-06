// src/data/topics/java/interviewQuestions/encapsulation.js

export const encapsulationInterviewQuestions = {
    conceptGroup: "Encapsulation",
    totalQuestions: 45,
    difficulty: {
        easy: 15,
        medium: 20,
        hard: 10
    },
    pages: [
        {
            pageNumber: 4,
            questions: [
                {
                    id: "enc_iq1",
                    title: "Create a Student Class with Encapsulation",
                    difficulty: "easy",
                    askedBy: ["Amazon", "Google", "Microsoft"],
                    tags: ["encapsulation", "class-design", "getters-setters"],
                    question: `Create a Student class with the following requirements:

1. Private fields: name (String), rollNumber (int), marks (double)
2. Provide appropriate getters and setters
3. Add validation:
   - name should not be null or empty
   - rollNumber should be positive
   - marks should be between 0 and 100
4. Add a method to calculate grade based on marks:
   - 90-100: Grade A
   - 75-89: Grade B
   - 60-74: Grade C
   - 50-59: Grade D
   - Below 50: Grade F`,
                    hints: [
                        "Use private access modifier for all fields",
                        "Implement validation in setter methods",
                        "Create a separate method for grade calculation",
                        "Consider throwing exceptions for invalid input"
                    ],
                    solution: {
                        java: `public class Student {
    // Private fields
    private String name;
    private int rollNumber;
    private double marks;
    
    // Constructor
    public Student(String name, int rollNumber, double marks) {
        setName(name);
        setRollNumber(rollNumber);
        setMarks(marks);
    }
    
    // Getters and Setters with validation
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
        this.name = name;
    }
    
    public int getRollNumber() {
        return rollNumber;
    }
    
    public void setRollNumber(int rollNumber) {
        if (rollNumber <= 0) {
            throw new IllegalArgumentException("Roll number must be positive");
        }
        this.rollNumber = rollNumber;
    }
    
    public double getMarks() {
        return marks;
    }
    
    public void setMarks(double marks) {
        if (marks < 0 || marks > 100) {
            throw new IllegalArgumentException("Marks must be between 0 and 100");
        }
        this.marks = marks;
    }
    
    // Method to calculate grade
    public char calculateGrade() {
        if (marks >= 90) return 'A';
        else if (marks >= 75) return 'B';
        else if (marks >= 60) return 'C';
        else if (marks >= 50) return 'D';
        else return 'F';
    }
    
    // Display student information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + calculateGrade());
    }
}

// Main class to test
class Main {
    public static void main(String[] args) {
        // Creating student object
        Student student = new Student("Alice Johnson", 101, 85.5);
        student.displayInfo();
        
        System.out.println("\\n--- Updating marks ---");
        student.setMarks(92.0);
        student.displayInfo();
        
        // Testing validation
        try {
            student.setMarks(150); // Invalid marks
        } catch (IllegalArgumentException e) {
            System.out.println("\\nError: " + e.getMessage());
        }
    }
}`,
                        python: `class Student:
    def __init__(self, name, roll_number, marks):
        self.__name = None
        self.__roll_number = None
        self.__marks = None
        
        self.set_name(name)
        self.set_roll_number(roll_number)
        self.set_marks(marks)
    
    # Getters and Setters
    def get_name(self):
        return self.__name
    
    def set_name(self, name):
        if not name or not name.strip():
            raise ValueError("Name cannot be null or empty")
        self.__name = name
    
    def get_roll_number(self):
        return self.__roll_number
    
    def set_roll_number(self, roll_number):
        if roll_number <= 0:
            raise ValueError("Roll number must be positive")
        self.__roll_number = roll_number
    
    def get_marks(self):
        return self.__marks
    
    def set_marks(self, marks):
        if marks < 0 or marks > 100:
            raise ValueError("Marks must be between 0 and 100")
        self.__marks = marks
    
    def calculate_grade(self):
        if self.__marks >= 90:
            return 'A'
        elif self.__marks >= 75:
            return 'B'
        elif self.__marks >= 60:
            return 'C'
        elif self.__marks >= 50:
            return 'D'
        else:
            return 'F'
    
    def display_info(self):
        print(f"Name: {self.__name}")
        print(f"Roll Number: {self.__roll_number}")
        print(f"Marks: {self.__marks}")
        print(f"Grade: {self.calculate_grade()}")

# Testing
student = Student("Alice Johnson", 101, 85.5)
student.display_info()

print("\\n--- Updating marks ---")
student.set_marks(92.0)
student.display_info()`
                    },
                    explanation: `This solution demonstrates proper encapsulation:

1. Data Hiding:
   - All fields are private
   - Cannot be accessed directly from outside

2. Controlled Access:
   - Public getters provide read access
   - Public setters provide write access with validation

3. Validation:
   - Name: Checks for null/empty strings
   - Roll Number: Ensures positive values
   - Marks: Validates range (0-100)

4. Business Logic:
   - calculateGrade() encapsulates grading logic
   - Can be modified without affecting other code

Time Complexity: O(1) for all operations
Space Complexity: O(1)`,
                    output: `Name: Alice Johnson
Roll Number: 101
Marks: 85.5
Grade: B

--- Updating marks ---
Name: Alice Johnson
Roll Number: 101
Marks: 92.0
Grade: A

Error: Marks must be between 0 and 100`
                },
                {
                    id: "enc_iq2",
                    title: "Design a Secure Password Manager Class",
                    difficulty: "medium",
                    askedBy: ["Google", "Facebook", "Adobe"],
                    tags: ["encapsulation", "security", "validation"],
                    question: `Design a PasswordManager class with the following features:

1. Store username and password (both private)
2. Password should never be directly accessible
3. Implement password strength validation:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one digit
   - At least one special character (@, #, $, %, &)
4. Provide a method to verify password without exposing it
5. Track number of failed login attempts (max 3)
6. Lock account after 3 failed attempts`,
                    hints: [
                        "Never provide a getter for password",
                        "Use regex for password validation",
                        "Implement a verifyPassword() method instead of getPassword()",
                        "Keep track of failed attempts in a private field"
                    ],
                    solution: {
                        java: `import java.util.regex.*;

public class PasswordManager {
    private String username;
    private String password;
    private int failedAttempts;
    private boolean isLocked;
    private static final int MAX_ATTEMPTS = 3;
    
    // Constructor
    public PasswordManager(String username, String password) {
        setUsername(username);
        setPassword(password);
        this.failedAttempts = 0;
        this.isLocked = false;
    }
    
    // Username getter/setter
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }
        this.username = username;
    }
    
    // Password setter with validation (NO GETTER!)
    public void setPassword(String password) {
        if (!isPasswordStrong(password)) {
            throw new IllegalArgumentException(
                "Password must be at least 8 characters with uppercase, " +
                "lowercase, digit, and special character"
            );
        }
        this.password = password;
        this.failedAttempts = 0; // Reset on password change
        this.isLocked = false;
    }
    
    // Validate password strength
    private boolean isPasswordStrong(String password) {
        if (password == null || password.length() < 8) {
            return false;
        }
        
        String pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@#$%&]).*$";
        return Pattern.matches(pattern, password);
    }
    
    // Verify password (instead of getter)
    public boolean verifyPassword(String inputPassword) {
        if (isLocked) {
            System.out.println("Account is locked due to too many failed attempts");
            return false;
        }
        
        if (password.equals(inputPassword)) {
            failedAttempts = 0; // Reset on success
            System.out.println("Login successful!");
            return true;
        } else {
            failedAttempts++;
            System.out.println("Incorrect password. Attempt " + failedAttempts + "/" + MAX_ATTEMPTS);
            
            if (failedAttempts >= MAX_ATTEMPTS) {
                isLocked = true;
                System.out.println("Account locked!");
            }
            return false;
        }
    }
    
    // Check if account is locked
    public boolean isAccountLocked() {
        return isLocked;
    }
    
    // Unlock account (admin function)
    public void unlockAccount() {
        this.isLocked = false;
        this.failedAttempts = 0;
        System.out.println("Account unlocked");
    }
}

// Main class
class Main {
    public static void main(String[] args) {
        PasswordManager pm = new PasswordManager("john_doe", "Pass@123");
        
        // Attempt logins
        pm.verifyPassword("wrong1");     // Attempt 1/3
        pm.verifyPassword("wrong2");     // Attempt 2/3
        pm.verifyPassword("wrong3");     // Attempt 3/3 - Account locked
        pm.verifyPassword("Pass@123");   // Locked - won't work
        
        // Unlock and try again
        pm.unlockAccount();
        pm.verifyPassword("Pass@123");   // Success!
    }
}`,
                        python: `import re

class PasswordManager:
    MAX_ATTEMPTS = 3
    
    def __init__(self, username, password):
        self.__username = None
        self.__password = None
        self.__failed_attempts = 0
        self.__is_locked = False
        
        self.set_username(username)
        self.set_password(password)
    
    def get_username(self):
        return self.__username
    
    def set_username(self, username):
        if not username or not username.strip():
            raise ValueError("Username cannot be empty")
        self.__username = username
    
    def set_password(self, password):
        if not self.__is_password_strong(password):
            raise ValueError(
                "Password must be at least 8 characters with uppercase, "
                "lowercase, digit, and special character"
            )
        self.__password = password
        self.__failed_attempts = 0
        self.__is_locked = False
    
    def __is_password_strong(self, password):
        if not password or len(password) < 8:
            return False
        
        pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%&]).*$"
        return bool(re.match(pattern, password))
    
    def verify_password(self, input_password):
        if self.__is_locked:
            print("Account is locked due to too many failed attempts")
            return False
        
        if self.__password == input_password:
            self.__failed_attempts = 0
            print("Login successful!")
            return True
        else:
            self.__failed_attempts += 1
            print(f"Incorrect password. Attempt {self.__failed_attempts}/{self.MAX_ATTEMPTS}")
            
            if self.__failed_attempts >= self.MAX_ATTEMPTS:
                self.__is_locked = True
                print("Account locked!")
            return False
    
    def is_account_locked(self):
        return self.__is_locked
    
    def unlock_account(self):
        self.__is_locked = False
        self.__failed_attempts = 0
        print("Account unlocked")

# Testing
pm = PasswordManager("john_doe", "Pass@123")

pm.verify_password("wrong1")
pm.verify_password("wrong2")
pm.verify_password("wrong3")
pm.verify_password("Pass@123")

pm.unlock_account()
pm.verify_password("Pass@123")`
                    },
                    explanation: `This solution demonstrates advanced encapsulation principles:

1. Security Through Encapsulation:
   - Password is private with NO getter method
   - Only verifyPassword() method to check, never expose

2. Validation Logic:
   - isPasswordStrong() is private helper method
   - Uses regex for complex password requirements

3. State Management:
   - Tracks failed attempts privately
   - Automatically locks after max attempts

4. Business Logic Encapsulation:
   - All security logic is inside the class
   - External code can't bypass security measures

Key Principle: Sensitive data (password) should NEVER be directly accessible, even with getters.

Time Complexity: O(n) for password validation (where n is password length)
Space Complexity: O(1)`,
                    output: `Incorrect password. Attempt 1/3
Incorrect password. Attempt 2/3
Incorrect password. Attempt 3/3
Account locked!
Account is locked due to too many failed attempts
Account unlocked
Login successful!`
                }
                // ... more questions for page 1
            ]
        }
        // ... pages 2-9 would continue here (45 questions total, ~5 per page)
    ]
};

export default encapsulationInterviewQuestions;
