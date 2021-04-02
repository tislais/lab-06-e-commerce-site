import { getCart } from '../local-storage-utils.js';
import { machines } from '../data/machines-data.js';
import { createCartRow, findById, calcOrderTotal } from '../utils.js';

const cart = getCart();
const tableBody = document.getElementById('cart-table-body');
const tableFootTr = document.getElementById('cart-table-foot-tr');
const button = document.getElementById('place-order');

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

button.addEventListener('click', () => {
    const cart = getCart();
    alert(JSON.stringify(cart));

    localStorage.clear();
    window.location = '/';
});


