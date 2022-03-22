'use strict';
     
var string = prompt('Введите строку на русском языке');
function findAndCountVowels(s) {
  var count = 0;
  var vowels = {а:0, е:0, ё:0, и:0, о:0, у:0, ы:0, э:0, ю:0, я:0};
  for (var i=0;i<s.length;i++) {
    if (s.charAt(i).toLowerCase() in vowels){
      count++;
    }
  }return count;
}
function getNumWord(num,word1,word2,word5) {
  var dd=num%100;
  if ( (dd>=11) && (dd<=19) )
    return word5;
  var d=num%10;
  if ( d==1 )
    return word1;
  if ( (d>=2) && (d<=4) )
    return word2;
  return word5;
}

console.log('В вашей строке '+findAndCountVowels(string)+getNumWord(findAndCountVowels(string),' гласная',' гласные',' гласных'));


/*'use strict';
var string = prompt('Введите строку на русском языке');
function findAndCountVowels(s) {
  var stringArray = s.split('');
  var count = 0;
  var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  for (var i=0;i<stringArray.length;i++) {
    for (var j=0;j<vowels.length;j++) {
      if (stringArray[i].toLowerCase()==vowels[j]){
        count++;
      }
    }
  }return count;
}
function getNumWord(num,word1,word2,word5) {
  var dd=num%100;
  if ( (dd>=11) && (dd<=19) )
    return word5;
  var d=num%10;
  if ( d==1 )
    return word1;
  if ( (d>=2) && (d<=4) )
    return word2;
  return word5;
}

    console.log('В вашей строке '+findAndCountVowels(string)+getNumWord(findAndCountVowels(string),' гласная',' гласные',' гласных'));*/
