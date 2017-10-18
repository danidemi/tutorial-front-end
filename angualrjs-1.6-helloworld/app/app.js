var myApp = angular
    .module('myApp', [])
        .controller('FirstController', function FirstController($scope){
            $scope.messages = [
                'Hello World!', 'This is a message from Angular'
            ];
        });
