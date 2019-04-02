function doFirst(){
  mypic= document.getElementById("facepic")
  mypic.addEventListener("dragstart",startDrag)
  mypic.addEventListener("dragend",dragEnd)
  leftbox= document.getElementById("leftbox");
  leftbox.addEventListener("dragenter", function(e){
   e.preventdefault();
  }, false);
  leftbox.addEventListener("dragover", function(e){	
  e.preventdefault();
  }, false);
  leftbox.addEventListener("drop", dropped, false);
} 
function startDrag(e){
var code= '<img id="facepic" src="graphics.png" >';
e.dataTransfer.setData("Text", code);
}

function dragEnd(){
 console.log("end");

}
function dropped(e){
 e.preventdefault();	
 leftbox.innerHTML = e.dataTransfer.getData("Text")
}
window.addEventListener("load",doFirst,)
var $orders= $("#orders");
$.ajax(
{
	type:"GET",
	url:"https://jsonplaceholder.typicode.com/todos/1",
	success:function(data){
		$.each(data,function(i,item){
          $orders.append("<li>name :"+ order.name + "")
		})
	}
}
)

async function f(){
	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=> resolve("done"),3000);
	})
	let result= await promise;

	alert(result);
}


f();
history.go(0);/*Refresh Case*/
history.go(-3);/*Goes three pages back*/
history.back();/*Goes back page*/
history.forward();/*Goes forward*/
history.replaceState("beau is great", null, "unicycle.html");
console.log(history.state);

(function(){
	var a= "Hello"
	console.log(a);
})()

var DelightSalary= (function(){
  var Salary = 10000	
  function getSalary(amount){
  	 Salary += amount;
  }
  return{
        raise : function(){
           getSalary(5000)
        },
        lower : function(){
        	 getSalary(-5000)
        },
        currentAmount: function(){
        	return Salary;
        }
 
  	
  	}
})()

"1"+2 /*12*/
1+"2" /*12*/
1+2 /*3*/

var getAccountNumber=  (function(){
  var UserId= "23344"
 return{ 
  getUserId: function(){
          return UserId; 
      },
  getAccountNumber: function(){
    $.ajax({
     type:"GET",
      url:"https://jsonplaceholder.typicode.com/todos/1",
      success: function(data){
      	console.log(data);
      }
    })
   return data;
  }
}

})()