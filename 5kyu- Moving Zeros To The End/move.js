var moveZeros = function (arr) {
  //I made 6 differnt solutions for this kata. However the challenge was 'false', because
  // JS implicitly typecast false as 0 (int) in the if statement. When I count 0s, program treats
  // false as 0 too and makes the number of expected zeros incorrect.
  // To overcome this challenge, I basically converted int array to string array.
 var newArr=arr.map(String);
  var count=0;
  var k=0;
  var temp=[];
  for(i=0;i<arr.length;i++){  //Count the zeros and and copy every member to another array if not zero
    if(newArr[i]=="0"){
      count++;
    }else{
      temp[k]=arr[i];
      k++;
    }
  }
  var zeroArray=[]; //Array of zeros
  zeroArray.length=count;
  zeroArray.fill(0);
  var result= temp.concat(zeroArray); // Concat two arrays
  return result;
}
