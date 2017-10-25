"use strict";

var myApp = angular

    .module('myApp', [])

    .controller('MainController', function MainController($scope){

        $scope.msg = "components";
        $scope.value = {
            msg: "value defined in controller's scope"
        };
        $scope.xxx = {
            msg: "value defined in controller's scope"
        };
        this.xxx = {
            msg: "value defined in controller's field"
        };
        this.villain = {
            name: 'Spawn'
        };

        // http://codetunnel.io/angularjs-controller-as-or-scope/
        // https://johnpapa.net/do-you-like-your-angular-controllers-with-or-without-sugar/
        this.randomize = function() {
            var newValue = '' + Math.random();
            console.log(newValue);
            this.xxx.msg = newValue;
        }

    })

    .component('myHelloWorld', {
        template: '<i>Hello World from component</i>'
    })

    .component('myTwoWayBinding', {
        template: 'Output {this}:{{$ctrl.yyy.msg}}<br/>',
        bindings: {
            yyy: '='
        }
    })

    .component('myOneWayBinding', {
        template: 'Output {this}:{{$ctrl.yyy.msg}}<br/>',
        bindings: {
            yyy: '<'
        }
    })

    .component('heroDetail', {
        templateUrl: 'heroDetail.html',
        bindings: {
            hero: '='
        }
    });
;

