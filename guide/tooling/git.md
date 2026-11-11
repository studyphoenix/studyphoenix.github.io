# Git
> [!NOTE]
> See the [git guide on my ETH guide](https://eth.janishutz.com/guide/infra/git.html) for more details

## Naming
- Commits: e.g. `feat(component): description` or `fix(component): desc`, or if breaking, e.g. `fix(component)!: desc`. [More Details](https://conventionalcommits.org)
- Branches: e.g. `feat/my-amazing-feature` or `fix/api/input-validation`. [More Details](https://conventionalbranch.org)

## Git CLI
- Stage changes: `git add <files>`, to add all non git-ignored files, use `git add -A`
- Commit: `git commit -m "message"`. Use [Conventional Commits](https://conventionalcommits.org)
- New branch: `git switch --create <branch name>` (or another name). Use [Conventional Branches](https://conventionalbranch.org)
- Switch branches: `git switch <branch name>`
- Push to new branch: `git push --set-upstream origin <branch name>`
- Pull and rebase: `git pull --rebase`

## Git clone with SSH keys
This is the most secure way of connecting to git remotes. To enable this, you need an SSH key from your device. You can generate one using
```bash
ssh-keygen -f ~/.ssh/github
```
(you can change the name of the key by changing the file path). Then add the following to your `~/.ssh/config`:
```ssh-config
Host github.com
   IdentitiesOnly yes
   IdentityFile ~/.ssh/github
```
