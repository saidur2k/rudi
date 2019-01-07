#! /usr/bin/env node

const console = require('console');
const commander = require('commander');



// commands
const {version} = require('../package.json')
const {gitrefresh} = require('./commands/gitrefresh')

commander
    .version(version);

commander
    .command('gitrefresh')
    .description('run commands for an updated git branch')
    .action(gitrefresh);


commander.parse(process.argv);

if (!commander || !commander.args || !commander.args.length) {
    commander.help();
}