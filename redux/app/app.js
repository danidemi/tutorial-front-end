function myReducer(currentState, action){


    if(currentState == undefined){
        currentState = {
            value: 0,
            multiplier: 1
        }
    }

    if(action.type.startsWith("@@redux")) return;

    switch(action.type) {
        case 'INCREMENT':
            return {
                value: currentState.value + currentState.multiplier,
                multiplier: currentState.multiplier
            }
        case 'DECREMENT':
            return {
                value: currentState.value - currentState.multiplier,
                multiplier: currentState.multiplier
            }
        case 'INCREMENT_MULTIPLIER':
            return {
                value: currentState.value,
                multiplier: currentState.multiplier * 10
            }
        case 'DECREMENT_MULTIPLIER':
            return {
                value: currentState.value,
                multiplier: currentState.multiplier * 0.1
            }
        default:
            throw "Unknown action '" + action.type + "'";
    }
}

var store = Redux.createStore(myReducer, {
        value: 0,
        multiplier: 1
});

function getElementById(id) {
    var elementById = window.document.getElementById(id);
    if(elementById==null) {
        throw "Unable to find element with id '" + id + "'";
    }
    return elementById;
}

var incBtn;
var decBtn;
var incMultBtn;
var decMultBtn;
var valueDiv;

window.onload = function () {
    incBtn = getElementById('increment');
    decBtn = getElementById('decrement');
    incMultBtn = getElementById('incrementMultiplier');
    decMultBtn = getElementById('decrementMultiplier');
    valueDiv = getElementById('value');

    incBtn.onclick = function() {
        store.dispatch( {type: 'INCREMENT'} );
    }

    decBtn.onclick = function() {
        store.dispatch( {type: 'DECREMENT'} );
    }

    incMultBtn.onclick = function() {
        store.dispatch( {type: 'INCREMENT_MULTIPLIER'} );
    }

    decMultBtn.onclick = function() {
        store.dispatch( {type: 'DECREMENT_MULTIPLIER'} );
    }

    store.subscribe( function(){
        var newState = store.getState();
        valueDiv.textContent = newState.value;
    } );
}



