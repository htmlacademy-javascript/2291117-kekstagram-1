const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  if (tempString.at(0) !== tempString.at(-1)) {
    return false;
  } else {
    let palindomString = '';
    for (let i = tempString.length - 1; i >= 0; i--) {
      palindomString += tempString.at(i);
    }
    if (palindomString === tempString) {
      return true;
    }
  }
};
isPalindrom('Лёша на полке клопа нашёл ');


const isCompareLength = (string, length) => {
  if (string.length - 1 < length) {
    return true;
  }
};
isCompareLength('проверяемая строка', 5);

const convertToNumber = (string) => {
  let newNumber = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      newNumber += string.at(i);
    }
  }
  return parseInt(newNumber, 10);
};
convertToNumber('-1');

/*
1 - сравнить длину исходной строки с результатом, если исходная больше или равна, вернуть строку
2 - иначе, нужно узнать, сколько у нас свободных символов, тут простая математика, отнимем от ожидаемой
длинны длину исходной строки ( как вариант, ты можешь сделать это в первом пункте, и сравнивать не длинны, а число )
3 - дальше мы должны узнать сколько целых частей добавочной строки мы можем добавить, тут можно поделить то что
у нас с пункта 2 на длину строки без остатка, и создать нужную строку через string repeat
*/

const makeAddress = (originalString, minLength, additionalString) => {
  const numberOfSumbols = minLength - originalString.length;
  if (numberOfSumbols <= 0) {
    return originalString;
  }
  const tempString = additionalString.slice(0, numberOfSumbols % additionalString.length);
  const repeatString = additionalString.repeat(numberOfSumbols / additionalString.length);
  return tempString + repeatString + originalString;
};

makeAddress('1', 2, '0'); // '01'
makeAddress('1', 4, '0'); // '0001'
makeAddress('q', 4, 'werty'); // 'werq'
makeAddress('q', 4, 'we'); // 'wweq'
makeAddress('qwerty', 4, '0'); // 'qwerty'
