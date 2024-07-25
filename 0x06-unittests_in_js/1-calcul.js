function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let p = 0;
    switch (type) {
    case 'SUM':
	p = an + bn;
	break;
    case 'SUBTRACT':
	p = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            p = "Error";
      } else {
            p = an / bn;
      }
      break;
    }
    return p;
}

module.exports = calculateNumber;
