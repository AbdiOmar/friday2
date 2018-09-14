var side1 = parseInt(prompt("Enter First Side"));
var side2 = parseInt(prompt("Enter Second Side"));
var side3 = parseInt(prompt("Enter Third Side"));
if (side1==side2 && side1==side3 && side2 ==side3){
  alert("it's an Equilateral triangle")
}
else if(side1==side2 || side2 == side3 || side3 == side1){
  alert("it's an Isoceles Triangle")
}
else if (side1 != side2 || side2 !== side3 || side3 != side!){
  alert("It's a Scalene Triangle")
}
