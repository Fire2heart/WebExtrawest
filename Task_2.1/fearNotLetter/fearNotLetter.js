export const fearNotLetter = (str) => {
  try {
    if(typeof str !== 'string'){
      throw 'Wrong type';
    }
		
  } catch (error) {
    return error;
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return undefined;
};