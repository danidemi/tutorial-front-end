import angular from 'angular';
import { AppModule } from './app.module';

console.debug(`Bootstrapping AngularJS ${AppModule} attached to DOM element ${document}.`);
angular.bootstrap(document, [AppModule]);
console.info(`Bootstrapped AngularJS ${AppModule} attached to DOM element ${document}.`);