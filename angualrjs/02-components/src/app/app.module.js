import angular from 'angular';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
    .module('app', [
        ComponentsModule
    ])
    .component('app', AppComponent)
    .name;