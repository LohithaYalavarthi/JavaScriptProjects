//Purpose of try is to catch the errors we dont what the user may enters or Bad Json Or Invalid response canbe handled using  catch
let json = '{bad Json}'

try{
var user= JSON.parse(json);
alert(user.name);
}
catch(err){
  alert(err.name);
  alert(err.message) // throw message for particular error
  alert(err.stack) //tells which line the error is ..
}

  let json2 = '{"age": 30}';
  try{
  var user =JSON.parse(json2)
  if(!json2.name){
  // throw new Error("In correct dta")
    throw new SyntaxError("Incomplete data: no name"); 
  }
  alert(user.name);
  }
  catch(e){
    alert("JSON ERROR", e.message);
    alert(e.stack);
  }

  function f() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (e) {
      if("can't handle the error") {
        throw e;
      }
  
    } finally {
      alert('cleanup!')
    }
  }
  
  f(); 
  console.log("hello");
  let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

 /* if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }*/

  blabla(); // unexpected error

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    alert("else error"+ e);
    throw e; // rethrow (*)
  }

}
try{
  let count =0;
  setTimeout(()=> console.log(count++),1000);
  console.log("ucan do it");
}
catch(e){
  alert(e.message)
}
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // caught it!
}
/////
function func() {

  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() );
console.log("hi")