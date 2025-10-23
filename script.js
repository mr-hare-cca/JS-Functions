let counter = 0;

// myFunc: count button clicks
function myFunc() {
  counter++;
  let message = "Button clicked " + counter + " times";
  if (counter === 1) {
    message = "Button clicked " + counter + " time";
  }
  document.getElementById("outMyFunc").textContent = message;
}

// getRandomNum: random 1..max, 0 if invalid
function getRandomNum(max) {
  const n = Number(max);
  if (!Number.isFinite(n) || n < 1) {
    return 0;
  }
  return Math.floor(Math.random() * n) + 1;
}

// myAdder: return x + y
function myAdder(x, y) {
  return Number(x) + Number(y);
}

// distance: sqrt((x2-x1)^2 + (y2-y1)^2)
function distance(x1, y1, x2, y2) {
  const dx = Number(x2) - Number(x1);
  const dy = Number(y2) - Number(y1);
  return Math.sqrt(dx * dx + dy * dy);
}

// quadratic: return array of roots
function quadratic(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);

  const disc = b * b - 4 * a * c;

  if (a === 0) {
    return [ -c / b ];
  }

  if (disc > 0) {
    const s = Math.sqrt(disc);
    return [ (-b + s) / (2 * a), (-b - s) / (2 * a) ];
  } else if (disc === 0) {
    return [ -b / (2 * a) ];
  } else {
    const real = (-b / (2 * a)).toFixed(2);
    const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
    const r1 = real + "+" + imag + "i";
    const r2 = real + "-" + imag + "i";
    return [r1, r2];
  }
}

/* ==== Button Handlers ==== */
function onMyFuncClick() {
  myFunc();
}

function onRandomClick() {
  const max = document.getElementById("maxRand").value;
  const result = getRandomNum(max);
  document.getElementById("outRandom").textContent = result;
}

function onAdderClick() {
  const x = document.getElementById("addX").value;
  const y = document.getElementById("addY").value;
  const sum = myAdder(x, y);
  document.getElementById("outAdder").textContent = sum;
}

function onDistanceClick() {
  const x1 = document.getElementById("x1").value;
  const y1 = document.getElementById("y1").value;
  const x2 = document.getElementById("x2").value;
  const y2 = document.getElementById("y2").value;
  const d = distance(x1, y1, x2, y2);
  document.getElementById("outDistance").textContent = d.toFixed(2);
}

function onQuadraticClick() {
  const a = document.getElementById("qa").value;
  const b = document.getElementById("qb").value;
  const c = document.getElementById("qc").value;
  const roots = quadratic(a, b, c);
  document.getElementById("outQuadratic").textContent = roots.join(", ");
}
