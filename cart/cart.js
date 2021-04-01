import { cart } from '../data/cart-data.js';
import { machines } from '../data/machines-data.js';
import { createCartRow, findById, calcOrderTotal } from '../utils.js';

const tableBody = document.getElementById('cart-table-body');
const tableFootTr = document.getElementById('cart-table-foot-tr');

for (let item of cart) {
    const matchingMachine = findById(machines, item.id);
    const tr = createCartRow(item, matchingMachine);
    tableBody.append(tr);
}

const total = calcOrderTotal(cart, machines);

const totalTd = document.createElement('td');
totalTd.classList.add('total-price-td');
totalTd.textContent = `$${total}`;

tableFootTr.append(totalTd);




