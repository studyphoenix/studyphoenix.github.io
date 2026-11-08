# GitHub Actions
This is an implementation of a CI/CD (Continuous Integration / Continuous Deployment) system,
allowing us to build applications or run tests based on certain triggers, such as opened pull requests.

In the `frontend` repo, we have a pipeline that checks the quality of your code upon opening a pull request.
These checks need to pass for the PR to become mergeable.
This ensures that the code follows the defined coding style and common issues (such as typing errors) are not present in your code.
