'use strict';

// requires to enable chrome://flags/#enable-experimental-web-platform-features
//import {logger} from '../node_modules/redux-logger/dist/redux-logger';

const initialState = {
    value: 0,
    multiplier: 1
};

function getElementById(id) {
    var elementById = window.document.getElementById(id);
    if(elementById==null) {
        throw "Unable to find element with id '" + id + "'";
    }
    return elementById;
}

window.onload = function () {

    function reduceMultiplier(currentState = 1, action){
        switch(action.type){
            case 'INCREMENT_MULTIPLIER':
                return currentState * 10;
            case 'DECREMENT_MULTIPLIER':
                return currentState * .1;
            case 'RESET':
                return initialState.multiplier;
            default:
                return currentState;
        }
    }

    /**
     * When the action is unknow, a state that is equivalent to the
     * given one should be returned.
     */
    function myReducer(currentState = initialState, action){

        var result = {};
        switch(action.type) {
            case 'INCREMENT':
                result.value = currentState.value + currentState.multiplier;
                break;
            case 'DECREMENT':
                result.value = currentState.value - currentState.multiplier;
                break;
            case 'INCREMENT_MULTIPLIER':
                result.value = currentState.value;
                break;
            case 'DECREMENT_MULTIPLIER':
                result.value = currentState.value;
                break;
            case 'FORCE_UI_UPDATE':
                result.value = currentState.value;
                break;
            case 'RESET':
                result.value= initialState.value;
                break;
            default:
                // From Redux doc
                // We return the previous state in the default case.
                // It's important to return the previous state for any unknown action.
                return currentState;
        }
        result.multiplier = reduceMultiplier(currentState.multiplier, action);
        return result;
    }


    var store = Redux.createStore(myReducer, Redux.applyMiddleware( reduxLogger ));
    console.log("# Initial state:");
    console.log(store.getState());

    var incBtn = getElementById('increment');
    var decBtn = getElementById('decrement');
    var incMultBtn = getElementById('incrementMultiplier');
    var decMultBtn = getElementById('decrementMultiplier');
    var resetBtn = getElementById('reset');
    var valueDiv = getElementById('value');
    var multiplierDiv = getElementById('multiplier');

    incBtn.onclick = function() {
        store.dispatch( {type: 'INCREMENT'} );
    };

    decBtn.onclick = function() {
        store.dispatch( {type: 'DECREMENT'} );
    };

    incMultBtn.onclick = function() {
        store.dispatch( {type: 'INCREMENT_MULTIPLIER'} );
    };

    decMultBtn.onclick = function() {
        store.dispatch( {type: 'DECREMENT_MULTIPLIER'} );
    };

    resetBtn.onclick = function() {
        store.dispatch( {type: 'RESET'} );
    };

    store.subscribe( function(){
        var newState = store.getState();

        if(newState == undefined) return;

        valueDiv.textContent = newState.value;
        multiplierDiv.textContent = newState.multiplier;
    } );

    store.dispatch( {type: 'FORCE_UI_UPDATE'} );
}



