

# Git Helper CLI

[![GitHub issues](https://img.shields.io/github/issues/dom557/git-helper-cli )](https://github.com/dom557/git-helper-cli/issues)
[![GitHub stars](https://img.shields.io/github/stars/dom557/git-helper-cli )](https://github.com/dom557/git-helper-cli/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/dom557/git-helper-cli )](https://github.com/dom557/git-helper-cli/network)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue)

A simple CLI tool to simplify common Git commands like initializing repositories, committing changes, pushing to remote, etc.

## Installation

To use Git Helper CLI, you can install it globally via npm:

```bash
npm install -g @dom557/git-helper-cli
```

## Usage

Once installed, you can use the `git-helper` command followed by the desired action:

```bash
npm run git-helper <command> [options]
```

For example, to initialize a new Git repository:

```bash
git-helper init
```

## Commands

- `init`: Initialize a new git repository
- `status`: Check the status of the repository
- `commit <message>`: Commit changes
- `push [remote] [branch]`: Push changes to the remote repository
- `branch <branchName>`: Create a new branch
- `merge <branchName>`: Merge another branch into the current branch
- `init-gitignore`: Create a .gitignore file with common defaults
- `remotes`: List all remote repositories
- `add-all`: Add all untracked files to the staging area
- `log-last`: Show details of the last commit
- `checkout <branchName>`: Checkout an existing branch

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or additional features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


