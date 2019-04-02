alert("Im JavaScript")
let a= prompt('a?', '');
a=Number(a);
console.log(a);
switch (a){
  case 0:
      alert("0");
       break;
   case 1:
       alert(1);
       break;

    case 2 :
    case 3 :
       alert(2,3);
       break;   
           
}

for( var i=0 ; i<=3 ;i++ ){ 
     if( i% 2 == 0 ) continue     
    alert(i);
}  
for(;;){
    alert();
}
// Infinite loop

const Test = {
    name: "John"
  };
  
  // Error (can't reassign user)
  Test = {
    name: "Pete"
  };


  function isEmpty(value){
    for (var key in value){
          return false
           
        }
  return true;
    }  
  

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
let sum=0;
      for( let key in salaries){
          sum += salaries[key];
      }
      let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
      let multiply =1;
      for( let key in menu){
          if(typeof(key) === "number")
        menu[key] *= 2;
    }

    