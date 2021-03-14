function electrons_around_the_cores( dices ){
 
  // The rule of the game is: for each 3 you get 2 
  // points, for each 5 you get 4 points.
  var count=0;
  var count3=0;
  for(var i=0; i<dices.length;i++){
    if(dices[i]==5){
      count=count+1;
    }
    else if(dices[i]==3){
      count3=count3+1;
    }
  }
  count=count*4;
  count3=count3*2;
  return count+count3;
}
