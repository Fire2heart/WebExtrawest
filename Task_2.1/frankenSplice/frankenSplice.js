export const frankenSplice = (arr1, arr2, index) => {
  try {
    if(!Array.isArray(arr1)){
      throw 'Wrong input of 1 parameter';
    }

    if(!Array.isArray(arr2)){
      throw 'Wrong input of 2 parameter';
    }

    if(!Number.isInteger(index)){
      throw 'Wrong input of 3 parameter';
    }	
			
  } catch (error) {
    return error;
  }

  arr2.splice(index, 0, ...arr1);

  return arr2;
};