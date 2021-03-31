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