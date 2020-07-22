'use strict';

const Graph = require('./get-edge.js');


describe('Happy Paths', () => {
    it('1. It can detect a true path', () => {

      let map = new Graph();
      map.addNode('Pandora');
      map.addNode('Arendelle');
      map.addNode('Metroville');
      map.addNode('Monstropolis');
      map.addNode('Naboo');
      map.addNode('Narnia');

      map.addEdge('Pandora', 'Arendelle', 150);
      map.addEdge('Pandora', 'Metroville', 82);
      map.addEdge('Metroville', 'Narnia', 37);
      map.addEdge('Metroville', 'Naboo', 26);
      map.addEdge('Metroville', 'Arendelle', 99);
      map.addEdge('Metroville', 'Monstropolis', 105);
      map.addEdge('Narnia', 'Naboo', 250);
      map.addEdge('Naboo', 'Monstropolis', 73);
      map.addEdge('Monstropolis', 'Arendelle', 42);
       
        expect(map.size()).toBe(6);
        expect(map.getEdge(map, ['Metroville', 'Pandora'])).toEqual('True, $82');
    });

    it('2. It can detect a true path', () => {
      let map = new Graph();
      map.addNode('Pandora');
      map.addNode('Arendelle');
      map.addNode('Metroville');
      map.addNode('Monstropolis');
      map.addNode('Naboo');
      map.addNode('Narnia');

      map.addEdge('Pandora', 'Arendelle', 150);
      map.addEdge('Pandora', 'Metroville', 82);
      map.addEdge('Metroville', 'Narnia', 37);
      map.addEdge('Metroville', 'Naboo', 26);
      map.addEdge('Metroville', 'Arendelle', 99);
      map.addEdge('Metroville', 'Monstropolis', 105);
      map.addEdge('Narnia', 'Naboo', 250);
      map.addEdge('Naboo', 'Monstropolis', 73);
      map.addEdge('Monstropolis', 'Arendelle', 42);

      expect(map.size()).toBe(6);
      expect(map.getEdge(map, ['Naboo', 'Pandora'])).toEqual('False, $0');
    });

    it('3. It can detect a true path that results in round trip', () => {

      let map = new Graph();
      map.addNode('Pandora');
      map.addNode('Arendelle');
      map.addNode('Metroville');
      map.addNode('Monstropolis');
      map.addNode('Naboo');
      map.addNode('Narnia');

      map.addEdge('Pandora', 'Arendelle', 150);
      map.addEdge('Pandora', 'Metroville', 82);
      map.addEdge('Metroville', 'Narnia', 37);
      map.addEdge('Metroville', 'Naboo', 26);
      map.addEdge('Metroville', 'Arendelle', 99);
      map.addEdge('Metroville', 'Monstropolis', 105);
      map.addEdge('Narnia', 'Naboo', 250);
      map.addEdge('Naboo', 'Monstropolis', 73);
      map.addEdge('Monstropolis', 'Arendelle', 42);
        
      expect(map.size()).toBe(6);
      expect(map.getEdge(map, ['Naboo', 'Narnia', 'Metroville', 'Pandora', 'Arendelle', 'Monstropolis', 'Naboo'])).toEqual('True, $634');
    });

});

