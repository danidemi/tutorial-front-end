import angular from 'angular';
//import uiRouter from 'angular-ui-router';
import { StepperComponent } from './stepper.component';

export const StepperModule = angular
    .module('stepper', [
        //uiRouter
    ])
    .component('stepper', StepperComponent)
    .name;