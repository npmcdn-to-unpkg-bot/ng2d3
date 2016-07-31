/// <reference path="../typings/globals/d3/index.d.ts" />


//import * as angular from 'angular2/angular2';
import {Component} from 'angular2/core';
import {Directive, Attribute, ElementRef} from "angular2/core";
//import {View, onChange} from "?";
//import {Inject} from 'angular2/di';
import * as d3 from 'd3/build/d3';

@Directive({
    selector: 'bar-graph',
    //lifecycle: [onChange],
    properties: ['data'],
})
@Component({
        bindings: [ElementRef]
})
export class BarGraph {
    data: Array<number>;
    divs: any;

    constructor(private elementRef: ElementRef,
        @Attribute('width') width: string,
        @Attribute('height') height: string) {

        console.log("BarGraph constructor is called");
        var el: any = elementRef.nativeElement;
        console.log('el', el);
        var graph: any = d3.select(el);
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

    render(newValue) {
        if (!newValue) return;

        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', d => d + '%')
            .text(d => d + '%');

    }

    onChange() {
        this.render(this.data);
    }
}