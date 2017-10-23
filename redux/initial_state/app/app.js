window.onload = function () {

    function myReducer(currentState, action){

        var newState = currentState;

        console.log("Reducing an action");
        console.log("  action:");
        console.log(action);
        console.log("  current state:");
        console.log(currentState);
        console.log("  new state:");
        console.log(newState);
        return newState;
    }

    var store = Redux.createStore(myReducer, {
        value: 0,
        multiplier: 1
    });
    console.log("Initial state");
    console.log(store.getState());

    store.subscribe( function(){
        console.log("New state");
        console.log(store.getState());
    } );

    console.log(window);
    console.log(window.document);
    console.log(window.document.getElementById("btn"));
    console.log(window.document.getElementById("hello"));

    window.document.getElementById("btn").onclick = function () {
        store.dispatch({type: 'an-action'});
    }

}




