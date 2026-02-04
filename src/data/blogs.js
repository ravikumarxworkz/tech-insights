// src/data/blogs.js
export const blogPosts = [
  {
    id: 'blog-1',
    title: 'How to Host Your React App on GitHub Pages for Free',
    slug: 'host-react-github-pages',
    excerpt: 'Step-by-step guide to deploy your React.js project on GitHub Pages - absolutely free hosting!',
    content: `
# How to Host Your React App on GitHub Pages

Many developers don't know that GitHub offers **free hosting** for static websites through GitHub Pages. Here's how to deploy your React app in minutes.

## Prerequisites
- A React app (created with create-react-app or Vite)
- A GitHub account
- Git installed on your computer

## Step 1: Install gh-pages Package

\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

## Step 2: Update package.json

Add these lines to your package.json:

\`\`\`json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
\`\`\`

## Step 3: Deploy

\`\`\`bash
npm run deploy
\`\`\`

That's it! Your site will be live at https://yourusername.github.io/repository-name

## Troubleshooting Tips
- Make sure your repository is public
- Enable GitHub Pages in repository settings
- Use HashRouter instead of BrowserRouter for React Router
- Wait 5-10 minutes for first deployment

## Pro Tips
- Use custom domain for professional look
- Set up GitHub Actions for auto-deployment
- Enable HTTPS in GitHub Pages settings
    `,
    author: 'Ravikumar S Kumbar',
    date: '2026-02-05',
    category: 'DevOps',
    tags: ['React', 'GitHub', 'Deployment', 'Free Hosting'],
    readTime: '5 min read',
    thumbnail: '🚀'
  },
  {
    id: 'blog-2',
    title: 'Git & GitHub: What Most Developers Get Wrong',
    slug: 'git-github-mistakes',
    excerpt: 'Common mistakes developers make with Git and how to avoid them. Learn the difference between Git and GitHub.',
    content: `
# Git & GitHub: What Most Developers Get Wrong

After teaching hundreds of developers, I've noticed the same mistakes repeated. Let's fix them!

## Mistake #1: Thinking Git = GitHub

**Git** is the version control software on your computer.
**GitHub** is a cloud service that hosts Git repositories.

Think of it like:
- Git = Word (software)
- GitHub = Google Docs (online service)

## Mistake #2: Not Using Branches

Many beginners work directly on main/master branch. This is dangerous!

### Correct Workflow:
\`\`\`bash
# Create feature branch
git checkout -b feature/login-page

# Make changes and commit
git add .
git commit -m "Add login functionality"

# Push to GitHub
git push origin feature/login-page

# Create Pull Request on GitHub
# Merge after review
\`\`\`

## Mistake #3: Poor Commit Messages

❌ Bad: "fixed bug"
✅ Good: "Fix null pointer exception in user authentication"

## Mistake #4: Not Using .gitignore

Always create .gitignore to exclude:
- node_modules/
- .env files
- build/ or dist/
- IDE files (.vscode, .idea)

## Mistake #5: Committing Too Much or Too Little

**Too much**: Every single line change
**Too little**: 500 lines in one commit

**Sweet spot**: Logical units of work

## Pro Tips
1. Write commits in present tense: "Add feature" not "Added feature"
2. Use git stash for temporary work
3. Pull before you push
4. Learn to read git log
5. Practice on personal projects first
    `,
    author: 'Ravikumar S Kumbar',
    date: '2026-02-04',
    category: 'Git',
    tags: ['Git', 'GitHub', 'Version Control', 'Best Practices'],
    readTime: '8 min read',
    thumbnail: '📚'
  },
  {
    id: 'blog-3',
    title: 'Building a Professional Developer Resume in 2026',
    slug: 'developer-resume-tips',
    excerpt: 'Stand out from 1000+ applications. What tech recruiters actually look for in developer resumes.',
    content: `
# Building a Professional Developer Resume

Your resume has **6 seconds** to impress. Here's how to make them count.

## The Perfect Structure

### 1. Header (Clear & Simple)
\`\`\`
Your Name
Software Developer
Email | Phone | GitHub | LinkedIn | Portfolio
Bangalore, India
\`\`\`

### 2. Summary (2-3 lines)
❌ "Passionate developer seeking opportunities..."
✅ "Full-stack developer with 2+ years building scalable web apps using React, Node.js, and MongoDB. Delivered 15+ projects serving 10,000+ users."

### 3. Technical Skills (Organized)
\`\`\`
Languages: Java, Python, JavaScript, C#
Frontend: React.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express, .NET Core, Spring Boot
Database: MySQL, MongoDB, PostgreSQL
Tools: Git, Docker, VS Code, Postman
\`\`\`

### 4. Projects (Most Important!)
For each project include:
- **Bold project name** + Tech stack
- 2-3 bullet points: What it does, Tech used, Impact/Results
- GitHub link + Live demo link

Example:
\`\`\`
E-Commerce Platform | React, Node.js, MongoDB, Stripe
• Built full-stack shopping site with 500+ products and payment integration
• Implemented JWT authentication and role-based access control
• Reduced page load time by 40% using lazy loading and code splitting
🔗 GitHub | Live Demo
\`\`\`

### 5. Experience (If Any)
Use STAR method:
- Situation
- Task
- Action
- Result (with numbers!)

### 6. Education
\`\`\`
Bachelor of Engineering in Computer Science
University Name | 2020-2024 | CGPA: 8.5/10
\`\`\`

## Common Mistakes to Avoid

❌ Using fancy templates (ATS can't read them)
❌ More than 2 pages for freshers
❌ No GitHub links
❌ Listing technologies you barely know
❌ Generic objectives
❌ Spelling/grammar errors

## Pro Tips

✅ Use simple, ATS-friendly template
✅ Quantify everything: "Increased performance by 30%"
✅ Tailor resume for each job
✅ Keep it updated on GitHub (use GitHub README as resume)
✅ PDF format only
✅ File name: YourName_Developer_Resume.pdf

## Best Free Tools
- Overleaf (LaTeX templates)
- Canva (simple designs)
- GitHub Profile README
- Resume.io

## The Golden Rule
**Show, don't tell!**

Instead of "Good at problem solving"
→ "Solved 200+ LeetCode problems, ranked top 5% globally"

Your projects are your proof. Make them shine! 🌟
    `,
    author: 'Ravikumar S Kumbar',
    date: '2026-02-03',
    category: 'Career',
    tags: ['Resume', 'Career Tips', 'Job Search', 'Interview Prep'],
    readTime: '10 min read',
    thumbnail: '📄'
  },
  {
    id: 'blog-4',
    title: 'React.js Project Ideas for Your Portfolio (2026)',
    slug: 'react-portfolio-projects',
    excerpt: 'Build these 10 impressive React projects to land your dream job. From beginner to advanced.',
    content: `
# React.js Project Ideas for Your Portfolio

Stop building todo apps! Here are **real projects** that impress recruiters.

## Beginner Level (1-2 weeks each)

### 1. Weather Dashboard
**Tech**: React + OpenWeather API
**Features**: 
- Current weather + 5-day forecast
- Search by city
- Geolocation
- Temperature unit toggle

**What You Learn**: API calls, useState, useEffect, conditional rendering

### 2. Expense Tracker
**Tech**: React + Local Storage
**Features**:
- Add/delete transactions
- Category-wise breakdown
- Charts (Chart.js)
- Export to CSV

**What You Learn**: State management, local storage, data visualization

### 3. Movie Search App
**Tech**: React + TMDB API
**Features**:
- Search movies/TV shows
- Detailed info page
- Watchlist (local storage)
- Trending section

**What You Learn**: Routing, API integration, lazy loading

## Intermediate Level (2-4 weeks each)

### 4. Social Media Dashboard
**Tech**: React + Firebase
**Features**:
- User authentication
- Create/edit/delete posts
- Like & comment
- User profiles
- Real-time updates

**What You Learn**: Firebase, authentication, real-time database

### 5. E-Learning Platform
**Tech**: React + Node.js + MongoDB
**Features**:
- Course catalog
- Video player
- Progress tracking
- Quiz system
- Certificate generation

**What You Learn**: Full-stack, video handling, PDF generation

### 6. Portfolio Website Builder
**Tech**: React + Drag-and-Drop
**Features**:
- Template selection
- Drag-drop components
- Live preview
- Export as HTML/React
- Custom domain

**What You Learn**: Advanced state, drag-drop, code generation

## Advanced Level (4-8 weeks each)

### 7. Project Management Tool (Trello Clone)
**Tech**: React + Redux + Node.js + PostgreSQL
**Features**:
- Kanban boards
- Task assignment
- File uploads
- Real-time collaboration
- Email notifications

**What You Learn**: Redux, WebSockets, complex state, team features

### 8. Video Conferencing App
**Tech**: React + WebRTC + Socket.io
**Features**:
- Video/audio calls
- Screen sharing
- Chat
- Recording
- Virtual backgrounds

**What You Learn**: WebRTC, real-time communication, media handling

### 9. AI-Powered Code Editor
**Tech**: React + Monaco Editor + OpenAI API
**Features**:
- Syntax highlighting
- Auto-completion
- AI code suggestions
- Multiple languages
- Live preview

**What You Learn**: Advanced editor integration, AI APIs

### 10. SaaS Analytics Dashboard
**Tech**: React + Next.js + PostgreSQL + Stripe
**Features**:
- User analytics
- Charts & reports
- Subscription management
- API key generation
- Team collaboration

**What You Learn**: Next.js, monetization, scalability

## Making Projects Stand Out

### Must-Haves:
✅ Responsive design (mobile-first)
✅ Error handling & loading states
✅ Clean, commented code
✅ README with screenshots
✅ Live demo link
✅ Environment variables for secrets

### Extra Points:
🌟 Dark/Light theme
🌟 Accessibility (ARIA labels)
🌟 Performance optimization
🌟 Unit tests (Jest)
🌟 CI/CD pipeline
🌟 Docker containerization

## Deployment Options (All Free!)
- **Vercel** - Best for Next.js
- **Netlify** - Great for React
- **GitHub Pages** - Static sites
- **Railway** - Full-stack apps
- **Render** - Backend APIs

## Project Documentation Template

\`\`\`markdown
# Project Name

## 🚀 Demo
[Live Link](https://...) | [Video Demo](https://...)

## 📸 Screenshots
[Add 3-4 good screenshots]

## 🛠️ Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Vercel

## ✨ Features
- Feature 1
- Feature 2
- Feature 3

## 🏃 Run Locally
\`\`\`bash
git clone https://...
cd project
npm install
npm start
\`\`\`

## 🔑 Environment Variables
\`REACT_APP_API_KEY=your_key\`

## 📝 What I Learned
- Learned XYZ
- Overcame ABC challenge
- Improved performance by 50%

## 🚧 Future Improvements
- Add feature X
- Improve Y
\`\`\`

Remember: **Quality > Quantity**

3 excellent projects > 10 mediocre ones! 🎯
    `,
    author: 'Ravikumar S Kumbar',
    date: '2026-02-02',
    category: 'React',
    tags: ['React', 'Projects', 'Portfolio', 'Web Development'],
    readTime: '12 min read',
    thumbnail: '⚛️'
  },
  {
    id: 'blog-5',
    title: 'Java vs Python vs .NET: Which Should You Learn First?',
    slug: 'java-python-dotnet-comparison',
    excerpt: 'Honest comparison of Java, Python, and .NET for beginners in 2026. Which language will get you hired faster?',
    content: `
# Java vs Python vs .NET: The Truth in 2026

Choosing your first language? Here's the **honest** breakdown.

## Quick Summary

| Aspect | Java | Python | .NET (C#) |
|--------|------|--------|-----------|
| **Difficulty** | Medium | Easy | Medium |
| **Job Market** | 🔥🔥🔥 | 🔥🔥🔥🔥 | 🔥🔥🔥 |
| **Salary (India)** | 4-8 LPA | 5-10 LPA | 6-12 LPA |
| **Salary (US)** | $80-120k | $90-140k | $85-130k |
| **Learning Curve** | Steep | Gentle | Moderate |
| **Industry Use** | Enterprise | AI/Data/Web | Enterprise/Gaming |

## Java ☕

### Best For:
- Android development
- Large-scale enterprise apps
- Banking & finance systems
- Big companies (TCS, Infosys, Wipro)

### Pros:
✅ Huge job market (especially in India)
✅ Platform independent (write once, run anywhere)
✅ Strong typing prevents many errors
✅ Mature ecosystem (Spring, Hibernate)
✅ Object-oriented teaches good practices

### Cons:
❌ Verbose (more code for simple tasks)
❌ Slower development speed
❌ Older syntax compared to modern languages
❌ Memory management complexity

### Sample Code:
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
\`\`\`

### Career Path:
Junior Java Dev → Spring Boot Dev → Backend Architect
Average 3-5 years to senior position

## Python 🐍

### Best For:
- Data Science & AI/ML
- Web development (Django, Flask)
- Automation & scripting
- Startups & tech companies

### Pros:
✅ Easiest to learn
✅ Fastest development
✅ Huge demand in AI/ML
✅ Versatile (web, data, automation)
✅ Great for beginners

### Cons:
❌ Slower execution speed
❌ Not great for mobile apps
❌ Dynamic typing can cause runtime errors
❌ Multiple Python versions confusion

### Sample Code:
\`\`\`python
print("Hello World")
# That's it! 🎉
\`\`\`

### Career Path:
Python Dev → Data Analyst → ML Engineer / Backend Dev
Fastest path to AI/ML roles

## .NET (C#) 🎮

### Best For:
- Windows applications
- Game development (Unity)
- Enterprise web apps
- Microsoft ecosystem

### Pros:
✅ Modern, clean syntax
✅ Excellent IDE (Visual Studio)
✅ Great for Windows development
✅ High-paying jobs
✅ Gaming industry (Unity uses C#)

### Cons:
❌ Less popular in startups
❌ Primarily Windows (though .NET Core is cross-platform)
❌ Smaller community than Java/Python
❌ Learning curve for frameworks

### Sample Code:
\`\`\`csharp
using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello World");
    }
}
\`\`\`

### Career Path:
.NET Dev → Full-stack .NET → Solutions Architect
Strong corporate demand

## Which Should YOU Choose?

### Choose Java if:
- You want maximum job opportunities in India
- You like structure and strong typing
- You're interested in Android development
- You want to work in big companies

### Choose Python if:
- You're a complete beginner
- You want to get into AI/ML/Data Science
- You want to build things quickly
- You prefer startups/tech companies

### Choose .NET if:
- You're interested in game development
- You want high-paying corporate jobs
- You prefer Windows ecosystem
- You like modern, clean code

## My Honest Recommendation

### For Beginners (2026):
**Start with Python**
- Learn basics fast
- See results quickly
- Keeps motivation high
- Easy transition to Java/.NET later

### For Job Market (India):
**Java first, then Python**
- More entry-level jobs
- Service companies hire Java devs in bulk
- Learn Python later for upskilling

### For High Salary:
**Python (AI/ML track) or .NET**
- AI/ML roles pay premium
- .NET developers are rare = higher pay
- Both have less competition

## The Best Strategy? 🎯

**Year 1**: Master one language (Python recommended)
**Year 2**: Learn web development (React + Node.js)
**Year 3**: Add Java or .NET for backend

Don't language-hop! Master one, then expand.

## Free Learning Resources

### Java:
- Java Programming MOOC (University of Helsinki)
- Spring Boot tutorials (Java Brains)
- LeetCode for practice

### Python:
- Python.org official tutorial
- Automate the Boring Stuff (free book)
- Kaggle for data science

### .NET:
- Microsoft Learn (.NET tutorials)
- BracketShow C# playlist
- Unity Learn (for game dev)

## Bottom Line

**No "best" language exists.**

- Java = Safe, stable career
- Python = Fast growth, AI future
- .NET = High pay, corporate

All three will get you a job in 2026.
Pick one, stick with it for 6 months, then decide!

The language doesn't matter as much as:
1. Problem-solving skills
2. Data structures & algorithms
3. Projects in portfolio
4. Communication skills

**Start today. Any language. Just START!** 🚀
    `,
    author: 'Ravikumar S Kumbar',
    date: '2026-02-01',
    category: 'Programming',
    tags: ['Java', 'Python', '.NET', 'Career Advice', 'Beginners'],
    readTime: '15 min read',
    thumbnail: '💻'
  }
];

// Helper function to get recent blogs
export const getRecentBlogs = (count = 5) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// Helper function to get blogs by category
export const getBlogsByCategory = (category) => {
  return blogPosts.filter(blog => blog.category === category);
};

// Helper function to get blog by slug
export const getBlogBySlug = (slug) => {
  return blogPosts.find(blog => blog.slug === slug);
};