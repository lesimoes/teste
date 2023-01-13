import assert from 'node:assert';
import { random } from './math.js';

const expect = random(1, 100);
console.log('Rodando random() teste')
assert(typeof expect === 'number', 'Deve retornar um número')