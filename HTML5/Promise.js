try{
    console.log("excuted")
	lalal
}

catch(err){
  alert(err.message);
}

console.log("excuted 2")


try{
	setTimeout(()=>{
		lala
	},0)
}
catch(err){
  alert(err)
}

setTimeout(()=>{
	try{
        lllaa
	 }
	 catch(err){
	 	alert(err)
	 }
},0)
	var a ='{"name": "lohihta"}'
	try{	
	 let user = JSON.parse(a);
	 alert(user.age);
	}
	catch(e){
	  alert("here", e.message );

	}

let promise = new Promise(function(resolve, reject) {
   resolve("done!");
});

promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);