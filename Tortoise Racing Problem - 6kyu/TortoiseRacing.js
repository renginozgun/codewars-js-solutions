function race(v1, v2, g) {

  var time = g / (v2 - v1); //This is the math formula to find required time for v2 to catch v1
  var secTotal = time * 3600;  // Convert time to seconds
  if (secTotal / 3600 > 1) { // Required time has to be minimum = 1
    var hour = secTotal / 3600;
  } else hour = 0;

  var min = (secTotal / 60) % 60;  // Math formula to find minutes
  var sec = secTotal % 60;  // Math formula to find seconds
  var result = [Math.floor(hour), Math.floor(min), Math.floor(sec)];  // Add values to array without decimal points

  if (min >= 0 && sec >= 0) {
    return result;
  } else return null;

}
