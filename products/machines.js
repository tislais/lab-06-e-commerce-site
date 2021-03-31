import { machines } from '../data/machines-data.js';
import { createMachineLi, findById } from '../utils.js';


const ul = document.getElementById('machines-ul');

for (let machine of machines) {
    const li = createMachineLi(machine);
    ul.append(li);
}