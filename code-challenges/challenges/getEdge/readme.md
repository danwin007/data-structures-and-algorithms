# Challenge Summary
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge Description
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
I messed up and misunderstood the question. I tried to look for guides to show how to find the cheapest path between two nodes. I didn't realize I needed to just check if edges existed and return the total weight of the edges. Now it's kind of late. I will try to refactor tomorrow :(

Edit: Clayton helped me figure this one out

## Solution
```
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
```

## Credit

[Walkthrough of Dijkstra's Algorithm](https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026)

^^That part turned out to not be as helpful as I thought. I burned way too much time building out that solution. 

Big Credit to Clayton.