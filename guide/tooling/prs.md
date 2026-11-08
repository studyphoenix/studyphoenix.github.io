# Pull Requests
Always link issues to the PR whenever appropriate to have them auto-closed, reducing workload tracking down what has been completed and what hasn't.
Spending a minute on this now will save 5 down the road for you or someone else.

Pull Requests are used to merge your branch into a write protected (or any other) branch.
The reason why PRs are this important for a larger project is because it shows others that something has been completed and also allows them to review your changes before merge.
It also allows others to test your changes before they are committed to main, since they may break something that others had relied upon by accident, causing time loss.
This is tied in very closely with branches, which is why creating a new branch off of a base branch (or a feature / fix branch) is this important.

Furthermore, you most likely won't have to concern yourself with merge conflicts and can leave it up to people with more experience resolving them.

To open a PR, head to the repo in question on GitHub, click the "Pull Requests" tab, then click "New Pull Request" and select the comparison branch as the branch you want to merge.
Fill out the template (when applicable) and create it.
As always, don't forget to assign yourself to it (or any number of other members) and request a review from someone with write access to the branch in question.

In our public repos, we have branch protection rules in place that only allow some of the members to write to main.
This is to prevent mishaps from causing catastrophic damage to the repo.
