'use strict';

class Graph {
  constructor(){
    this.nodeCount = 0;
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodeCount++;
    this.adjacencyList[node] = { value: node, edges: {}};
  }

  addEdge(node1, node2, weight = null) {
    if(!this.adjacencyList[node1].edges[node2]) {
      this.adjacencyList[node1].edges[node2] = weight;
      this.adjacencyList[node2].edges[node1] = weight;
    }
  }

  getNodes() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(node) {
    if (this.adjacencyList[node]) {
      return Object.entries(this.adjacencyList[node].edges);
    }
  }

  size() {
    return this.nodeCount;
  }

  getEdge(graph, array) {
    let cost = 0;
    
    if (!graph.adjacencyList[array[0]]) {
      return 'False, $0';
    }

    for (let i = 0; i < array.length-1; i++) {
      let neighbors = graph.getNeighbors(array[i]);
      let found = false;

      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j][0] === array[i + 1]) {
          found = true;
          cost += neighbors[j][1];
        }
      }

      if (!found) {
        return 'False, $0';
      }
    }

    return `True, $${cost}`;
  }
}


// let map = new Graph();
// map.addNode('Pandora');
// map.addNode('Arendelle');
// map.addNode('Metroville');
// map.addNode('Monstropolis');
// map.addNode('Naboo');
// map.addNode('Narnia');

// map.addEdge('Pandora', 'Arendelle', 150);
// map.addEdge('Pandora', 'Metroville', 82);
// map.addEdge('Metroville', 'Narnia', 37);
// map.addEdge('Metroville', 'Naboo', 26);
// map.addEdge('Metroville', 'Arendelle', 99);
// map.addEdge('Metroville', 'Monstropolis', 105);
// map.addEdge('Narnia', 'Naboo', 250);
// map.addEdge('Naboo', 'Monstropolis', 73);
// map.addEdge('Monstropolis', 'Arendelle', 42);

// console.log('map', map.getNodes());
// console.log('neighbors', map.getNeighbors('Metroville'));
// console.log('size', map.size());



// console.log(map.getEdge(map, ['Metroville', 'Pandora']));
// console.log(map.getEdge(map, ['Arendelle', 'Monstropolis', 'Naboo']));

// console.log(map.getEdge(map, ['Naboo', 'Pandora']));
// console.log(map.getEdge(map, ['Narnia', 'Arendelle', 'Pandora']));

module.exports = Graph;
