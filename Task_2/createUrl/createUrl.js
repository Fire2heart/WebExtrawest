export function createUrl(template, params) {
    const urlArray = template.split('/')
        .map(function (elem) {
            if (elem.startsWith('{') && elem.endsWith('}')) {

                elem = params.hasOwnProperty(elem.slice(1, -1)) ? params[elem.slice(1, -1)] : 'undefined'
            }
            return elem;
        })
    return urlArray.join('/')
}


//   console.log(myfunc('www/api/v1/{id}/{name}', {id:22, name: 'anton'}));