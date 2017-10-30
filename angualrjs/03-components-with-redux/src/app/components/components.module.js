import angular from 'angular';
import { StepperModule } from './stepper/stepper.module';

export const ComponentsModule = angular
    .module('app.components', [
        StepperModule
    ])
    .name;