module.exports = function (data) {
  'use strict';

  const spawn = require('child_process').spawn;
  let cmd = 'git --no-pager log --graph --pretty=format:\'%s (%cr) <%an>\' --abbrev-commit --since=4am';

  console.log('Executing command line hook');

  spawn(cmd, {
    cwd: data.cwd
  }, function (error, stdout) {
    console.log('Executed command line hook');
    console.log(error || stdout);
  });

};