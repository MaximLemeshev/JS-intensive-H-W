Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }
  let arr = [];
  for (i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};