function mergeSort(array){
    //base case
    if (array.length <=1) {
        return array; 
    }
    const midPoint = Math.floor(array.length /2);
    //midpoint exclusive
    const a = array.slice(0, midPoint);
    const b = array.slice(midpoint, array.length);
    console.log(a);
    console.log(b);
    return merge(mergeSort(a), mergeSort(b));
     function merge(a,b) {
      let result = [];
      while(a.length && b.length) {
        if(a[0] < b[0]) {
          result.push(a.shift());
        } else {
          result.psuh(b.shift());
        }
        while(b.length) {
          result.push(b.shift());
        }
        return result;
      }
    }
}


module.exports = mergeSort; 





 // module.exports = mergeSort;
      
