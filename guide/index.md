# Development Guide
WebDev is probably the easiest type of UI development to learn and the surrounding infrastructure is also very easy to use and set up,
compared to for instance using Flutter for mobile application development.

The used concepts (such as MVVM) are easier to grasp here than in most mobile toolkits.

This section will introduce you to setting up the development environment as needed for developing StudyPhoenix

## Important remarks
- **New feature = new branch**. If you add a sub-feature, then base your branch off of the feature branch for the main feature.
- Please **use [Conventional Branches](https://conventionalbranches.org)** for your branch names, features use the `feat/` prefix
- Please **use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)** for your commit messages and especially PRs.
- Please **always update the project tracking page when you work on something**. That way others know what is happening and don't waste time waiting for your responses.
- Never push to *trunk branches* (i.e. `main` or `dev` in our case) without a PR (exception: the blog, there it's *ok* to push to `dev`).
In most repos (except this one because it is private) you also can't due to branch protection rules.
- If you have issues with anything technical, contact @janishutz
- Commit often! Large commits are hard to debug if things go wrong and understanding what went wrong is harder
- It is recommended that you turn on notifications and tweak your [account's notification settings](https://github.com/settings/notifications) to suit your needs


## Why is this better than what we've done before?
Below a few reasons why every one of the changes is an improvement

### Git branches
- If you are the sole person using a branch, you won't have to solve any merge conflicts (which are quite challenging to resolve if you have not much experience doing that)
- New features can be completed before they break things that exist already
- Others can review the changes you made before they are merged and add suggestions
- We can link PRs (Pull Requests, sometimes also called "Merge Requests") to issues (i.e. to items in the project management tool)
- We can execute some checks on each PR to help ensure that no further issues are introduced

### Task tracking / Project management
- You can see what you have to work on directly
- Everyone can see what you are currently working on
- You can set priorities (so other people can prioritize things that you need)
- The chat stays cleaner
- Completed tasks can be ticked off by everyone and everyone sees them directly

### Conventional Branches and Commits
- A consistent commit style across all members of the team
- You can easily discern between documentation changes, new features, bugfixes, etc by just looking at the commit message
- Conventional Branches allow the same, but on the branch level
