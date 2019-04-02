let range ={
  from :  1,
  to : 5
}

/*for (key in range){
 console.log(key);
}
*/

range[Symbol.iterator] = function(){

  return{
    current : this.from,
    last : this.to,
    next(){
      if(this.current <= this.last){
       return {done: false , value :this.current++}
      }
      else{
        return {done : true}
      }
     }
  }

}

for(num of range){
  alert(num);
}

var Range2 = { 
  name: "lo",
  count : 0,
  to: 5,
  [Symbol.iterator]() {
    this.count = this.count;
    return this;
  },

  next(){
    if (this.count <= this.to) {
        return { done: false, value: this.count++ };
      }
      else {
        return { done: true };
      }
    }
}


for (key of Range2) {
   alert(key)
   }

   let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }

  for (let char of "test") {
    alert( char ); // t, then e, then s, then t
  }

  let arrayLike = { // has indexes and length => 
    0: "Hello",
    1: "World",
    length: 2
  };
  Array.from(arrayLike);