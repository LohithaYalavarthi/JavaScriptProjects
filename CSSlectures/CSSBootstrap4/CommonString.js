
var str1="SomeName";
var str2="OtherName";

function CommonString(str1, str2){
	if(str1 === str2){
		return str1;
	}
	else{
		str1.substr()
	}
 

}

var numbers = [434, 22323, 5232, 13232, 32322];


numbers.sort(function(a,b){
	return b-a;
});
console.log(numbers.join(""))

var array=[267, 306, 108]

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

var maxCombine = function (a){
  return +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''));
}  
