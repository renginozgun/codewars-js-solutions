  function maskify(cc) {
    var x = cc.length;
    result = "";
    var masked = '#';
    var subs = cc.substring(x - 4, x); // Get the substring ( digits that we need to keep) from the original string.
    if (cc.length > 4) {
      for (i = 0; i < x - 5; i++) {
        masked += '#'; // Add # character to masked string
      }
      result = masked + subs; // Concatenate two strings
    } else {
      result = cc; //If the string is no longer than 4, do nothing.
    }

    return result;
  }
