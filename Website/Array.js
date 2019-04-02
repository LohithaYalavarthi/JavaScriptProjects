var b= [3,9,8,5];
b.sort(); // [3,5,8,9];

var b = [1,15,2]
b.sort() // This wont do sort properly it gives [1,15,2]

//so we need to use the function comparater

b= [1,2,3]
p = s.split(/\W+/).filter( word => word.length > 2)
p.sort((a,b) => 
{
  alert(a);
  alert(b);
  alert(b.length-a.length)
  return b.length-a.length
}  
  )
