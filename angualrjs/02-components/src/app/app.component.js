export const AppComponent = {
    template: `
    <header>
        Hello world
    </header>
    <div>
        <!--
        <stepper on-up-click="$ctrl.increaseValue()" on-down-click="$ctrl.decreaseValue()" value-to-show="$ctrl.value"></stepper>
        -->
        <stepper on-down-click="$ctrl.decreaseValue()" value-to-show="$ctrl.value"></stepper>
    </div>
    <footer>
        Copyright MyApp 2016.
    </footer>`,

    controller: class App {

        constructor() {
            this.value = 0;
        }

        increaseValue() {
            console.log("Increasing value");
            this.value = this.value + 1;
        }

        decreaseValue() {
            console.log("Decreasing value");
            this.value = this.value -1;
        }

    }
};
