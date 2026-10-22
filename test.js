const assert = require('assert');
const { det2x2, mult2x2 } = require('./app.js');
console.log('🧪 Testing Matrix Math Studio...');
const A = [[4, 7], [2, 6]];
assert(det2x2(A) === 10, 'Determinant of 2x2 verified');
const B = [[1, 0], [0, 1]];
assert(JSON.stringify(mult2x2(A, B)) === JSON.stringify(A), 'Identity multiplication verified');
console.log('✅ Matrix Math Studio test passed!');
