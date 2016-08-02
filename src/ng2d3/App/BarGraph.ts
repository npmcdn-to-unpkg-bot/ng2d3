/// <reference path="../typings/globals/d3/index.d.ts" />

import {Component, OnChanges} from 'angular2/core';
import {Directive, Attribute, ElementRef, Input} from "angular2/core";
import * as d3 from 'd3';

@Directive({
    selector: 'bar-graph',
    //properties: ['data'],
})
export class BarGraph
    //implements OnChanges
{

    divs: any;
    //@Input('data')
    //data: Array<number>;

    @Input('dataolko')
    olko_input: string;

    constructor(private element: ElementRef,
        @Attribute('width') width: string,
        @Attribute('height') height: string) {

        console.log("BarGraph constructor is called");

        console.log('elementRef', element);
        var el: any = element.nativeElement;
        console.log('el', el);
        //console.log('data', this.data); 
        console.log('olko_input2', this.olko_input);

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
            'width': width + 'px',
            'height': height + 'px',
        });

        console.log('this.divs 3', this.divs);

        var x = this.divs.selectAll('div');
        console.log('this.divs 4', this.divs);
        console.log('x', x);
    }

    

    render(newValue) {
        if (!newValue) return;

        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', d => d + '%')
            .text(d => d + '%');

    }

    onChange() {
        //this.render(this.data);
    }

    //ngOnChanges(changes: { [propertyName: string]: any }) {
    //    this.render(this.data);
    //}
}