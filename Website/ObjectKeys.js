let user = {
  name: 'John',
  age: 30
};

alert( count(user) );

function count(){
  return   Object.keys(user).length;
}