(function chart1() {
  var width = window.innerWidth,
      height = window.innerHeight;

  var color = d3.scale.category20();

  var fisheye = d3.fisheye.circular()
      .radius(400);

  var force = d3.layout.force()
      .charge(-15000)
      .gravity(.4)
      .size([width, height]);

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("/data/home_page.json", function(data) {
    var n = data.nodes.length;

    force.nodes(data.nodes);
        // .links(data.links);

    // data.nodes.forEach(function(d, i) { d.x = d.y = width / n * i; });
    data.nodes[0].x = width / 2;
    data.nodes[0].y = height / 2;

    // Run the layout a fixed number of times.
    // The ideal number of times scales with graph complexity.
    // Of course, don't run too long—you'll hang the page!
    // force.start();
    // for (var i = n; i > 0; --i) force.tick();
    // force.stop();
    force.start();

    // Center the nodes in the middle.
    var ox = 0, oy = 0;
    data.nodes.forEach(function(d) { ox += d.x, oy += d.y; });
    ox = ox / n - width / 2, oy = oy / n - height / 2;
    data.nodes.forEach(function(d) { d.x -= ox, d.y -= oy; });

    var node = svg.selectAll(".node")
        .data(data.nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", 100)
        .style("fill", function(d) {
          switch(d.name) {
            case "":
              return "url(#eben)";
            case "Facebook":
              return "url(#facebook)";
            case "Twitter":
              return "url(#twitter)";
            case "Github":
              return "url(#github)";
            case "Spotify":
              return "url(#spotify)";
            case "Instagram":
              return "url(#instagram)";
            default:
              return color(d.group);
          }
        });

    svg.on("mousemove", function() {
      fisheye.focus(d3.mouse(this));

      node.each(function(d) { d.fisheye = fisheye(d); })
          .attr("cx", function(d) { return d.fisheye.x; })
          .attr("cy", function(d) { return d.fisheye.y; })
          .attr("r", function(d) { return d.fisheye.z; });
    });

    force.on("tick", function() {
      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });
  });

force.stop();
})();

