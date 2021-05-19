export const formatPrice = (price) => {
    if (price < 10) {
        return '0' + price.toFixed(2);
    }
    return price.toFixed(2);
}