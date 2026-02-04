export const gitData = {
  title: "Git & GitHub Commands",
  subtitle: "Version control from basics to advanced workflows",
  questions: [
    {
      id: "git1",
      title: "1. Initial Git Setup",
      desc: "Configure Git on your computer for the first time",
      output: "Git configured successfully!",
      code: {
        bash: `# Check Git version
git --version

# Set your username (global configuration)
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# View all configurations
git config --list

# Set default branch name to main
git config --global init.defaultBranch main`
      }
    },
    {
      id: "git2",
      title: "2. Creating and Cloning Repositories",
      desc: "Start a new repository or clone existing one",
      output: "Repository initialized/cloned successfully!",
      code: {
        bash: `# Initialize new repository in current folder
git init

# Initialize with specific name
git init my-project

# Clone repository from GitHub
git clone https://github.com/username/repository.git

# Clone to specific folder
git clone https://github.com/username/repository.git my-folder

# Clone specific branch
git clone -b branch-name https://github.com/username/repository.git`
      }
    },
    {
      id: "git3",
      title: "3. Basic Git Workflow - Add, Commit, Push",
      desc: "The fundamental cycle of version control",
      output: "Changes committed and pushed!",
      code: {
        bash: `# Check status of files
git status

# Add specific file to staging
git add filename.txt

# Add all files to staging
git add .

# Add all files of specific type
git add *.java

# Commit with message
git commit -m "Add new feature"

# Add and commit in one step (tracked files only)
git commit -am "Update existing files"

# Push to remote repository
git push origin main

# Push and set upstream (first time)
git push -u origin main`
      }
    },
    {
      id: "git4",
      title: "4. Branching and Merging",
      desc: "Work on features without affecting main code",
      output: "Branch created and merged!",
      code: {
        bash: `# List all branches
git branch

# Create new branch
git branch feature-login

# Switch to branch
git checkout feature-login

# Create and switch in one command
git checkout -b feature-signup

# Switch branch (newer syntax)
git switch main

# Merge branch into current branch
git merge feature-login

# Delete branch
git branch -d feature-login

# Force delete unmerged branch
git branch -D feature-login`
      }
    },
    {
      id: "git5",
      title: "5. Viewing History and Changes",
      desc: "Track what changed and when",
      output: "Commit history displayed",
      code: {
        bash: `# View commit history
git log

# Compact one-line view
git log --oneline

# View with graph
git log --graph --oneline --all

# View specific number of commits
git log -n 5

# View changes in commits
git log -p

# View commits by specific author
git log --author="John"

# View changes in file
git diff filename.txt

# View staged changes
git diff --staged`
      }
    },
    {
      id: "git6",
      title: "6. Undoing Changes",
      desc: "Fix mistakes and revert changes",
      output: "Changes undone successfully",
      code: {
        bash: `# Discard changes in working directory
git checkout -- filename.txt

# Unstage file (keep changes)
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert commit (creates new commit)
git revert commit-hash

# Discard all local changes
git reset --hard HEAD

# Clean untracked files
git clean -fd`
      }
    },
    {
      id: "git7",
      title: "7. Remote Repository Operations",
      desc: "Connect and sync with GitHub",
      output: "Remote operations completed",
      code: {
        bash: `# View remote repositories
git remote -v

# Add remote repository
git remote add origin https://github.com/username/repo.git

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git

# Fetch changes from remote (don't merge)
git fetch origin

# Pull changes (fetch + merge)
git pull origin main

# Pull with rebase
git pull --rebase origin main

# Push all branches
git push --all origin

# Push tags
git push --tags`
      }
    },
    {
      id: "git8",
      title: "8. Stashing Changes",
      desc: "Temporarily save work without committing",
      output: "Changes stashed and restored",
      code: {
        bash: `# Stash current changes
git stash

# Stash with message
git stash save "Work in progress on feature"

# List all stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Delete specific stash
git stash drop stash@{0}

# Clear all stashes
git stash clear`
      }
    },
    {
      id: "git9",
      title: "9. Working with Tags",
      desc: "Mark specific points in history (releases)",
      output: "Tags created and pushed",
      code: {
        bash: `# List all tags
git tag

# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag specific commit
git tag v1.0.0 commit-hash

# View tag details
git show v1.0.0

# Push specific tag
git push origin v1.0.0

# Push all tags
git push --tags

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin :refs/tags/v1.0.0`
      }
    },
    {
      id: "git10",
      title: "10. Advanced Git Operations",
      desc: "Cherry-pick, rebase, and conflict resolution",
      output: "Advanced operations completed",
      code: {
        bash: `# Cherry-pick specific commit
git cherry-pick commit-hash

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Rebase onto main
git rebase main

# Continue rebase after fixing conflicts
git rebase --continue

# Abort rebase
git rebase --abort

# View conflict status
git status

# Mark conflict as resolved
git add conflicted-file.txt

# Blame - see who changed each line
git blame filename.txt

# Create archive of repository
git archive --format=zip HEAD > project.zip`
      }
    }
  ],
  top10: [
    {
      q: "What is Git and why use it?",
      a: "Git is a distributed version control system that tracks changes in source code. It allows multiple developers to work together, maintains complete history, enables branching/merging, works offline, and provides backup. It's industry standard for collaboration."
    },
    {
      q: "What is the difference between Git and GitHub?",
      a: "Git is a version control system (software) installed on your computer. GitHub is a cloud-based hosting service for Git repositories with additional features like pull requests, issues, actions, and collaboration tools. GitLab and Bitbucket are alternatives to GitHub."
    },
    {
      q: "What is the difference between git pull and git fetch?",
      a: "git fetch downloads changes from remote but doesn't merge them into your working directory. git pull does fetch + merge automatically. Use fetch when you want to review changes before merging, pull for quick updates."
    },
    {
      q: "What is a merge conflict and how to resolve it?",
      a: "Merge conflict occurs when Git can't automatically merge changes (same lines edited differently). To resolve: 1) Open conflicted files, 2) Look for <<<<<<, =======, >>>>>> markers, 3) Manually edit to keep desired changes, 4) git add resolved files, 5) git commit."
    },
    {
      q: "What is the difference between reset and revert?",
      a: "git reset moves branch pointer backward, rewriting history (dangerous for shared branches). git revert creates new commit that undoes changes, preserving history (safe for shared branches). Use reset for local changes, revert for pushed commits."
    },
    {
      q: "What is rebasing and when to use it?",
      a: "Rebase moves commits from one branch onto another, creating linear history. Use for: cleaning up local commits before pushing, keeping feature branch updated with main. Don't rebase public/shared branches. Alternative to merge for cleaner history."
    },
    {
      q: "What is .gitignore and how to use it?",
      a: ".gitignore file specifies which files Git should ignore. Add patterns like *.log, node_modules/, .env to exclude files from tracking. Useful for build artifacts, dependencies, secrets, OS files. Create it in repository root before first commit."
    },
    {
      q: "What are the stages of a file in Git?",
      a: "Files have 4 states: Untracked (new files), Modified (changed but not staged), Staged (marked for commit), Committed (stored in repository). Workflow: modify → stage (git add) → commit (git commit) → push (git push)."
    },
    {
      q: "What is a detached HEAD state?",
      a: "Occurs when HEAD points to specific commit instead of branch. Happens when checking out commit directly (git checkout commit-hash). Changes made are lost unless committed to new branch. Fix by creating branch: git checkout -b new-branch-name."
    },
    {
      q: "What is the difference between fork and clone?",
      a: "Fork creates copy of repository on your GitHub account (server-side), used for contributing to others' projects. Clone downloads repository to your local machine. Typical workflow: fork on GitHub → clone to local → make changes → push → create pull request."
    }
  ]
};