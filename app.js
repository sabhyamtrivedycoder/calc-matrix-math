function det2x2(m) {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}
function mult2x2(a, b) {
  return [
    [a[0][0]*b[0][0] + a[0][1]*b[1][0], a[0][0]*b[0][1] + a[0][1]*b[1][1]],
    [a[1][0]*b[0][0] + a[1][1]*b[1][0], a[1][0]*b[0][1] + a[1][1]*b[1][1]]
  ];
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    function calculate() {
      const A = [
        [parseFloat(document.getElementById('a00').value) || 0, parseFloat(document.getElementById('a01').value) || 0],
        [parseFloat(document.getElementById('a10').value) || 0, parseFloat(document.getElementById('a11').value) || 0]
      ];
      const B = [
        [parseFloat(document.getElementById('b00').value) || 0, parseFloat(document.getElementById('b01').value) || 0],
        [parseFloat(document.getElementById('b10').value) || 0, parseFloat(document.getElementById('b11').value) || 0]
      ];
      const det = det2x2(A);
      document.getElementById('detA').textContent = det;
      document.getElementById('traceA').textContent = A[0][0] + A[1][1];
      document.getElementById('multAB').textContent = JSON.stringify(mult2x2(A, B));
      
      if (det !== 0) {
        const inv = [
          [(A[1][1] / det).toFixed(2), (-A[0][1] / det).toFixed(2)],
          [(-A[1][0] / det).toFixed(2), (A[0][0] / det).toFixed(2)]
        ];
        document.getElementById('invA').textContent = JSON.stringify(inv);
      } else {
        document.getElementById('invA').textContent = 'Singular Matrix (det = 0)';
      }
    }
    document.querySelectorAll('input').forEach(i => i.addEventListener('input', calculate));
    calculate();
  });
}
if (typeof module !== 'undefined') module.exports = { det2x2, mult2x2 };
