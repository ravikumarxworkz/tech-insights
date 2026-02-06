// src/data/topics/java/concepts/encapsulation.js

export const encapsulationConcepts = {
    conceptGroup: "Encapsulation",
    totalConcepts: 40, // 20 pages × 2 concepts per page
    pages: [
        {
            pageNumber: 1,
            concepts: [
                {
                    id: "enc_c1",
                    title: "What is Encapsulation?",
                    type: "theory",
                    content: `Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (variables) and methods (functions) that operate on the data into a single unit called a class.

Key Points:
• Data hiding: Internal state is hidden from outside
• Access control: Use private, protected, public modifiers
• Getters and Setters: Controlled access to private fields
• Increases security and maintainability

Benefits:
1. Better control of class attributes and methods
2. Flexible code modification
3. Increased security of data
4. Easy to understand and maintain`,
                    codeExample: {
                        java: `public class Student {
    // Private fields (data hiding)
    private String name;
    private int age;
    private double gpa;
    
    // Public getter for name
    public String getName() {
        return name;
    }
    
    // Public setter for name with validation
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }
    
    // Public getter for age
    public int getAge() {
        return age;
    }
    
    // Public setter for age with validation
    public void setAge(int age) {
        if (age > 0 && age < 120) {
            this.age = age;
        }
    }
    
    // Public getter for GPA
    public double getGpa() {
        return gpa;
    }
    
    // Public setter for GPA with validation
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
}`,
                        python: `class Student:
    def __init__(self):
        self.__name = ""  # Private field
        self.__age = 0
        self.__gpa = 0.0
    
    # Getter for name
    def get_name(self):
        return self.__name
    
    # Setter for name with validation
    def set_name(self, name):
        if name and name.strip():
            self.__name = name
    
    # Getter for age
    def get_age(self):
        return self.__age
    
    # Setter for age with validation
    def set_age(self, age):
        if 0 < age < 120:
            self.__age = age
    
    # Getter for GPA
    def get_gpa(self):
        return self.__gpa
    
    # Setter for GPA with validation
    def set_gpa(self, gpa):
        if 0.0 <= gpa <= 4.0:
            self.__gpa = gpa`
                    },
                    output: `// Using the encapsulated class
Student student = new Student();
student.setName("John Doe");
student.setAge(20);
student.setGpa(3.75);

System.out.println("Name: " + student.getName());
System.out.println("Age: " + student.getAge());
System.out.println("GPA: " + student.getGpa());

// Output:
// Name: John Doe
// Age: 20
// GPA: 3.75`
                },
                {
                    id: "enc_c2",
                    title: "Real-World Example: Bank Account",
                    type: "example",
                    content: `Let's see a practical example of encapsulation using a Bank Account class. This demonstrates how encapsulation protects sensitive data and ensures business logic is maintained.

In this example:
• Balance is private and cannot be directly modified
• Deposits and withdrawals go through methods with validation
• Account holder information is protected
• Business rules are enforced (no negative balance, minimum balance, etc.)`,
                    codeExample: {
                        java: `public class BankAccount {
    // Private fields - cannot be accessed directly
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private static final double MINIMUM_BALANCE = 500.0;
    
    // Constructor
    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        if (initialBalance >= MINIMUM_BALANCE) {
            this.balance = initialBalance;
        } else {
            this.balance = MINIMUM_BALANCE;
            System.out.println("Initial balance set to minimum: " + MINIMUM_BALANCE);
        }
    }
    
    // Deposit method with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount!");
        }
    }
    
    // Withdraw method with validation
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid withdrawal amount!");
        } else if (balance - amount < MINIMUM_BALANCE) {
            System.out.println("Insufficient balance! Minimum balance required: $" + MINIMUM_BALANCE);
        } else {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("New Balance: $" + balance);
        }
    }
    
    // Getter for balance (read-only)
    public double getBalance() {
        return balance;
    }
    
    // Getter for account info
    public String getAccountInfo() {
        return "Account: " + accountNumber + ", Holder: " + accountHolder;
    }
}`,
                        python: `class BankAccount:
    MINIMUM_BALANCE = 500.0
    
    def __init__(self, account_number, account_holder, initial_balance):
        self.__account_number = account_number
        self.__account_holder = account_holder
        if initial_balance >= self.MINIMUM_BALANCE:
            self.__balance = initial_balance
        else:
            self.__balance = self.MINIMUM_BALANCE
            print(f"Initial balance set to minimum: {self.MINIMUM_BALANCE}")
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: '\${amount}")
             print(f"New Balance: \${self.__balance}")
        else:
            print("Invalid deposit amount!")
    
    def withdraw(self, amount):
        if amount <= 0:
            print("Invalid withdrawal amount!")
        elif self.__balance - amount < self.MINIMUM_BALANCE:
            print(f"Insufficient balance! Minimum required: \${self.MINIMUM_BALANCE}")
        else:
            self.__balance -= amount
            print(f"Deposited: '\${amount}")
            print(f"New Balance: \${self.__balance}")
    
    def get_balance(self):
        return self.__balance
    
    def get_account_info(self):
        return f"Account: {self.__account_number}, Holder: {self.__account_holder}"`
                    },
                    output: `// Creating and using a bank account
BankAccount account = new BankAccount("ACC001", "Alice Smith", 1000.0);

account.deposit(500.0);
// Output: Deposited: $500.0
//         New Balance: $1500.0

account.withdraw(300.0);
// Output: Withdrawn: $300.0
//         New Balance: $1200.0

account.withdraw(800.0);
// Output: Insufficient balance! Minimum balance required: $500.0

System.out.println(account.getAccountInfo());
// Output: Account: ACC001, Holder: Alice Smith

System.out.println("Balance: $" + account.getBalance());
// Output: Balance: $1200.0`
                }
            ]
        },
        {
            pageNumber: 2,
            concepts: [
                {
                    id: "enc_c3",
                    title: "Access Modifiers in Java",
                    type: "theory",
                    content: `Access modifiers control the visibility and accessibility of classes, methods, and variables in Java. They are fundamental to achieving encapsulation.

Types of Access Modifiers:

1. PRIVATE (most restrictive)
   • Accessible only within the same class
   • Best for data hiding
   
2. DEFAULT (package-private)
   • Accessible within the same package
   • No keyword needed
   
3. PROTECTED
   • Accessible within package and subclasses
   • Used for inheritance
   
4. PUBLIC (least restrictive)
   • Accessible from anywhere
   • Use carefully

Best Practices:
• Keep fields private
• Provide public getters/setters when needed
• Use protected for inheritance
• Make methods private if only used internally`,
                    codeExample: {
                        java: `// Access Modifiers Demo
public class AccessModifiersDemo {
    
    // Private - only accessible within this class
    private String privateField = "Private";
    
    // Default (package-private) - accessible within package
    String defaultField = "Default";
    
    // Protected - accessible within package and subclasses
    protected String protectedField = "Protected";
    
    // Public - accessible from anywhere
    public String publicField = "Public";
    
    // Private method - internal helper
    private void privateMethod() {
        System.out.println("Private method called");
    }
    
    // Public method - can be called from anywhere
    public void publicMethod() {
        System.out.println("Public method called");
        privateMethod(); // Can call private method internally
    }
    
    // Protected method - for inheritance
    protected void protectedMethod() {
        System.out.println("Protected method called");
    }
    
    // Default method - within package
    void defaultMethod() {
        System.out.println("Default method called");
    }
}

// Usage in same class
class Test {
    public static void main(String[] args) {
        AccessModifiersDemo obj = new AccessModifiersDemo();
        
        // obj.privateField; // ❌ ERROR - not accessible
        // obj.privateMethod(); // ❌ ERROR - not accessible
        
        obj.publicField = "Modified"; // ✅ OK
        obj.publicMethod(); // ✅ OK
        
        obj.protectedField = "Modified"; // ✅ OK (same package)
        obj.defaultField = "Modified"; // ✅ OK (same package)
    }
}`,
                        python: `# Python doesn't have strict access modifiers
# Uses naming conventions instead

class AccessModifiersDemo:
    def __init__(self):
        # Public (no underscore)
        self.public_field = "Public"
        
        # Protected (single underscore) - convention only
        self._protected_field = "Protected"
        
        # Private (double underscore) - name mangling
        self.__private_field = "Private"
    
    # Private method
    def __private_method(self):
        print("Private method called")
    
    # Public method
    def public_method(self):
        print("Public method called")
        self.__private_method()  # Can call private internally
    
    # Protected method
    def _protected_method(self):
        print("Protected method called")

# Usage
obj = AccessModifiersDemo()
obj.public_method()  # ✅ OK
obj._protected_method()  # ⚠️ Works but convention says don't
# obj.__private_method()  # ❌ AttributeError`
                    },
                    output: `Access Modifier Visibility Table:

Modifier    | Class | Package | Subclass | World
------------|-------|---------|----------|-------
private     |  ✅   |   ❌    |    ❌    |  ❌
default     |  ✅   |   ✅    |    ❌    |  ❌
protected   |  ✅   |   ✅    |    ✅    |  ❌
public      |  ✅   |   ✅    |    ✅    |  ✅`
                },
                {
                    id: "enc_c4",
                    title: "Getters and Setters Best Practices",
                    type: "example",
                    content: `Getters and setters (also called accessors and mutators) are the proper way to access and modify private fields. However, not all fields need both getter and setter.

When to provide:
• Getter only: Read-only fields (immutable)
• Setter only: Write-only fields (rare)
• Both: When controlled modification is needed
• Neither: Internal implementation details

Validation in Setters:
• Check for null values
• Validate ranges
• Enforce business rules
• Throw exceptions for invalid input`,
                    codeExample: {
                        java: `public class Employee {
    private final String employeeId; // Immutable - getter only
    private String name;
    private int age;
    private double salary;
    private String department;
    
    // Constructor
    public Employee(String employeeId, String name, int age) {
        this.employeeId = employeeId;
        this.name = name;
        setAge(age); // Use setter for validation
    }
    
    // Getter only - employeeId is immutable
    public String getEmployeeId() {
        return employeeId;
    }
    
    // Name - with validation
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name.trim();
    }
    
    // Age - with range validation
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age < 18 || age > 65) {
            throw new IllegalArgumentException("Age must be between 18 and 65");
        }
        this.age = age;
    }
    
    // Salary - with business logic
    public double getSalary() {
        return salary;
    }
    
    public void setSalary(double salary) {
        if (salary < 0) {
            throw new IllegalArgumentException("Salary cannot be negative");
        }
        this.salary = salary;
    }
    
    // Department - simple getter/setter
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    // Method to give raise (encapsulated business logic)
    public void giveRaise(double percentage) {
        if (percentage < 0 || percentage > 50) {
            throw new IllegalArgumentException("Raise must be between 0% and 50%");
        }
        this.salary += this.salary * (percentage / 100);
        System.out.println("Salary increased by " + percentage + "%");
    }
}`,
                        python: `class Employee:
    def __init__(self, employee_id, name, age):
        self.__employee_id = employee_id  # Immutable
        self.__name = name
        self.set_age(age)  # Use setter for validation
        self.__salary = 0.0
        self.__department = ""
    
    # Getter only - immutable field
    @property
    def employee_id(self):
        return self.__employee_id
    
    # Name with validation
    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, name):
        if not name or not name.strip():
            raise ValueError("Name cannot be empty")
        self.__name = name.strip()
    
    # Age with validation
    def get_age(self):
        return self.__age
    
    def set_age(self, age):
        if age < 18 or age > 65:
            raise ValueError("Age must be between 18 and 65")
        self.__age = age
    
    # Salary with validation
    @property
    def salary(self):
        return self.__salary
    
    @salary.setter
    def salary(self, salary):
        if salary < 0:
            raise ValueError("Salary cannot be negative")
        self.__salary = salary
    
    # Give raise method
    def give_raise(self, percentage):
        if percentage < 0 or percentage > 50:
            raise ValueError("Raise must be between 0% and 50%")
        self.__salary += self.__salary * (percentage / 100)
        print(f"Salary increased by {percentage}%")`
                    },
                    output: `// Creating and using Employee
Employee emp = new Employee("EMP001", "John Doe", 30);

// Reading immutable field
System.out.println("Employee ID: " + emp.getEmployeeId());
// Output: Employee ID: EMP001

// Setting salary
emp.setSalary(50000);
System.out.println("Initial Salary: $" + emp.getSalary());
// Output: Initial Salary: $50000.0

// Giving a raise
emp.giveRaise(10);
// Output: Salary increased by 10%
System.out.println("New Salary: $" + emp.getSalary());
// Output: New Salary: $55000.0

// Validation in action
try {
    emp.setAge(70); // Invalid age
} catch (IllegalArgumentException e) {
    System.out.println("Error: " + e.getMessage());
}
// Output: Error: Age must be between 18 and 65`
                }
            ]
        }
        // ... pages 3-20 would continue here
    ]
};

export default encapsulationConcepts;
