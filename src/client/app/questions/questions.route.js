(function() {
    'use strict';

    angular
        .module('app.questions')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'questions',
                config: {
                    url: '/app/questions',
                    templateUrl: 'app/questions/questions.html',
                    title: 'Survey Questions'
                }
            }
        ];
    }
})();
