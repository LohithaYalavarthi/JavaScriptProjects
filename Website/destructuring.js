function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
 alert(width);
}
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
// simplified parameters a bit for clarity
function showMenu({ title = "Menu", width = 100, height = 200 } ={}) {
  alert( `${title} ${width} ${height}` );
}

showMenu();
var user2 = {
  name2: "John",
  years2: 30
};
 var {name2 , years2:age ,isAdmin = "false"}= user2;
 
alert( name2 ); // John
alert( age ); // 30
alert( isAdmin ); // false
var salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Object.entries(salaries);
topSalary(salaries)
function topSalary({"John" :J ,"Pete" : P,"Mary": M}){
  max =0 ;
  alert(J);
 var val = Math.max(J,P,M);
   alert(val);
   for( let [name,salary] of Object.entries(salaries) ) {  if(name <salary) {
         max = salary;
         maxName = name;
   }
   return maxName;

   }

}