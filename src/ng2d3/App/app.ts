﻿import {Component} from "angular2/core";
import {BarGraph} from "./BarGraph";

@Component({
    selector: 'app',
    template: `<h2>ng2 says: {{welcome}} 
    <br/>
    <bar-graph
    bind-data="graphData"
    width= "500"
    height="130"
    >
    </bar-graph>`,
    directives: [BarGraph]
})
export class app {
    welcome: string;

    constructor() {
        console.log("App constructor called");
        this.welcome = "Welcome to ng2";
    }
}