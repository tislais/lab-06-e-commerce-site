import { findById } from './utils.js';

const CART = 'CART';
    
export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringyCart);

    return (parsedCart ? parsedCart : []);
}

export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);
    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(productId, newQuantity) {
    const cart = getCart();
    const matchingMachine = findById(cart, productId);

    if (matchingMachine){
        matchingMachine.quantity = newQuantity;
    } else if (newQuantity) {
        const machine = {
            id: productId,
            quantity: newQuantity
        };

        cart.push(machine);
    } else {
        const machine = {
            id: productId,
            quantity: 1
        };

        cart.push(machine);
    }

    setCart(cart);

}