export function getOperands(expression) {
    const space = ' '
    const arr_expression = expression.split(space)
    const a = arr_expression[0]
    const b = arr_expression.pop()

    return 'a: ' + a + ',' + ' b: ' + b
}