 var promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
          alert("hel");
        //  resolve();
        reject(new Error("Its not done"))
        },1000)
       })
promise
.then(()=>{
  alert("Its resolved");
})
.catch((e) => {
 alert("In error")
});

alert("helo you did greta")

function loadScript(src){
return new Promise((resolve,reject)=>{
let script =document.createElement("script");
script.src= src
console.log(script); 
script.onload = ()=> resolve(script);
script.onerror =()=>reject(new Error("its not good"+ src))
document.head.append(script);
})
}

let promise2 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");


promise2.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);
// set Time
setTimeout(()=> {PaT},1000)
function PaT(){
  alert("Hello");
}
function delay(ms){
  return new Promise(resolve=>{setTimeout(()=>{
    alert("hi");
    resolve();
  },ms)})
}
delay(3000).then(()=> alert("its syper"+ ));

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));