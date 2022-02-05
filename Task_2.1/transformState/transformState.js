export const transformState = (state, transform) => {
  const operationArr = {
    add: 'addProperties', remove: 'removeProperties', clear: 'clear',
  };
  let currentState = {...state};
  const result = transform.map((element) => {

    switch (element.operation) {

      case operationArr.add:
        Object.keys(element.properties).forEach(function(key) {
          currentState[key] = element.properties[key];
        });

        return {...currentState};

      case operationArr.remove:
        
        element.properties.forEach((item) => {
          delete currentState[item];
        });

        return {...currentState};

      case operationArr.clear:
        currentState = {};

        return {};
    }
  });

  return result;
};