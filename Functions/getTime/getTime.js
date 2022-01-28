export function getTime(str) {
    const result = str.match(/(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g)
    if (result) {
        return result[0]
    }
    else {
        return ''
    }
}