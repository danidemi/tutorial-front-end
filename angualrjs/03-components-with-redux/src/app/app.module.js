import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import ngRedux from 'ng-redux';


export const AppModule = angular
    .module('app', [ngRedux, ComponentsModule])
    .config( ($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(myReducer, [], [], { value: 0, multiplier: 10 });
    } )
    .component('app', AppComponent)
    .name;

function myReducer(currentState, action){
    console.log(action);
    switch(action.type) {

        case 'INCREASE_VALUE':
            return {
                value: currentState.value + currentState.multiplier,
                multiplier: currentState.multiplier
            };

        case 'DECREASE_VALUE':
            return {
                value: currentState.value - currentState.multiplier,
                multiplier: currentState.multiplier
            };

        case 'INCREASE_MULTIPLIER':
            return {
                value: currentState.value,
                multiplier: currentState.multiplier * 10
            };

        case 'DECREASE_MULTIPLIER':
            return {
                value: currentState.value,
                multiplier: currentState.multiplier * .1
            };

        default:
            return currentState;

    }
}
