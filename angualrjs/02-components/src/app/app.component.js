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

        constructor() {
            this.value = 0;
            this.multiplier = 1;
        }

        increaseValue() {
            console.log("Increasing value");
            this.value = this.value + this.multiplier;
        }

        decreaseValue() {
            console.log("Decreasing value");
            this.value = this.value - this.multiplier;
        }

        increaseMultiplier() {
            this.multiplier = this.multiplier * 10;
        }

        decreaseMultiplier() {
            this.multiplier = this.multiplier * .1;
        }

    }
};
