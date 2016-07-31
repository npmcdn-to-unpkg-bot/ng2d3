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
//import * as angular from 'angular2/angular2';
var core_1 = require('angular2/core');
var core_2 = require("angular2/core");
//import {View, onChange} from "?";
//import {Inject} from 'angular2/di';
var d3 = require('d3');
var BarGraph = (function () {
    function BarGraph(elementRef, width, height) {
        this.elementRef = elementRef;
        console.log("BarGraph constructor is called");
        var el = elementRef.nativeElement;
        console.log('el', el);
        var graph = d3.select(el);
        console.log('graph', graph);
        this.divs = graph.
            append('div').
            attr({
            'class': 'chart'
        }).
            style({
            'width': width + 'px',
            'height': height + 'px',
        }).
            selectAll('div');
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
        core_2.Directive({
            selector: 'bar-graph',
            //lifecycle: [onChange],
            properties: ['data'],
        }),
        core_1.Component({
            bindings: [core_2.ElementRef]
        }),
        __param(1, core_2.Attribute('width')),
        __param(2, core_2.Attribute('height')), 
        __metadata('design:paramtypes', [core_2.ElementRef, String, String])
    ], BarGraph);
    return BarGraph;
}());
exports.BarGraph = BarGraph;
//# sourceMappingURL=BarGraph.js.map