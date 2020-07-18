# Hashmap Left Join
Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge 
* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency
O(n)?

## Solution

```
const leftJoin = (table01, table02) => {
    for(let i = 0; i < table02.length; i++) {
        if(!table02[i]) {
            continue; 
        } else if (table02[i].length) {
            let rightEntry = table02[i]; 
            let key = rightEntry[0]; 
            let value = rightEntry[1]; 

            let indx = hash(key, table01.length); 
            let leftEntry = table01[indx]; 

            if (!leftEntry) {
                table01[indx] = [key, null, value]; 
            } else if (leftEntry.length) {
                table01[indx].push(value); 
            } else if (leftEntry.next) {
                let current =  leftEntry.prev

                while(current) {
                    if (current[0] === key) {
                        current.push(value); 
                        break; 
                    }

                    current = current.next; 
                }
            }
        } else  if (table02[i].next) {
            // collision 
        }
    }
}
```
