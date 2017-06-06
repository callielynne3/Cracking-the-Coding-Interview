// breadth-first search
Graph.prototype.bfs = function(start) {
    var listToExplore = [start];

    nodes[start].visited = true;

    while (listToExplore.length > 0) {
        var nodeIndex = listToExplore.shift();
        nodes[nodeIndex].links.forEach(function( childIndex) {
            if (!nodes[childIndex].visited) {
                nodes[ childIndex].visited = true;
                listToExplore.push(childIndex);
            }
        });
    }
};

// depth-first search
Graph.prototype.dfs = function(start) {
    var listToExplore = [start];

    nodes[start].visited = true;

    while (listToExplore.length > 0) {
        var nodeIndex = listToExplore.shift();
        nodes[nodeIndex ].links.forEach(function(childIndex) {
            if (!nodes[ childIndex].visited) {
                nodes[ childIndex].visited = true;
                listToExplore.push( childIndex);
            }
        });
    }
};