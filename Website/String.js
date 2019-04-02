let str ="Helllo World"
let pos = 0;

while(true){
 var foundpos= str.indexOf("l",pos)
if(foundpos != -1)
{
  pos=foundpos+1;
  alert(pos)
}
else{
  break;
}
}
function truncateString(str,MaxLength){
if(str.length > 20){
  var str1= str.substr(0,20)
  var str2 = str1+"..." ;
}
else{
  return str;
}
}
function extractCurrencyValue(str){
    var str1="";
    for(var i of str){
      if(!(isNaN(i))){
        alert(i);
        str1 += i;
      }
    }
    return str1;
  }