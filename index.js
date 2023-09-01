class Formatter {

  //uppercase first letter
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //removes non-alphanumeric characters
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  //capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  static titleize(str) {
    let strArray = str.split(" ");
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newStr = this.capitalize(strArray[0]);
    for(let i = 1; i < strArray.length; i++) {
      if(noCap.includes(strArray[i])) {
        newStr += " " + strArray[i]
      } else {
        newStr += " " + this.capitalize(strArray[i])
      }
    }
    return newStr;
  }
}

console.log(Formatter.capitalize("alligator"))
console.log(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts"))
console.log(Formatter.titleize("a tale of two cities"))