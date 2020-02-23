exports.min = function min (array) {
  if (array===undefined||array[0]===undefined) return 0;
  let min=array[0];
  for (let i in array) (array[i]<min) ? min = array[i] : null;
return min;
}

exports.max = function max (array) {
  if (array===undefined||array[0]===undefined) return 0;
  let max = array[0];
  for (let i in array) (array[i]>max) ? max = array[i] : null;
  return max;
}

exports.avg = function avg (array) {
  if (array===undefined||array[0]===undefined) return 0;
  let sum=0;
  for (let i in array) sum+=array[i];
  return sum/array.length;
}