(function () {

// Inspired by http://informationandvisualization.de/blog/box-plot
    d3.box = function () {
        var width = 1,
            height = 1,
            duration = 0,
            domain = null,
            value = Number,
            quartiles = null,
            boundValue = null,
            whiskerValue = null,
            showLabels = true, // whether or not to show text labels
            tickFormat = null,
            myGroupBox = null,
            updateDataList = null;
        var label = null;
        var scaleX = null;

        // For each small multiple…
        function box(g) {
            console.log("box(g) ======================");
            // debugger;
            g.each(function (data, i) {
                var d = updateDataList[i][1];
                var g = d3.select(this);

                // Compute quartiles. Must return exactly 3 elements.
                var quartileData = d.quartiles = quartiles(d);
                var boundValueData = boundValue(d);
                // mont - modify

                var whiskerData = whiskerValue(d);
                var display = (quartileData[0] != 0 );
                var noData = [1];
                var opacityFunc = function (d) {
                    return display ? 1 : 1e-6
                };
                var opacityInverseFunc = function (d) {
                    var opaVal = (!display) ? 1 : 1e-6
                    return opaVal;
                };
                if (!display) {
                    noData = [1];
                }

                // Compute the new x-scale.
                var x1 = d3.scale.linear()
                    .domain(domain && domain.call(this, d, i) || boundValueData)
                    .range([height, 0]);

                // Retrieve the old x-scale, if this is an update.
                var x0 = this.__chart__ || d3.scale.linear()
                        .domain([0, Infinity])
                        .range(x1.range());

                // Stash the new scale.
                this.__chart__ = x1;

                // Note: the box, median, and box tick elements are fixed in number,
                // so we only have to handle enter and update. In contrast, the outliers
                // and other elements are variable, so we need to exit them! Variable
                // elements also fade in and out.

                // Update center line: the vertical line spanning the whiskers.
                var center = g.selectAll("line.center")
                    .data(whiskerData ? [whiskerData] : []);

                //vertical line
                center.enter().insert("line", "rect")
                    .attr("class", "center")
                    .attr("x1", width / 2)
                    .attr("y1", function (d) {
                        return x0(d[0]);
                    })
                    .attr("x2", width / 2)
                    .attr("y2", function (d) {

                        return x0(d[1]);
                    })
                    .style("opacity", 1e-6)
                    .transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y1", function (d) {
                        return x1(d[0]);
                    })
                    .attr("y2", function (d) {
                        return x1(d[1]);
                    });

                center.transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y1", function (d) {
                        return x1(d[0]);
                    })
                    .attr("y2", function (d) {
                        if (isNaN(x1(d[1]))) {
                            console.log(data)
                            console.log("a x1(d[1]) - " + x1(d[1]));
                            debugger;
                        }
                        return x1(d[1]);
                    });

                center.exit().transition()
                    .duration(duration)
                    .style("opacity", 1e-6)
                    .attr("y1", function (d) {
                        return x1(d[0]);
                    })
                    .attr("y2", function (d) {
                        return x1(d[1]);
                    })
                    .remove();

                // Update innerquartile box.
                var box = g.selectAll("rect.box")
                    .data([quartileData]);

                box.enter().append("rect")
                    .attr("class", "box")
                    .attr("x", 0)
                    .attr("y", function (d) {
                        return x0(d[2]);
                    })
                    .attr("width", width)
                    .style("opacity", opacityFunc)
                    .attr("height", function (d) {
                        return x0(d[0]) - x0(d[2]);
                    })
                    .transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y", function (d) {
                        return x1(d[2]);
                    })
                    .attr("height", function (d) {
                        return x1(d[0]) - x1(d[2]);
                    });

                box.transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y", function (d) {
                        return x1(d[2]);
                    })
                    .attr("height", function (d) {
                        return x1(d[0]) - x1(d[2]);
                    });

                // Update median line.
                var medianLine = g.selectAll("line.median")
                    .data([quartileData[1]]);

                medianLine.enter().append("line")
                    .attr("class", "median")
                    .attr("x1", 0)
                    .attr("y1", x0)
                    .attr("x2", width)
                    .attr("y2", x0)
                    .transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y1", x1)
                    .attr("y2", x1);

                medianLine.transition()
                    .duration(duration)
                    .attr("y1", x1)
                    .attr("y2", x1);

                // Update whiskers.
                var whisker = g.selectAll("line.whisker")
                    .data(whiskerData || []);

                whisker.enter().insert("line", "circle, text")
                    .attr("class", "whisker")
                    .attr("x1", 0)
                    .attr("y1", x0)
                    .attr("x2", 0 + width)
                    .attr("y2", x0)
                    .style("opacity", 1e-6)
                    .transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .attr("y1", x1)
                    .attr("y2", x1)
                    .style("opacity", 1);

                whisker.transition()
                    .duration(duration)
                    .attr("y1", x1)
                    .attr("y2", x1)
                    .style("opacity", opacityFunc)

                whisker.exit().transition()
                    .duration(duration)
                    .attr("y1", x1)
                    .attr("y2", x1)
                    .style("opacity", 1e-6)
                    .remove();


                // Compute the tick format.
                var format = tickFormat || x1.tickFormat(8);
                // Update noData
                var noDataLabel = g.selectAll("text.nodata").data(noData || []);

                var noDataLabelG = noDataLabel.enter().append("text")
                    .attr("class", "nodata")
                    // .attr("transform", "translate(0," + (chartSize.height + margin.top + 10) + ")")
                    // .call(xAxis)
                    // .append("text")             // text label for the x axis
                    .attr("x", (width / 2))
                    .attr("y", (height / 2))
                    .attr("dy", ".71em")
                    .style("text-anchor", "middle")
                    .style("font-size", "17px")
                    .style("color", "#cccccc")
                    .text("N\/A");

                noDataLabel.transition()
                        .duration(duration)
                        .style("opacity", opacityInverseFunc());

                // Update box ticks.
                var boxTick = g.selectAll("text.box")
                    .data(quartileData);
                if (showLabels == true) {
                    boxTick.enter().append("text")
                        .attr("class", "box")
                        .attr("dy", ".3em")
                        .attr("dx", function (d, i) {
                            return i & 1 ? 6 : -6
                        })
                        .attr("x", function (d, i) {
                            return i & 1 ? +width : 0
                        })
                        .attr("y", x0)
                        .attr("text-anchor", function (d, i) {
                            return i & 1 ? "start" : "end";
                        })
                        .text(format)
                        .transition()
                        .duration(duration)
                        .style("opacity", opacityFunc)
                        .attr("y", x1);
                }

                boxTick.transition()
                    .duration(duration)
                    .style("opacity", opacityFunc)
                    .text(format)
                    .attr("y", x1);

                // Update whisker ticks. These are handled separately from the box
                // ticks because they may or may not exist, and we want don't want
                // to join box ticks pre-transition with whisker ticks post-.
                var whiskerTick = g.selectAll("text.whisker")
                    .data(whiskerData || []);
                if (showLabels == true) {
                    whiskerTick.enter().append("text")
                        .attr("class", "whisker")
                        .attr("dy", ".3em")
                        .attr("dx", 6)
                        .attr("x", width)
                        .attr("y", x0)
                        .text(format)
                        .style("opacity", 1e-6)
                        .transition()
                        .duration(duration)
                        .attr("y", x1)
                        .style("opacity", opacityFunc);
                }
                whiskerTick.transition()
                    .duration(duration)
                    .text(format)
                    .attr("y", x1)
                    .style("opacity", opacityFunc);

                whiskerTick.exit().transition()
                    .duration(duration)
                    .attr("y", x1)
                    .style("opacity", 1e-6)
                    .remove();
            });
            d3.timer.flush();
        }

        box.drawChart = function (svg, margin, domain, data, dataValueBound, chartSize, label) {
            this.label = label;
            svg.attr("width", chartSize.width + margin.left + margin.right)
                .attr("height", chartSize.height + margin.top + margin.bottom)
                .attr("class", "box")
                .attr("style", "padding-left: 60px;")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            this.scaleX = d3.scale.ordinal()
                .domain(domain)
                .rangeRoundBands([0, chartSize.width], 0.7, 0.3);


            this.drawBox(svg, data, margin);

            // add a title
            svg.append("text")
                .attr("x", (chartSize.width / 2))
                .attr("y", (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "14px")
                //.style("text-decoration", "underline")
                .text(label.title);


            this.drawYAxis(svg, margin, dataValueBound, chartSize, label);
            this.drawXAxis(svg, margin, chartSize, label);
        };
        box.drawBox = function (svg, data, margin) {
            var chart = this;
            var d3Entering = svg.selectAll(".box")
                .data(data)
                .enter();
            box.myGroupBox = d3Entering.append("g")
                .attr("transform", function (d) {
                    return "translate(" + chart.scaleX(d[0]) + "," + margin.top + ")";
                });
            box.myGroupBox.call(chart.width(chart.scaleX.rangeBand()));
        };
        box.drawYAxis = function (svg, margin, dataValueBound, chartSize, label) {

            // the y-axis
            console.log("drawYAxis");
            var y = d3.scale.linear()
                .domain(dataValueBound)
                .range([chartSize.height + margin.top, margin.top]);

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text") // and text1
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .style("font-size", "10px")
                .text(label.y);
            return box;
        };
        box.drawXAxis = function (svg, margin, chartSize, label) {
            // draw x axis

            var xAxis = d3.svg.axis()
                .scale(this.scaleX)
                .orient("bottom");
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (chartSize.height + margin.top + 10) + ")")
                .call(xAxis)
                .append("text")             // text label for the x axis
                .attr("x", (chartSize.width / 2))
                .attr("y", 20)
                .attr("dy", ".71em")
                .style("text-anchor", "middle")
                .style("font-size", "10px")
                .text(label.x);
            return box;
        };

        box.myGroupBox = function (x) {
            if (!arguments.length) return myGroupBox;
            myGroupBox = x;
            return myGroupBox;
        };
        box.updateDataList = function (x) {
            if (!arguments.length) return updateDataList;
            updateDataList = x;
            return box;
        };

        box.width = function (x) {
            if (!arguments.length) return width;
            width = x;
            return box;
        };

        box.height = function (x) {
            if (!arguments.length) return height;
            height = x;
            return box;
        };

        box.tickFormat = function (x) {
            if (!arguments.length) return tickFormat;
            tickFormat = x;
            return box;
        };
        box.label = function (x) {
            if (!arguments.length) return label;
            label = x;
            return box;
        };

        box.duration = function (x) {
            if (!arguments.length) return duration;
            duration = x;
            return box;
        };

        box.domain = function (x) {
            if (!arguments.length) return domain;
            domain = x == null ? x : d3.functor(x);
            return box;
        };

        box.value = function (x) {
            if (!arguments.length) return value;
            value = x;
            return box;
        };
        box.showLabels = function (x) {
            if (!arguments.length) return showLabels;
            showLabels = x;
            return box;
        };
        box.whiskerValue = function (x) {
            if (!arguments.length) return whiskerValue;
            whiskerValue = x;
            return box;
        };
        box.boundValue = function (x) {
            if (!arguments.length) return whiskerValue;
            boundValue = x;
            return box;
        };

        box.quartiles = function (x) {
            if (!arguments.length) return quartiles;
            quartiles = x;
            return box;
        };

        return box;
    };

})();