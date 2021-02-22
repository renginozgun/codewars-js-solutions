function list(names){
  //lengths 0,1 and 2 are exceptional conditions
  if(names.length==2){
    return names[0].name + " & " + names[1].name ;
  }
  if(names.length==1){
    return names[0].name;
  }
  if(names.length==0){
    return '';

  }

  if(names.length>2){
    var result=names[0].name;
    var k= names.length;
    // Take the last two items in list and put them in a string with ampersand
    var ampersand= names[k-2].name + " & " + names[k-1].name ;
    //take the rest of the string except last two items
    for(i=1;i<k-2;i++){

    result = result + ", " + names[i].name;
    }
    //concat ampersand and the result string
    result= result + ", " + ampersand;
    return result;

  }

}
