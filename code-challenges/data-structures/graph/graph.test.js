'use strict';

const Graph = require('./graph.js');


describe('Happy Paths', () => {
    it('1. Node can be successfully added to the graph', () => {

      let testGraph = new Graph();
      let testNode = testGraph.addNode('test1');
       
        expect(testGraph.size()).toBe(1);
        expect(testNode).toEqual(['test1']);
    });

    it('2. An edge can be successfully added to the graph', () => {
      let testGraph = new Graph();
      testGraph.addNode('1');
      testGraph.addNode('2');
      testGraph.addEdge('1', '2');

      expect(testGraph.size()).toBe(2);
      expect(testGraph.getNeighbors('1')).toEqual([{node: '2', weight: 1}]);
      expect(testGraph.getNeighbors('2')).toEqual([{node: '1', weight: 1}]);

    });

    it('3. A collection of all nodes can be properly retrieved from the graph', () => {

      let testGraph = new Graph();
      testGraph.addNode(1);

      let graph = testGraph.getNodes();

      console.log('graph', graph);
        
      expect(testGraph.size()).toBe(1);
      expect(graph).toBe('1->');
    });

    it('4. All appropriate neighbors can be retrieved from the graph', () => {

      let testGraph = new Graph();
      testGraph.addNode(1);
      testGraph.addNode(2);
      testGraph.addEdge(1, 2);

      let one = testGraph.getNeighbors(1);
      let two = testGraph.getNeighbors(2);
          
      expect(testGraph.size()).toBe(2);
      expect(one).toEqual([{node: 2, weight: 1}]);
      expect(two).toEqual([{node: 1, weight: 1}]);
    });

    it('5. Neighbors are returned with the weight between nodes included', () => {
      let testGraph = new Graph();
      testGraph.addNode(1);
      testGraph.addNode(2);
      testGraph.addEdge(1, 2);

      let one = testGraph.getNeighbors(1);
      let two = testGraph.getNeighbors(2);
          
      expect(testGraph.size()).toBe(2);
      expect(one[0].weight).toBe(1);
      expect(two[0].weight).toBe(1);
    });

    it('6. The proper size is returned, representing the number of nodes in the graph', () => {
      let testGraph = new Graph();
      testGraph.addNode(1);
      testGraph.addNode(2);
      testGraph.addNode(3);
      testGraph.addNode(4);
      testGraph.addNode(5);

          
      expect(testGraph.size()).toBe(5);
    });

    it('7. A graph with only one node and edge can be properly returned', () => {
          
      expect(false).toBe(null);
    });

    it('8. An empty graph properly returns null', () => {
      let testGraph = new Graph();

      expect(testGraph.size()).toBe(0);
      expect(testGraph.getNodes().toBe(null));
    });

});

