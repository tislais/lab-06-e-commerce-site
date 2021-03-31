export function createMachineLi(machine) {
    const li = document.createElement('li');
    li.classList.add('machine');

    const h3Name = document.createElement('h3');
    h3Name.textContent = machine.name;

    const pManufacturer = document.createElement('p');
    pManufacturer.textContent = machine.manufacturer;

    const pYear = document.createElement('p');
    pYear.textContent = machine.year;

    const pImage = document.createElement('img');
    pImage.src = machine.image;

    const pType = document.createElement('p');
    pType.textContent = machine.type;

    const pDescription = document.createElement('p');
    pDescription.textContent = machine.description;

    const pPrice = document.createElement('p');
    pPrice.textContent = `$${machine.price} per month`;

    const buttonRentNow = document.createElement('button');
    buttonRentNow.textContent = 'Rent now';

    li.append(h3Name, pManufacturer, pYear, pImage, pType, pDescription, pPrice, buttonRentNow);
    return li;
}