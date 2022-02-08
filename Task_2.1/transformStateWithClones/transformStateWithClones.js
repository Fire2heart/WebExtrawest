export const transformStateWithClones = (state, transform) => {
  try {
    if(typeof state !== 'object'){
      throw 'Wrong input of 1 parametr';
    }

    if(typeof transform !== 'object'){
      throw 'Wrong input of 2 parametr';
    }
  } catch (error) {
    return error;
  }

  const operationType = {
    add: 'addProperties', remove: 'removeProperties', clear: 'clear',
  };
  let currentState = {...state};
  const result = transform.map((element) => {

    switch (element.operation) {

      case operationType.add:
        Object.keys(element.properties).forEach(function(key) {
          currentState[key] = element.properties[key];
        });

        return {...currentState};

      case operationType.remove:
        
        element.properties.forEach((item) => {
          delete currentState[item];
        });

        return {...currentState};

      case operationType.clear:
        currentState = {};

        return {};
    }
  });

  return result;
};