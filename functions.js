const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  let palindomString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    palindomString += tempString.at(i);
  }
  console.log(palindomString);
  if (palindomString === tempString) {
    console.log('Это палиндром');
  } else {
    console.log('Это не палиндром');
  }
};
isPalindrom('Лёша на полке клопа нашёл ');

const isCheckStringLength = (string, length) => {
  if (string.length - 1 < length) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isCheckStringLength('проверяемая строка', 5);

const convertNumber = (string) => {
  const tempString = string.replaceAll(' ', '');
  let newNumber = '';
  for (let i = 0; i < tempString.length; i++) {
    if (!isNaN(tempString.at(i))) {
      newNumber += tempString.at(i);
    }
  }
  const tempNumber = parseInt(newNumber, 10);
  console.log(tempNumber);
};
convertNumber('-1');

const makeAddress = (originalString, minLength, additionalString) => {
  let tempString = '';
  let newString = '';
  /*if (additionalString.length <= minLength - originalString.length) {
    for (let i = 0; i < minLength - originalString.length; i++) {
      /*newString = additionalString.repeat(minLength - originalString.length) + originalString;
      tempString += additionalString.at();
    }
  } else {
    for (let i = 0; i < minLength - originalString.length; i++) {
      tempString += additionalString.repeat();
    }
  }*/
  if(originalString.length + additionalString.length < minLength) {
    tempString = additionalString.repeat(minLength - originalString.length) + originalString;
    console.log(tempString);
  }
  /*newString = tempString + originalString;
  console.log(newString);*/
};
makeAddress('1', 2, '0'); // '01'
makeAddress('1', 4, '0'); // '0001'
makeAddress('q', 4, 'werty'); // 'werq'
makeAddress('q', 4, 'we'); // 'wweq'
/*makeAddress('qwerty', 4, '0'); // 'qwerty'*/
