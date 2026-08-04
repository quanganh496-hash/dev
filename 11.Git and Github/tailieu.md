- Git is a version control system (VCS) that allows you to track changes in your files over time. It was created by Linus Torvalds and is widely used by millions of people around the world. Here are some key points about Git:
   - Change Tracking: Git helps track every change made to your files, enabling you to see who changed what, when, and why. This is particularly useful when collaborating with others on a project.
   - Undo Functionality: Think of Git as an ultimate "undo" button. If you make a mistake or want to revert to an earlier version of a file, Git allows you to do this efficiently.
   - Collaboration: Git is designed for teamwork. It facilitates smooth collaboration among multiple users by preventing conflicts and allowing everyone to work on the same project simultaneously.
   - History Management: Git stores a complete history of changes in a hidden folder called .git, which you typically don't need to interact with directly. This folder contains all versions and changes relevant to your project.

In summary, Git is an essential tool for managing and tracking changes in your projects, making it easier to collaborate and maintain a clear history of your work

![alt text](image.png)

    git branch namebranch

    git checkout namebranch

Moving from git checkout to git switch
Transitioning to Modern Git Commands
What's Happening Now
Up until now, you've been using git checkout for switching branches - the same command you'll see in most online tutorials and Stack Overflow answers. That was intentional and I wanted you to recognize the most common syntax you'll encounter.

But from this point forward, we're switching to modern Git commands. They're clearer, safer, and the future of Git.

Command Comparison
Switch to a branch:
What you've been using: git checkout branch-name

What we'll use going forward: git switch branch-name

For Reference - You'll See These Online
Discard file changes:
Legacy command:     

    git checkout -- file.txt

Modern command (we already use): 

    git restore file.txt ✓

Unstage a file:
Legacy command (online): 

    git reset HEAD file.txt

Modern command (we already use): 

    git restore --staged file.txt ✓

Why the Change?
The problem: git checkout does too many different things - switching branches, discarding files, viewing old commits. It's confusing and error-prone.

The solution: Git introduced two separate commands in 2019:

    git switch - for branches only
    
    git restore - for files only

Much clearer! You can't accidentally overwrite files when you meant to switch branches.

Going Forward
From now on in this course, we'll use git switch for all branch operations.

You've already been using git restore for file operations - that's the modern way!

You now know git checkout for branches, so you'll recognize it everywhere online. But you also know the better, modern way to do things.

