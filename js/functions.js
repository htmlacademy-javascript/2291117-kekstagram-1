
const isPalindrom = (testString) => {
  const tempString = testString.toLowerCase().replaceAll(' ', '');

  return tempString === tempString.split('').reverse().join('');
};
isPalindrom('Лёша на полке клопа нашёл ');

const isCompareLength = (testString, maxLength) =>
  testString.length <= maxLength;
isCompareLength('проверяемая строка', 5);

const convertToNumber = (convertibleString) => {
  let newNumber = '';

  for (let i = 0; i < convertibleString.length; i++) {

    if (!Number.isNaN(parseInt(convertibleString.at(i), 10))) {
      newNumber += convertibleString.at(i);
    }
  }

  return parseInt(newNumber, 10);
};
convertToNumber('-1');

const padString = (originalString, minLength, additionalString) => {
  const numberOfSumbols = minLength - originalString.length;

  if (numberOfSumbols <= 0) {

    return originalString;
  }
  const tempString = additionalString.slice(0, numberOfSumbols % additionalString.length);
  const repeatString = additionalString.repeat(numberOfSumbols / additionalString.length);

  return tempString + repeatString + originalString;
};
padString('1', 2, '0');
padString('1', 4, '0');
padString('q', 4, 'werty');
padString('q', 4, 'we');
padString('qwerty', 4, '0');
