function readNumber(){
  var b = prompt("Enter Number");
  do{
    prompt("Enter Number");
  }while(isFinite(b))
  if (b === null || b === '') return null;

  return +num;
}
