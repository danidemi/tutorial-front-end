export const AppComponent = {
    template: `
    <header>
        Hello world
    </header>
    <div>
        <stepper on-up-click="$ctrl.increaseValue()" on-down-click="$ctrl.decreaseValue()" value-to-show="$ctrl.value"></stepper>
        <stepper on-up-click="$ctrl.increaseMultiplier()" on-down-click="$ctrl.decreaseMultiplier()" value-to-show="$ctrl.multiplier"></stepper>
    </div>
    <footer>
        Copyright MyApp 2016.
    </footer>`,

    controller: class App {

        constructor($ngRedux) {
            'ngInject';
            this.$ngRedux = $ngRedux;
            this.unsubscribe = $ngRedux.connect(this.mapStateToThis, null)(this);
        }

        increaseValue() {
            this.$ngRedux.dispatch({type: 'INCREASE_VALUE'});
        }

        decreaseValue() {
            this.$ngRedux.dispatch({type: 'DECREASE_VALUE'});
        }

        increaseMultiplier() {
            this.$ngRedux.dispatch({type: 'INCREASE_MULTIPLIER'});
        }

        decreaseMultiplier() {
            this.$ngRedux.dispatch({type: 'DECREASE_MULTIPLIER'});
        }

        mapStateToThis(state){
            console.log("state");
            console.log(state);
            return {
                value: state.value,
                multiplier: state.multiplier
            };
        }

        // $onDestroy() - Called on a controller when its containing scope is destroyed.
        // Use this hook for releasing external resources, watches and event handlers.
        $onDestroy(){
            this.unsubscribe();
        }

    }
};
