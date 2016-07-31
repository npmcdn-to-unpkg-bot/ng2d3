/// <reference path="../typings/globals/d3/index.d.ts" />

import {Component, OnChanges} from 'angular2/core';
import {Directive, Attribute, ElementRef} from "angular2/core";
import * as x from 'd3';

@Directive({
    selector: 'bar-graph',
    properties: ['data'],
})
export class BarGraph
    //implements OnChanges
{
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

        //var graph2: any = d3.select(el)
        //    .attr({ 'class': 'chart' })
        //    .style({ 'width': '500px,', 'height': '130px' })
        //    .selectAll('div');

        //console.log('graph2', graph2);

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

    //ngOnChanges(changes: { [propertyName: string]: any }) {
    //    this.render(this.data);
    //}
}