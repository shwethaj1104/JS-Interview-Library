// It is same like map but it will not return new array just call the calback for each value
// Foreach will take callback function as argument and call the same for each value
// callback function takes current Item, index, arr as parameter
// Need to check element exists in the array or not then call the callback function


Array.prototype.customForEach = function(callbackFn){
    let source =  this;
    for(let index = 0; index < source.length ;index++){
        if(index in soureArray){
            callbackFn.call(source, source[index], index, source);
        }
    }
}


const nums = [1,2,3,4];
nums.customForEach((num,index,nums) => console.log(num, index, nums))



// Find : This method is used to find the element in the array, 
// once its found since we need send single value, we can return the result immediately
// It takes a callback, When the find condition is valid inside callback it will return true 
// Once it returns true then immediate return the find value, If not -1

Array.prototype.myFind = function(callback) {
    let arr = this;

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return arr[i]
        }
    }

    return -1;
}

const nums1 = [1,2,3,4]
nums1.find((num,index, nums) => num === 4) //Return 4
nums1.find((num,index, nums) => num === 25) //Return -1


//returns TRUE if AT LEAST ONE element passes the condition
Array.prototype.customSome = function(callback, thisArgs) {
  if (typeof callback !== 'function') {
    throw new Error('Invalid Function');
  }

  let sourceArray = this;
  let length = this.length;

  for (let index = 0; index < length; index++) {
    if (index in sourceArray) {
      if (callback.call(thisArgs, sourceArray[index], index, sourceArray)) {
        return true;   // 🔥 stop immediately
      }
    }
  }
  return false;
};


//returns TRUE only if ALL elements pass the condition
Array.prototype.customSome = function(callback, thisArgs) {
  if (typeof callback !== 'function') {
    throw new Error('Invalid Function');
  }

  let sourceArray = this;
  let length = this.length;

  for (let index = 0; index < length; index++) {
    if (index in sourceArray) {
      if (callback.call(thisArgs, sourceArray[index], index, sourceArray)) {
        return true;   // 🔥 stop immediately
      }
    }
  }
  return false;
};
