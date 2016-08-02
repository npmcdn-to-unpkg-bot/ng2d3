"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var BarGraph_1 = require("./BarGraph");
var App = (function () {
    function App() {
        console.log("App constructor called");
        this.welcome = "Welcome to ng2";
        this.graphData = [10, 20, 30, 40, 60];
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<h2>ng2 says: {{welcome}} \n    <br/>\n    <bar-graph width= \"500\" height=\"130\" [dataolko]=\"'metelko'\">\n    </bar-graph>",
            directives: [BarGraph_1.BarGraph]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map