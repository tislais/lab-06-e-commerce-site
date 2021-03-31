// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createMachineLi } from '../utils.js';

const test = QUnit.test;

test('It should take in a machines object and return an li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="machine"><h3>Twilight Zone</h3><div class="machine-manu-year"><span class="machine-year">1993</span><span class="machine-manufacturer">Bally Midway</span></div><div class="machine-image" style="background-image: url(../assets/tz1993.jpg);"></div><p>Solid State Electronic</p><p class="machine-description">Flippers (4), Pop bumpers (3), Ramps (2), Dual left inlanes, "Rocket" kicker.</p><p class="machine-price">$250 per month</p><button value="tz1993">Rent</button></li>`;
    
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
