import {Component} from "angular2/core"

@Component({
    selector: 'app',
    template: '<h2>ng2 says: {{welcome}}'
})
export class app {
    welcome: string;

    constructor() {
        this.welcome = "Welcome to ng2";
    }
}