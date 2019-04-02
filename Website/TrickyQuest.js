var b = [2,3,4,2] -//Make with out duplicates
var c= new Set(b); // {2,3,4}
var d= Array.from(c);

//If u dont want to acces the var outside the scope
(function(){
  var l;
  let b;
  console.log(l);
  console.log(b);
})
var b= {name: "lohi"}
Object.freeze(b) //For freezing an object
var b= {name: "lohi"}
Object.seal(b); // this will allow to modify the existing or remove property
b.name= ""
//property->but not allow the new add property

let x= function(){
return //here return thats it ,if you want the object to return then it should this way return {a : "lohi" } or else having braces in next line after return would return 
{
 a: "lohi"
}
}
console.log(x());

//Modified to
let x= function(){
  return {
   a: "lohi"
  }
  }
  console.log(x());

  //
  let profile ={
    name :"techsith",
    age: 30 //only modify this
   }


   var profile2={
     name :"techsith"
   }
   Object.defineProperty(profile2,"age",{
    value:30,
    writable : false
   })
   profile2.name= "lohitha"
   profile2.age=4
   console.log(profile2);


   var num= [1,2,3]
   var func2 = function(...arg){
        console.log("val" ,arg);
   }
   func2(2,3,4,5);



   const MathLibrary = {
     multiply(a,b){
      console.log(a*b);
     },
    calculateProduct(...rest){
              console.log(rest);
              console.log(...rest);
              return this.multiply(...rest);
           }
   }
   MathLibrary.calculateProduct([2,3,4,5]);
   



