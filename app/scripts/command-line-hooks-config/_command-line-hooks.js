/**
 * @ngdoc module
 * @name superProductivity.module:commandLineHooks
 * @description
 * # commandLineHooks
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .run(initCommandLineHooksListener);

  function initCommandLineHooksListener($rootScope, IS_ELECTRON, Tasks) {
    const IPC_EXEC_CMD = 'IPC_EXEC_CMD';

    function clearData(data) {
      let newData = {};
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let val = data[key];
          if (!angular.isFunction(val)) {
            newData[key] = val;
          }
        }
      }
      return newData;
    }

    if (IS_ELECTRON) {
      for (let eventName in $rootScope.config.commandLineHooks) {
        if ($rootScope.config.commandLineHooks.hasOwnProperty(eventName)) {
          let config = $rootScope.config.commandLineHooks[eventName];
          let command = config.cmd;
          let taskDataOption = config.taskDataOption;

          if (command && command.trim() !== '') {
            let data;

            if (taskDataOption) {
              if (taskDataOption === 'TODAYS_TASKS') {
                data = Tasks.getToday();
              } else if (taskDataOption === 'ALL_DATA') {
                data = clearData($localStorage);
              }
            }
            window.ipcRenderer.send(IPC_EXEC_CMD, {
              command,
              data
            });
          }
        }
      }
    }
  }

})();
