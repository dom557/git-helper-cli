import { Command } from 'commander';
import chalk from 'chalk';
import simpleGit from 'simple-git';

const program = new Command();
const git = simpleGit();

program
  .name('git-helper')
  .description('A simple CLI tool to help with common Git commands')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new git repository')
  .action(async () => {
    try {
      await git.init();
      console.log(chalk.green('Initialized empty Git repository'));
    } catch (err) {
      console.error(chalk.red('Error initializing repository'), err);
    }
  });

program
  .command('status')
  .description('Check the status of the repository')
  .action(async () => {
    try {
      const status = await git.status();
      console.log(status);
    } catch (err) {
      console.error(chalk.red('Error checking status'), err);
    }
  });

program
  .command('commit')
  .description('Commit changes')
  .argument('<message>', 'Commit message')
  .action(async (message: string) => {
    try {
      await git.add('./*');
      await git.commit(message);
      console.log(chalk.green(`Committed with message: ${message}`));
    } catch (err) {
      console.error(chalk.red('Error committing changes'), err);
    }
  });

program
  .command('push')
  .description('Push changes to the remote repository')
  .argument('[remote]', 'Remote name', 'origin')
  .argument('[branch]', 'Branch name', 'main')
  .action(async (remote: string, branch: string) => {
    try {
      await git.push(remote, branch);
      console.log(chalk.green(`Pushed to ${remote}/${branch}`));
    } catch (err) {
      console.error(chalk.red('Error pushing changes'), err);
    }
  });

program
  .command('branch')
  .description('Create a new branch')
  .argument('<branchName>', 'Name of the new branch')
  .action(async (branchName: string) => {
    try {
      await git.checkoutLocalBranch(branchName);
      console.log(chalk.green(`Switched to new branch '${branchName}'`));
    } catch (err) {
      console.error(chalk.red('Error creating new branch'), err);
    }
  });

program
  .command('merge')
  .description('Merge another branch into the current branch')
  .argument('<branchName>', 'Name of the branch to merge')
  .action(async (branchName: string) => {
    try {
      await git.merge([branchName]);
      console.log(chalk.green(`Merged branch '${branchName}'`));
    } catch (err) {
      console.error(chalk.red('Error merging branch'), err);
    }
  });

program.parse(process.argv);
