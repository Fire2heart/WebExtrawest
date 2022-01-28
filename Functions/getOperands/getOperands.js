export function getOperands(expression) {
    const space = ' '
    const arrExpression = expression.split(space)
    const a = arrExpression[0]
    const b = arrExpression.pop()

    return 'a: ' + a + ',' + ' b: ' + b
}