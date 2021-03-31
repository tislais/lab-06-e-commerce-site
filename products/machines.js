import { machines } from '../machines-data.js';
import { createMachineLi } from '../utils.js';


const ul = document.getElementById('machines-ul');

for (let machine of machines) {
    const li = createMachineLi(machine);
    ul.append(li);
}