export const invertObject = (obj) => {
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