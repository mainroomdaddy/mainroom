// Directive to set main screen height and width minus header side panel
mainroom.directive('second', function ($window, $timeout) {
    return function (scope, element, page) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            var left = '120%';

            $timeout(function () {
                left = 0;
            }, 3000);

            scope.second = function () {
                return {
                    'left': left                   
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

// Directive to set main screen height and width minus header side panel
mainroom.directive('homeMessage', function ($window) {
    return function (scope, element, page) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            var sWidth = '80%';
            var fontSize = 70;
            var marginTop = '30%'

            if (newValue.w < 1510) {
                fontSize = 55;
            }

            if (newValue.w < 1250) {
                fontSize = 45;
            }

            if (newValue.w < 1080) {
                fontSize = 40;
            }

            if (newValue.w < 990) {
                fontSize = 35;
            }

            if (newValue.w < 900) {
                fontSize = 30;
            }

            scope.homeMessage = function () {
                return {
                    'width': sWidth,
                    'font-size': fontSize,
                    'margin-top': marginTop
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

// Directive to set main screen height and width minus header side panel
mainroom.directive('contentWidth', function ($window) {
    return function (scope, element, page) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            var sWidth = newValue.w - 320;

            if (newValue.w < 800) {
                sWidth = newValue.w;
            }

            scope.contentWidth = function () {
                return {
                    'width': sWidth
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

// Directive to set main screen height and width minus header side panel
mainroom.directive('screenHeight', function ($window) {
    return function (scope, element, page) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            scope.screenHeight = function () {
                return {
                    'height': newValue.h
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

// Directive to position and size background images
mainroom.directive('updateMainImg', function ($window) {
    return function (scope, element) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            var picWidth = 100;
            var picHeight = 100;
            var picLeft = 0;
            var picTop = 0;

            if (newValue.w < 1530) {
                picLeft = ((newValue.w - 1530) * 0.5);
                picTop = -((1530 - newValue.w) * 0.5);
                picWidth = 100 + ((1530 - newValue.w) * 0.2);
                picHeight = 100 + ((1530 - newValue.w) * 0.1);
            }

            scope.updateMainImg = function () {
                return {
                    'height': picHeight + '%',
                    'width': picWidth + '%',
                    'left': picLeft,
                    'top': picTop
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

// Directive to set inner page screen width 
mainroom.directive('innerPageWidth', function ($window) {
    return function (scope, element, page) {

        var w = angular.element($window);

        scope.getCorrectDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };

        scope.$watch(scope.getCorrectDimensions, function (newValue, oldValue) {

            var sWidth = 480;

            if (newValue.w < 1200) {
                sWidth = 480;
            }

            scope.innerPageWidth = function () {
                return {
                    'width': sWidth
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});
