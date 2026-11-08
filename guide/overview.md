# Short How To guide

## Git operations
### Commits
- Commit regularly: **One new small feature = One Commit**. This makes fixing issues much easier because erroneous commits can much more easily be identified and reverted.
- Name them according to [conventional commits](https://conventionalcommits.org). TL;DR: prefix your messages with `feat(): `, `fix(<component>): `, `ci(<component>): `, `docs(<component>): `, etc.
- Committing to your own branch (see below) is also a good idea to not have to deal with merge conflicts. They can then be resolved on merge of your branch.

### Branches
- Base your branch off of the feature branch you want to work on. When done, open a PR into the parent branch to have it reviewed by others
- Using branches allows others to much more easily review your changes through the GitHub PR interface
- Name them according to [conventional branches](https://conventionalbranches.org). TL;DR: should be of form `feat/<feature>`, `fix/<fix>`, etc. Can be e.g. `feat/chat/branches`, but not `feat/chat/brances/me`
- Switch the branch when you are working on a different feature. This makes squash merges possible and keeps things organized.

### PRs
- Are used to tell others that your changes are ready to be integrated.
- If they aren't done and you want feedback, open it as a draft PR
- When you are requested for review, review the changes of others using the `files` tab in the PR interface and suggest changes using the button (or by pressing `Ctrl + G`).
- Always make sure to request a review from somebody (+ @janishutz if changes should go into `main` or you don't want to deal with conflicts yourself)
- Link your PR to an issue by using "closing keywords".
  For instance, you can add `fixes #20` to the description, which automatically links Issue #20 to the PR and will automatically close the issue when the PR is merged.
  Alternatively, you can do this via the UI after creation of the PR

## Repos
- Open Issues in the repo that they belong to (e.g. UI issues go into the `frontend` repo, backend issues into the `backend` repo, etc)
  This allows linking PRs to them to auto-close the issues, making issue tracking much quicker and easier.
- You don't have write access to the `main` branch on most repos, so if you want to merge into `main`, request a review from @janishutz

## Project
**The project tracking is very important for the other group members to know what you are working on.**
- Always link your issues to the project
- The different tabs are for different filters and layouts
- If items disappeared for you, you probably have clicked a label or the like and the filter has been updated. You can resolve that by clicking `Discard` in the top left corner.
- See the [Project Introduction](https://github.com/orgs/hci-group-15/projects/1/views/2?pane=info) for more details, including what each view is for.
  You can open it via the small sidebar icon in the top right corner.
