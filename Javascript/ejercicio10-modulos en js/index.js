import { suma, multiplicar } from './controller.js';
import chalk from 'chalk';

const mult_suma = multiplicar(suma(1,2),suma(4,5));

console.log(chalk.green(mult_suma));

