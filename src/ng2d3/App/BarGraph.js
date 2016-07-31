/// <reference path="../typings/globals/d3/index.d.ts" />
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var BarGraph = (function () {
    function BarGraph(elementRef, width, height) {
        this.elementRef = elementRef;
        console.log("BarGraph constructor is called");
        var el = elementRef.nativeElement;
        console.log('el', el);
        var graph = d3.select(el);
        console.log('graph', graph);
        this.divs = graph.
            append('div');
        //.
        //attr({
        //    'class': 'chart'
        //});
        console.log('this.divs', this.divs);
        this.divs.attr({ 'class': 'chart' });
        console.log('this.divs 2', this.divs);
        //.
        //style({
        //    'width': width + 'px',
        //    'height': height + 'px',
        //}).
        //selectAll('div');
        //this.divs.style({
        //    'width': width + 'px',
        //    'height': height + 'px',
        //});
        this.divs.style({
            'width': 500 + 'px',
            'height': 130 + 'px',
        });
        console.log('this.divs 3', this.divs);
        this.divs.selectAll('div');
        console.log('this.divs 4', this.divs);
    }
    BarGraph.prototype.render = function (newValue) {
        if (!newValue)
            return;
        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', function (d) { return d + '%'; })
            .text(function (d) { return d + '%'; });
    };
    BarGraph.prototype.onChange = function () {
        this.render(this.data);
    };
    BarGraph = __decorate([
        core_1.Directive({
            selector: 'bar-graph',
            properties: ['data'],
        }),
        __param(1, core_1.Attribute('width')),
        __param(2, core_1.Attribute('height')), 
        __metadata('design:paramtypes', [core_1.ElementRef, String, String])
    ], BarGraph);
    return BarGraph;
}());
exports.BarGraph = BarGraph;
//# sourceMappingURL=BarGraph.js.map