//  Pseodocode
/*
initialize a new Map
result = []
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the result array
return result
*/

function intersection(a, b) {
    let mapA = new Map();
    let result = new Set();

    a.forEach(element => {
        mapA.set(element);
    });

    b.forEach(element => {
        if (mapA.has(element)) {
            result.add(element);
        }
    });
    const resultArray = [...result];
    return resultArray;
}

module.exports = intersection;
