export function calculateRentalCost(days) {
    const price = 40
    if (days < 3) {
        return price * days
    }
    else if (days > 2 && days < 7) {
        return price * days - 20
    }
    else if (days > 6) {
        return price * days - 50
    }
}