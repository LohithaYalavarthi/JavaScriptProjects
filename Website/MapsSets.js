"use strict"
let myArray = [22,33,44,55,66,77];
let mySet = new Set(myArray);
mySet.add("100");
mySet.add({a :2 ,b :300});
mySet.delete(22);
mySet.clear();
mySet.add(400);
mySet.add(500);
console.log(mySet.size);
console.log("ArraySet", mySet);
mySet.forEach(function(val){console.log(val)});
/*let john ={name : "John"};
let pete = {name : "Pete"};
let mary = {name : "Mary"};
mySet = new Set();
mySet.add(john);
mySet.add(pete);
mySet.add(mary);
console.log("Object Set",mySet );
*/
for (let key of mySet){
  console.log(key);
}


//Map Area; 
var map = new Map({name : "john"});// error
var map = new Map();
map.set("1","str");
map.set(1,"num1");
console.log(map);
map.get(1);

var map = new Map([ ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
var map = new Map(Object.entries({name : "john"}));
map = new Map ([['name' ,'john']]);
map.set("name", "rahul"); //override the name john with name rahul
map.set("h2","ht");
map.delete(h2);
// WeakSet
var carWeakSet = new WeakSet();
 var car ={
  make :"Honda",
  model :"Civic"
}
carWeakSet.add(car);
console.log(carWeakSet);

// unique Array
function unique(arr) {
  alert(arr);
  alert(new Set(arr));
  return Array.from(new Set(arr));
}
 var vals = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(vals)) ; 
console.log(Values);

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 
function aclean(arr){
 for(key of arr){
   for(let char of key){
     var store = char;
   }
 }
 console.log(res);
}

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    console.log(sorted);
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
let map = new Map();

let map = new Map();

map.set("name", "John");

 keys = map.keys();
console.log(Array.from(keys));
keys= Array.from(keys)
// Error: numbers.push is not a function
keys.push("more");