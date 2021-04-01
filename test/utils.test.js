// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createMachineLi, findById, calcItemTotal, createCartRow, calcOrderTotal } from '../utils.js';
import { machines } from '../data/machines-data.js';
import { cart } from '../data/cart-data.js';

const test = QUnit.test;

test('It should take in a machines object and return an li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="machine"><h3>Twilight Zone</h3><div class="machine-manu-year"><span class="machine-year">1993</span><span class="machine-manufacturer">Bally Midway</span></div><div class="machine-image" style="background-image: url(&quot;../assets/tz1993.jpg&quot;);"></div><p>Solid State Electronic</p><p class="machine-description">Flippers (4), Pop bumpers (3), Ramps (2), Dual left inlanes, "Rocket" kicker.</p><p class="machine-price">$250 per month</p><button value="tz1993">Rent</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createMachineLi({
        id: 'tz1993',
        name: 'Twilight Zone',
        manufacturer: 'Bally Midway',
        year: '1993',
        image: '../assets/tz1993.jpg',
        type: 'Solid State Electronic',
        description: 'Flippers (4), Pop bumpers (3), Ramps (2), Dual left inlanes, "Rocket" kicker.',
        price: 250
    });


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('It should take in an array and an id, and return the first item found that has an id property that matches the passed in id', (expect) => {
    const expected = machines[0];
    const actual = findById(machines, 'tz1993');
    expect.deepEqual(actual, expected);
});

test('It should take quantity and an amount and return the total', (expect) => {
    const expected = 450;
    const actual = calcItemTotal(cart[1].quantity, machines[1].price);
    expect.equal(actual, expected);
});

test('It should take both a cart line item, and the corresponding product, and return dom that matches your static html example', (expect) => {
    const expected = `<tr><td class="td-name">Big Game</td><td class="td-months">3 months</td><td class="td-price">600</td></tr>`;
    
    const actual = createCartRow(cart[1], machines[9]);

    expect.equal(actual.outerHTML, expected);
});

test('It should take the cart array and products array and return the calculated total of the cart data', (expect) => {
    const expected = 2600;
    const actual = calcOrderTotal(cart, machines);
    expect.equal(actual, expected);
})