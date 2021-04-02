import { getCart, setCart, addItemToCart } from '../local-storage-utils.js';

const test = QUnit.test;

const stubCart = [
    {
        id: 6,
        quantity: 1
    },
    {
        id: 2,
        quantity: 3
    },
    {
        id: 4,
        quantity: 2
    }
];

test ('It should put our stub cart into local storage', (expect) => {
    setCart(stubCart);
    const localStorageCart = JSON.parse(localStorage.getItem('CART'));
    expect.deepEqual(stubCart, localStorageCart);
});

test ('It should get our stub cart from local storage', (expect) => {
    const stringCart = JSON.stringify(stubCart);
    localStorage.setItem('CART', stringCart);
    const cart = getCart();
    expect.deepEqual(stubCart, cart);
});

test ('It should add an item to our cart', (expect) => {
    const stringCart = JSON.stringify(stubCart);
    localStorage.setItem('CART', stringCart);
    addItemToCart(69);
    const actual = JSON.parse(localStorage.getItem('CART'));
    const expected = [
        {
            id: 6,
            quantity: 1
        },
        {
            id: 2,
            quantity: 3
        },
        {
            id: 4,
            quantity: 2
        },
        {
            id: 69,
            quantity: 1
        }
    ];

    expect.deepEqual(actual, expected);
});

