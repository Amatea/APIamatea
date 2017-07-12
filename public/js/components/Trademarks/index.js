import angular from 'angular';

// Create the module where our functionality can attach to
let tradeModule = angular.module('app.trademarks', []);

// Components
import TradeApp from './trademarks.component';
tradeModule.component('tradeApp', TradeApp);


export default tradeModule;
