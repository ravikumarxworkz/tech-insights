// ======================= IMPORTS =======================

// 🟢 Core Java Basics
import { javaIntroductionInterviewQuestions } from "./javaIntroduction";
import { javaHistoryAndFeaturesInterviewQuestions } from "./javaHistoryAndFeatures";
import { javaJvmJdkJreInterviewQuestions } from "./javaJvmJdkJre";
import { javaCompilationExecutionInterviewQuestions } from "./javaCompilationExecution";
import { javaKeywordsIdentifiersInterviewQuestions } from "./javaKeywordsIdentifiers";
import { javaDataTypesInterviewQuestions } from "./javaDataTypes";
import { javaVariablesConstantsInterviewQuestions } from "./javaVariablesConstants";
import { javaTypesOfVariablesInterviewQuestions } from "./javaTypesOfVariables";
import { javaStringsQuestions } from "./javaStrings";
import { javaClassAndObjectsInterviewQuestions } from "./javaClassObjects";
// 🟢 OOP Foundations
 import { javaMethodsInterviewQuestions } from "./javaMethods";          // ❌ Methods (MISSING)
 import { javaThisKeywordInterviewQuestions } from "./javaThisKeyword";  // ❌ this keyword (MISSING)
import { javaOverloadingQuestions } from "./javaOverloading";
import { javaInheritanceInterviewQuestions } from "./inheritance";
import { javaOverridingQuestions } from "./javaOverriding";
import { javaTypesOfInheritanceQuestions } from "./javaTypesOfInheritance"; // ❌ Types of Inheritance (MISSING)
import { javaPolymorphismQuestions } from "./javaPolymorphism";
import { javaMethodBindingInterviewQuestions } from "./javaMethodBinding";
import { javaAbstractionQuestions } from "./javaAbstraction";
import { javaPackagesAndInterfacesInterviewQuestions } from "./javaPackagesAndInterfaces";
import { encapsulationInterviewQuestions } from "./encapsulation";

// 🟢 Constructors & Memory
import { javaConstructorsInterviewQuestions } from "./javaConstructors";
import { javaStaticInterviewQuestions } from "./javaStatic";
 import { javaFinalKeywordQuestions } from "./javaFinalKeyword";           // ❌ Final Keyword (MISSING)
import { javaWrapperClassQuestions } from "./javaWrapperClasses";        // ❌ Wrapper Classes (MISSING)
 import { javaClassLoadingQuestions } from "./javaClassLoading";          // ❌ Class Loading & toString() (MISSING)
import { javaGarbageCollectionQuestions } from "./javaGarbageCollection";

// 🟢 Advanced Core Java
import { javaTypeCastingInterviewQuestions } from "./javaTypeCasting";
import { javaPackagesInterviewQuestions } from "./javaPackages";         // ❌ Packages (MISSING)
import { javaAccessModifiersInterviewQuestions } from "./javaAccessModifiers";
import { javaExceptionHandlingInterviewQuestions } from "./javaExceptionHandling";

// 🟢 Collections & I/O
import { javaStreamsAndFileIOInterviewQuestions } from "./javaStreamsAndFileIO";
import { javaCollectionsFrameworkInterviewQuestions } from "./javaCollectionsFramework";

// 🟢 Multithreading
import { javaMultithreadingInterviewQuestions } from "./javaMultithreading";

// 🟢 Java 8+
import { java8FeaturesInterviewQuestions } from "./java8Features";


// ======================= FINAL ORDER =======================

export const allJavaInterviewQuestions = [

  // 🟢 Core Java Basics
  javaIntroductionInterviewQuestions,
  javaHistoryAndFeaturesInterviewQuestions,
  javaJvmJdkJreInterviewQuestions,
  javaCompilationExecutionInterviewQuestions,
  javaKeywordsIdentifiersInterviewQuestions,
  javaDataTypesInterviewQuestions,
  javaVariablesConstantsInterviewQuestions,
  javaTypesOfVariablesInterviewQuestions,
  javaStringsQuestions,
  javaClassAndObjectsInterviewQuestions,            // Introduction, History, JVM, Compilation, Keywords, Data Types, Variables
  javaStringsQuestions,                      // Strings
  javaClassAndObjectsInterviewQuestions,     // Class & Objects

  // 🟢 OOP Foundations
   javaMethodsInterviewQuestions,           // ❌ Methods
  javaThisKeywordInterviewQuestions,       // ❌ this keyword
  javaOverloadingQuestions,                  // Method Overloading
  javaInheritanceInterviewQuestions,         // Inheritance
  javaOverridingQuestions,                   // Method Overriding
  // javaTypesOfInheritanceQuestions,         // ❌ Types of Inheritance
  javaPolymorphismQuestions,                 // Polymorphism
  javaMethodBindingInterviewQuestions,       // Method Binding
  javaAbstractionQuestions,                  // Abstraction
  javaPackagesAndInterfacesInterviewQuestions, // Interfaces
  encapsulationInterviewQuestions,           // Encapsulation

  // 🟢 Constructors & Memory
  javaConstructorsInterviewQuestions,        // Constructors
  javaStaticInterviewQuestions,              // Static Keyword
   javaFinalKeywordQuestions,               // ❌ Final Keyword
   javaWrapperClassQuestions,               // ❌ Wrapper Classes
  javaClassLoadingQuestions,               // ❌ Class Loading & toString()
  javaGarbageCollectionQuestions,            // Garbage Collection

  // 🟢 Advanced Core Java
  javaTypeCastingInterviewQuestions,         // Type Casting
   javaPackagesInterviewQuestions,          // ❌ Packages
  javaAccessModifiersInterviewQuestions,     // Access Modifiers
  javaExceptionHandlingInterviewQuestions,   // Exception Handling

  // 🟢 Collections & I/O
  javaStreamsAndFileIOInterviewQuestions,    // Streams & File I/O
  javaCollectionsFrameworkInterviewQuestions,// Java Collections Framework

  // 🟢 Multithreading
  javaMultithreadingInterviewQuestions,      // Multithreading & Concurrency

  // 🟢 Java 8+
  java8FeaturesInterviewQuestions            // Java 8 Features
];
