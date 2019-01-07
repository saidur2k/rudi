// const console = require('console');
const simpleGit = require('simple-git');

const gitrefresh = () => {
    simpleGit()
        .exec(() => console.log('Starting pull...'))
        .pull(
                'origin',
                'master',
                { '--no-rebase': null }
            )
        .exec(() => console.log('pull done.'));

}

module.exports = {
    gitrefresh
}