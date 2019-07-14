var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['PA','PB','PC','PD','PE'];

//Data
var d = [
		  [
			{axis:"A",value:2},
			{axis:"B",value:1},
			{axis:"C",value:3},
			{axis:"D",value:2},
			{axis:"E",value:4},
			{axis:"F",value:3},
			{axis:"G",value:3},
			{axis:"H",value:4},
		  ],[
			{axis:"A",value:2},
			{axis:"B",value:2},
			{axis:"C",value:4},
			{axis:"D",value:4},
			{axis:"E",value:3},
			{axis:"F",value:2},
			{axis:"G",value:2},
			{axis:"H",value:3},
		  ],[
			{axis:"A",value:5},
			{axis:"B",value:4},
			{axis:"C",value:5},
			{axis:"D",value:1},
			{axis:"E",value:3},
			{axis:"F",value:1},
			{axis:"G",value:1},
			{axis:"H",value:3},
		  ],[
			{axis:"A",value:3},
			{axis:"B",value:2},
			{axis:"C",value:3},
			{axis:"D",value:3},
			{axis:"E",value:4},
			{axis:"F",value:3},
			{axis:"G",value:2},
			{axis:"H",value:3},
		  ],[
			{axis:"A",value:4},
			{axis:"B",value:3},
			{axis:"C",value:3},
			{axis:"D",value:2},
			{axis:"E",value:4},
			{axis:"F",value:2},
			{axis:"G",value:2},
			{axis:"H",value:3},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("P");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	