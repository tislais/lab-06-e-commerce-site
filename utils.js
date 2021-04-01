import { cart } from "./data/cart-data.js";
import { machines } from "./data/machines-data.js";

export function createMachineLi(machine) {
    const li = document.createElement('li');
    li.classList.add('machine');

    const h3Name = document.createElement('h3');
    h3Name.textContent = machine.name;

    const divManuYear = document.createElement('div');
    divManuYear.classList.add('machine-manu-year');

    const spanYear = document.createElement('span');
    spanYear.textContent = machine.year;
    spanYear.classList.add('machine-year');

    const spanManufacturer = document.createElement('span');
    spanManufacturer.textContent = machine.manufacturer;
    spanManufacturer.classList.add('machine-manufacturer');

    divManuYear.append(spanYear, spanManufacturer);

    const divImage = document.createElement('div');
    divImage.classList.add('machine-image');
    divImage.style.backgroundImage = `url(${machine.image})`;

    const pType = document.createElement('p');
    pType.textContent = machine.type;

    const pDescription = document.createElement('p');
    pDescription.classList.add('machine-description');
    pDescription.textContent = machine.description;

    const pPrice = document.createElement('p');
    pPrice.textContent = `$${machine.price} per month`;
    pPrice.classList.add('machine-price');

    const buttonRent = document.createElement('button');
    buttonRent.textContent = 'Rent';
    buttonRent.value = machine.id;

    li.append(h3Name, divManuYear, divImage, pType, pDescription, pPrice, buttonRent);
    return li;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}

export function calcItemTotal(quantity, price) {
    const amount = quantity * price;
    return Math.round(amount * 100) / 100;
}

export function createCartRow(cartItem, machine) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.classList.add('td-name');
    tdName.textContent = machine.name;

    const tdQuantity = document.createElement('td');
    tdQuantity.classList.add('td-months');
    tdQuantity.textContent = (cartItem.quantity > 1) ? `${cartItem.quantity} months` : `${cartItem.quantity} month`;

    const tdPrice = document.createElement('td');
    tdPrice.classList.add('td-price');
    tdPrice.textContent = calcItemTotal(cartItem.quantity, machine.price);

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;
}

export function calcOrderTotal(cartArray, machinesArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        const matchingMachinePrice = findById(machines, cartItem.id).price;
        const matchingMachineTotal = calcItemTotal(cartItem.quantity, matchingMachinePrice);
        sum += matchingMachineTotal;
    }
    return sum;
}