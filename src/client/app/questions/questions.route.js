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
                state: 'app.questions',
                config: {
                    url: '/questions',
                    views: {
                        '': {
                            templateUrl: 'app/questions/questions.middle.html'
                        }
                    },
                    title: 'Survey Questions'
                }
            }
        ];
    }
})();
