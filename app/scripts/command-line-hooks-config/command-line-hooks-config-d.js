/**
 * @ngdoc directive
 * @name superProductivity.directive:commandLineHooksConfig
 * @description
 * # commandLineHooksConfig
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .directive('commandLineHooksConfig', commandLineHooksConfig);

  /* @ngInject */
  function commandLineHooksConfig() {
    return {
      templateUrl: 'scripts/command-line-hooks-config/command-line-hooks-config-d.html',
      bindToController: true,
      controller: CommandLineHooksConfigCtrl,
      controllerAs: 'vm',
      restrict: 'E',
      scope: true
    };
  }

  /* @ngInject */
  function CommandLineHooksConfigCtrl(IS_ELECTRON) {
    let vm = this;
    vm.IS_ELECTRON = IS_ELECTRON;

    vm.EVENTS = {
      'GO_TO_DAILY_SUMMARY': {
        description: 'Once you visit the daily summary page.'
      },
      'DAY_FINISHED': {
        description: 'Once you clicked "Clear done tasks, save and go home" on the daily summary view, but before the done tasks are cleared.'
      },
      'PLACEHOLDER': {
        description: 'Lorem'
      }
    };

  }

})();
