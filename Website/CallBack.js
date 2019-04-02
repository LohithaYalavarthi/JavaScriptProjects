function showCircle(cx, cy, radius){
  var Element = document.createElement("circle");
  var CX =document.createAttribute("cx");
  var CY =document.createAttribute("cx");
  var R =document.createAttribute("cx");

  CX.value= cx;
  CY.value= cy;
  R.value= radius;
  Element.setAttributeNode(CX);
  Element.setAttributeNode(CY);

}
showCircle(150, 150, 100);