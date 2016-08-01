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
/// <reference path="../../../typings/globals/d3/index.d.ts" />
var core_1 = require('angular2/core');
//import * as D3 from '../../../node_modules/d3';
var D3 = require('d3');
//import * as d3 from 'd3';
//import * as Moment from 'moment';
var AreaChart = (function () {
    /**
      * We request angular for the element reference
      * and then we create a D3 Wrapper for our host element
      **/
    function AreaChart(element) {
        this.element = element;
        console.log('AreaChart constructor');
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.element.nativeElement);
    }
    /**
  * Everythime the @Input is updated, we rebuild the chart
  **/
    AreaChart.prototype.ngOnChanges = function () {
        if (!this.config || this.config.length === 0)
            return;
        this.setup();
        this.buildSVG();
        this.populate();
        this.drawXAxis();
        this.drawYAxis();
    };
    /**
  * Basically we get the dom element size and build the container configs
  * also we create the xScale and yScale ranges depending on calculations
  **/
    AreaChart.prototype.setup = function () {
        this.margin = { top: 20, right: 20, bottom: 40, left: 40 };
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.5 - this.margin.top - this.margin.bottom;
        this.xScale = D3.time.scale().range([0, this.width]);
        this.yScale = D3.scale.linear().range([this.height, 0]);
    };
    /**
  * We can now build our SVG element using the configurations we created
  **/
    AreaChart.prototype.buildSVG = function () {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    /**
  * Method to create the X Axis, will use Month as tick date format
  * Also assing some classes for CSS Stylimg
  **/
    AreaChart.prototype.drawXAxis = function () {
        this.xAxis = D3.svg.axis().scale(this.xScale)
            .tickFormat(function (t) { return "OLKO"; })
            .tickPadding(15);
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(this.xAxis);
    };
    /**
  * Method to create the Y Axis, will use numeric values as tick date format
  * Also assing some classes for CSS Stylimg and rotating the axis vertically
  **/
    AreaChart.prototype.drawYAxis = function () {
        this.yAxis = D3.svg.axis().scale(this.yScale)
            .orient('left')
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)');
    };
    /**
  * Will return the maximum value in any dataset inserted, so we use
  * it later for the maximum number in the Y Axis
  **/
    AreaChart.prototype.getMaxY = function () {
        var maxValuesOfAreas = [];
        this.config.forEach(function (data) { return maxValuesOfAreas.push(Math.max.apply(Math, data.dataset.map(function (d) { return d.y; }))); });
        return Math.max.apply(Math, maxValuesOfAreas);
    };
    /**
  * Now we populate using our dataset, mapping the x and y values
  * into the x and y domains, also we set the interpolation so we decide
  * how the Area Chart is plotted.
  **/
    AreaChart.prototype.populate = function () {
        var _this = this;
        this.config.forEach(function (area) {
            _this.xScale.domain(D3.extent(area.dataset, function (d) { return d.x; }));
            _this.yScale.domain([0, _this.getMaxY()]);
            _this.svg.append('path')
                .datum(area.dataset)
                .attr('class', 'area')
                .style('fill', area.settings.fill)
                .attr('d', D3.svg.area()
                .x(function (d) { return _this.xScale(d.x); })
                .y0(_this.height)
                .y1(function (d) { return _this.yScale(d.y); })
                .interpolate(area.settings.interpolation));
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AreaChart.prototype, "config", void 0);
    AreaChart = __decorate([
        core_1.Component({
            selector: 'area-chart',
            template: "<ng-content></ng-content>",
            styleUrls: ['app/components/charts/area-chart.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AreaChart);
    return AreaChart;
}());
exports.AreaChart = AreaChart;
//# sourceMappingURL=area-chart.js.map