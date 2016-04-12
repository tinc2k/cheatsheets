# Git #


## Setup ##

Settings can be saved in `/etc/gitconfig`, `~/.gitconfig` or `<repository>/.git/config`
```
git config --global user.name "John Smith"
git config --global user.email john@example.com
git config --global core.editor vim
git config --global alias.st status
git config --list
```


## Initializing a repo ##

```
git init # create repo
git clone https://github.com/tinc2k/vux.git
git clone https://tinc2k@bitbucket.org/tinc2k/notes.git
```


## Staging ##

```
git add <file>
git add . # add all changes
git add -u :/ # stage whole working tree (changed and deleted but not added)
git add . # interactive mode add
git rm <file>
git rm --cached <file> # stage removal, but don't remove from working directory
git mv README.rdoc README.md # rename file
git diff # outputs diff of all unstaged changes
git diff --cached # outputs diff of all staged changes
```


## Commit ##

Commits represent every saved version of a project, containing the snapshot of the project, user info, date, commit message & SHA-1 checksum of it's entire contents.

Recommended commit message:
```
<commit summary in 50 characters or less>
<blank line>
<detailed description of changes in this commit: why, ticket number etc.>
```

```
git commit -m "Comment!" # local commit w/ inline comment
git commit --amend # commit things you forgot with the last commit, or change comment with `-m ""`
git log # display current branch's commits
git log --oneline <file> # display each commit in single line, and only for a certain file
git log <since>..<until> # commit id, branch name or tag
git log –stat # display diffstat of the changes in each commit
# also see gitk, tig for more interactive history browsing
git tag -a v1.0 -m "Stable release" # create annotated tag (tag with message), message after -m
git tag # list existing tags
```


## Undoing changes ##

```
git reset --hard HEAD # make working directory & stage match latest commit (tracked files only)
git clean –f # get rid of untracked files, -f forces deletion
git checkout HEAD <file> # return file to most recent commit state
git reset HEAD <file> # remove file from staging area (keep modified in working directory)
git reset HEAD~1 # remove most recent commit - DON'T RESET PUBLIC COMMITS, ONLY PRIVATE ONES
git reset --hard HEAD~10 # rollback last 10 commits
git revert <commit-id> # adds a new commit that reverts the commit-id's changes
git commit –amend # amends staged changes to previous commit - BE CAREFUL SINCE IT REWRITES HISTORY
```


## Branches ##

```
# list existing (local) branches
git branch

# list existing (local and remote) branches
git branch -a

# create new branch, does not switch to it
git branch <name>

# (soft) delete branch
git branch -d <name>

# (hard) delete branch - force delete branch with unmerged commits
git branch -D <name>

# delete remote branch
git push origin --delete <name>

# working directory & HEAD updated to match the branch/commit
git checkout <branch>

# checkout old revision by commit SHA (works with first 6 digits!)
# warning: checkout can overwrite uncommited changes - best to have a clean working directory
git checkout 396f44 .

# create branch and switch to it - works when forking from a detached HEAD as well:
git checkout -b <new-branch-name>
```


## Merging ##

### Merge methodologies ###

Merge methodology is determined from the structure of your history. There are 2 basic types:

1. Fast-forward merge
    - when there is nothing 'new' on master from the point of diversion, just fast-forward the branch pointer
2. 3-way merge
    - when there are new commits on master from the point of diversion, git cannot fast-forward, so it creates a merge commit that represents the combined snapshot of both branches (it's gonna log in both as well)
    - called 3-way because it merges two latest branch snapshots and the most recent common ancestor

### Merge conflicts ###

```
# The part before the ======= is from the master branch, and the rest is
# from the branch you’re trying to integrate.

<<<<<<< HEAD
  This content is from the current branch.
=======
  This is a conflicting change from another branch.
>>>>>>> some-feature
```


## Branching workflows ##

Most common types of branches:

1. Permanent branches
    - major waypoints of software projects
    - most devs user master for stable code, never commit directly to it, but integrate completed features from topic branches
    - some have a 'develop' branch for integration, and master is only for really stable public commits
2. Topic branches
    - Feature branches
        - temporary branches that encapsulate a new feature or refactor
        - typically stem from another feature branch or an integration branch
    - Hotfix branches
        - typically stem from public release branch, for quickly patching the main line of development
        - for bugfixes and other important updates that can't wait until the next major release


## Rebasing ##

Rebase means moving the entire branch onto a new base, which makes it a linear extension of the new base.

With the rebase command, you can take all the changes that were committed on one branch and replay them on another one.

**NEVER** rebase a branch that has been pushed to a public repository.

```
# this moves the entire some-feature branch onto the tip of master:
# after the rebase, the feature branch is a linear extension of master!
git checkout some-feature
git rebase master
git rebase -i #squash to a single commit
```


## Remote Repositories ##

Remotes are nothing more than bookmarks to other repositories—instead of typing the full path, they let you reference it with a user-friendly name.

```
# list existing remotes
git remote

# moar details
git remote -v

# add 'bookmark'
git remote add <name> <path-to-repo>

git remote rm <remote-name>
```

Commits may be the atomic unit of Git-based version control, but branches are the medium in which remote repositories communicate. Remote branches act just like the local branches we’ve covered thus far, except they represent a branch in someone else’s repository.

```
git fetch <remote> <branch>
git branch -a # list all local and remote branches
git branch –r # list downloaded remote branches
git log master..origin/master # display new updates that are NOT in your local master branch

# classic merge with origin/master
git checkout some-feature
git fetch origin
git merge origin/master

# rebase with origin/master
git checkout some-feature
git fetch origin
git rebase origin/master

# pull is a shortcut for fetch & merge
git pull origin/master
git pull --rebase origin/master #achtung!

# push is a shortcut, can create a local branch on the remote repository
git push <remote> <branch>

# delete remote branch - add a ':' before a branch name
git push origin :newfeature
```

## Remote Workflows ##

There is no “master” repository according to Git as there is with SVN or CVS. The “official” code base is merely a project convention—the only reason it’s the official repository is because that’s where everyone’s origin remote points.

### Public (Bare) Repositories ###

Collaboration assumes the existence of at least one public repository, and those have to be **bare** - they must not have a working directory to prevent developers from overwriting each others' work with `git push`. These are initiated with `git init --bare some-repo.git`.

### Centralized Workflow ###

 - for small teams where each developer has write access to the repository, all changes are shared through the central repository
 - developers develop features, clean it up, integrate into local master, push to origin
 - runs into problems when multiple users simultaneously update the central repository: first one can push his/her commits, second has a divergent history that cannot fast-forward

### Integrator Workflow ###
 - individual users maintain a *public* repository in addition to a *private* one
 - an individual can then push a bugfix to his public repository, and then a maintainer can pull that into their private repository, test/integrate and push to main repository: the person in the middle is the *integrator*
 - the team still has to agree on the official repository to pull from


## stash  ##

```
# stash pending changes
git stash -u

# list all stashes
git stash list

# apply last stash from stash stack
git stash apply
```


## etc ##
```
git status
git log

# forcefully checkout last version from repo
git checkout -f

# define github as master branch
git remote add origin https://github.com/tinc2k/first_app.git

# when was each line edited and by whom
git blame

# diff current unstaged file against last commited
git diff filename

# diff current staged file against last commited
git diff --cached

# gives a list of branches with a * next to your branch
git branch

# merge tool
git mergetool
```


## TODO ##
 - cherrypick
 - github pull requests pro/contra
 - tags
 - rebasing interactive mode
 - bisect


## references ##
https://github.com/mmihaljevic/cheat_sheet/blob/master/git
http://git-scm.com/book/en/Git-Branching-Rebasing
https://www.atlassian.com/git/tutorial/git-basics#!overview
http://wildlyinaccurate.com/a-hackers-guide-to-git
