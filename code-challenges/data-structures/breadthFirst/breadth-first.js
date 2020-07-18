'use strict';

const Queue = require('../stacksAndQueues/queue');
const Graph = require('../graph/graph');




let g = new Graph();
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);
g.addNode(6);
g.addNode(7);

g.addEdge(1, 3);
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(2, 7);

bfs(g);


