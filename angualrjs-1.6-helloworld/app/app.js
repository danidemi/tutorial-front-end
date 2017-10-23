var myApp = angular

    .module('myApp', [])
        .controller('FirstController', function FirstController($scope){

            $scope.messages = [
                'Hello World!', 'This is a message from Angular'
            ];

        })

        .controller('PhoneController', function PhoneController($scope){

            $scope.phones = {
                nokia: {
                    model: "7110",
                    ram: 2
                },
                xiaomi: {
                    model: "mi2",
                    ram: 3
                }
            };

        })

    .directive('myDirective', function () {
        return {
            template: "<strong>mydirective</strong>"
        }
    })

    .directive('myPhone', function () {
        return {
            restrict: 'E',
            template: '<table border="1"><tr><td colspan="2">Phone details</td></tr><tr><td>{{phone.model}}</td><td>{{phone.ram}}</td></tr></table>',
            scope: {
                // 'key' attribute has to be used in the tag.
                // It sould resolve to an object from controller's $scope to be
                // associated to the 'phone' object that is private to the directive.
                //
                phone: '=key'
            }
        }
    })


;
