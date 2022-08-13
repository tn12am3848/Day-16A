function display(val) {
  document.getElementById("display").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("display").value;
  let y = eval(x);
  document.getElementById("display").value = y;
  return y;
}

function cleardisplay() {
  document.getElementById("display").value = "";
}
