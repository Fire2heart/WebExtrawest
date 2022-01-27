export function getTime(str) {
    let result
    if (result = str.match(/(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]/g)) {
        return result[0]
    }
    else {
        return ''
    }
}