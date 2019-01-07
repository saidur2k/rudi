#! /usr/bin/env node

const console = require('console');
const commander = require('commander');

// commands
const {version} = require('../package.json')

const {
    gitrefresh,
    gitmergemaster
} = require('./commands/git')

commander
    .version(version);

commander
    .command('gitrefresh')
    .description('run git pull command for an updated git branch')
    .action(gitrefresh);

commander
    .command('gitmergemaster')
    .description('run commands to pull latest master version from remote and incorporate to wip branch')
    .action(gitmergemaster);

commander.parse(process.argv);

if (!commander || !commander.args || !commander.args.length) {
    commander.help();
}