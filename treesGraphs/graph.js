// vertex
var Vertex = function(id){
  this.value = id;
  this.edges = {};
}

// graph
var Graph = function(){
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

// add vertex
Graph.prototype.addVertex = function(id) {
  // find out if the id does not exist
  if ( this.vertices[id] === undefined ){
    var newVertex = new Vertex(id);
    this.vertices[id] = newVertex;
    this.totalVertices++;
  }
}

// get vertex
Graph.prototype.getVertex = function(id) {
  // find out if the id is defined
  if (this.vertices[id] !== undefined) {
    return this.vertices[id];
  } else {
    console.log("The ID " + id + " does not exist");
  }
}

// add edge 
Graph.prototype.addEdge = function(id1, id2){
  // 1) check to see both id1 and id2 are not undefined
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined){
    // 2) make sure the edge does not exist already
    if (this.vertices[id1].edges[id2] === undefined & this.vertices[id2].edges[id1] === undefined){
      this.vertices[id1].edges[id2] = id2;
      this.vertices[id2].edges[id1] = id1;
      this.totalEdges++;
    } else {
      console.log("Edge already exists");
    }
  } else {
    console.log("Either id1 or id2 doesn't exist in graph");
  }
}

// remove edge 
Graph.prototype.removeEdge = function(id1, id2){
  // 1) check to see both id1 and id2 are not undefined
  if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined){
    // 2) make sure the edge does exist already
    if (this.vertices[id1].edges[id2] !== undefined & this.vertices[id2].edges[id1] !== undefined){
      delete this.vertices[id1].edges[id2];
      delete this.vertices[id2].edges[id1];
      this.totalEdges--;
    } else {
      console.log("Edge does not exists");
    }
  } else {
    console.log("Either id1 or id2 or both doesn't exist in graph");
  }
}

// remove vertex
Graph.prototype.removeVertex = function(id) {
  // check the id exists
  if (this.vertices[id] !== undefined) {
    // delete the edges first
    var toDelete = this.vertices[id];
    for (var edge in toDelete){
      this.removeEdge(id, edge);
    }
    // delete the vertex
    delete this.vertices[id];
    this.totalVertices--;
  } else {
    console.log("Vertex does not exists");
  }
}

// find neighbors
Graph.prototype.findNeighbors = function(id) {
  var neighbors = [];
  // check to make id exists
  if (this.vertices[id] !== undefined) {
    var edges = this.vertices[id].edges;
    for (var edge in edges) {
      neighbors.push(edge);
    }
    return neighbors;
  } else {
    console.log("Id does not exists");
  }
}

// for each vertex
Graph.prototype.forEachVertex = function(func){
  for (vertexKey in this.vertices){
    func(this.vertices[vertexKey]);
  }
}

// for each edge
Graph.prototype.forEachEdge = function(func) {
  for (vertexKey in this.vertices){
    var vertex = this.vertices[vertexKey];
    for (var edge in vertex.edges) {
      func(edge, vertex.value);
    }
  }
}