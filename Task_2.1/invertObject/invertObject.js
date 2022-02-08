export const invertObject = (obj) => {
  try {
    if(typeof obj !== 'object'){
      throw 'Wrong input';
    }
  } catch (error) {
    return error;
  }

  const  result = {};

  try {
    Object.keys(obj).forEach(key => {
      if (result.hasOwnProperty(obj[key])) {
        throw 'Key already exist';
      } 
      result[obj[key]] = key;
    });
	
  } catch (error) {
    if( error === 'Key already exist' ) {
      return null;
    }
  }

 
  return result;
};