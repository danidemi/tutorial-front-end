function getElementById(id) {
    var elementById = window.document.getElementById(id);
    if(elementById==null) {
        throw "Unable to find element with id '" + id + "'";
    }
    return elementById;
}

window.onload = function () {

    /**
     * When the action is unknow, a state that is equivalent to the
     * given one should be returned.
     */
    function myReducer(currentState, action){

        switch(action.type) {
            case 'INCREMENT':
                return {
                    value: currentState.value + currentState.multiplier,
                    multiplier: currentState.multiplier
                };
            case 'DECREMENT':
                return {
                    value: currentState.value - currentState.multiplier,
                    multiplier: currentState.multiplier
                };
            case 'INCREMENT_MULTIPLIER':
                return {
                    value: currentState.value,
                    multiplier: currentState.multiplier * 10
                };
            case 'DECREMENT_MULTIPLIER':
                return {
                    value: currentState.value,
                    multiplier: currentState.multiplier * 0.1
                };
            case 'FORCE_UI_UPDATE':
                return currentState;
            default:
                return currentState;

        }
    }

    var initialState = {
        value: 0,
        multiplier: 1
    };
    var store = Redux.createStore(myReducer, initialState);
    console.log("# Initial state:");
    console.log(store.getState());

    var incBtn = getElementById('increment');
    var decBtn = getElementById('decrement');
    var incMultBtn = getElementById('incrementMultiplier');
    var decMultBtn = getElementById('decrementMultiplier');
    var valueDiv = getElementById('value');

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

        if(newState == undefined) return;

        valueDiv.textContent = newState.value;
    } );

    store.dispatch( {type: 'FORCE_UI_UPDATE'} );
}



