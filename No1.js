function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
function findMostValue(ary) {
  let count = {};
  let result = {};
  q.forEach((element) => {
    if (result[element]) {
      count[element] += 1;
    } else {
      result[element] = element;
      count[element] = 1;
    }
  });
  const values = Object.values(count);
  const max = Math.max(...values);
  let key = getKeyByValue(count, max);
  return { result: key, count: max };
}

let q = [6, -1, 6, 3, 3, 6, 5, 6, 6, 7];
console.log(findMostValue(q));