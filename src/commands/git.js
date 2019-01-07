// const console = require('console');
const simpleGit = require('simple-git');

const gitpull = () => {
    const workingDirectory = process.cwd()
    simpleGit(workingDirectory)
        .exec(()=> console.log(`Calling from ${workingDirectory}`))
        .exec(() => console.log('Starting pull...'))
        .pull()
        .exec(() => console.log('pull done.'));

}

const gitmergemaster = () => {
    const workingDirectory = process.cwd()
    simpleGit(workingDirectory)
        .exec(()=> console.log(`Calling from ${workingDirectory}`))
        .exec(() => console.log('Starting pull...'))
        .pull(
            'origin',
            'master',
            { '--no-rebase': null }
        )
        .merge(['--no-ff', 'master'], (err, mergeSummary)=> {
            if(err) {
                throw new Error(err)
            }
            console.log(mergeSummary)
        })
        .exec(() => console.log('pull done.'));

}

module.exports = {
    gitpull,
    gitmergemaster
}