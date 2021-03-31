import { cart } from '../data/cart-data.js';
import { machines } from '../data/machines-data.js';
import { createCartRow, findById } from '../utils.js';

const tableBody = document.getElementById('cart-table-body');

for (let item of cart) {
    const matchingMachine = findById(machines, item.id);
    console.log(matchingMachine);

    const tr = createCartRow(item, matchingMachine);
    console.log(tr);

    tableBody.append(tr);
}

