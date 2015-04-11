var simpleApp = angular.module('simpleApp', []);

simpleApp.controller('VariableRateCtrl', function ($scope, $interval) {

    var runningCounter = null;

    $scope.counter = 0;
    $scope.updateRate = 1;
    $scope.state = "Stopped";

    $scope.start = function () {
        //if already running, do nothing
        if (runningCounter != null) {
            return;
        }
        else {
            $scope.state = "Running";

            runningCounter = $interval(function () {
                $scope.counter++
            }, 1000 * $scope.updateRate, 0);
        }
    }


    $scope.stop = function () {
        if ($interval.cancel(runningCounter) ){
            $scope.state = "Stopped";
            runningCounter = null;
        }

    }

    $scope.cancel = function () {
        if ($interval.cancel(runningCounter)){
            runningCounter = null;
        }

    }

    $scope.changeRate = function () {
        $scope.cancel();
        runningCounter = $interval(function () {
            $scope.counter++
        }, 1000 * $scope.updateRate, 0);
    };
});
