function narcissistic(value) {

var count=0;
var sum=0 ;
var test=value;
    while(test != 0) {
        count++;
        test = Math.floor(test / 10 ) ;
    }
test=value;
    while(test!=0){
    sum+= Math.pow((test%10),count);
    test = Math.floor(test / 10 )
    }
    if(sum==value) {return true; }
    else {return false; }

}
