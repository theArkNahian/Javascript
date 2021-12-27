console.clear();

const iterable1 = {};
iterable1[Symbol.iterator] = function* () {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
};
console.log([...iterable1]);

//"of" example of iteration
const name = "Al Nahian Ark";
let text = "";
for (const x of name) {
  text += x;
}
document.getElementById("iteration-list").innerText = text;

//"Next" example
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false, ok: "right" };
    }
  };
}

// Create Iterable
const objects = [];
const n = myNumbers();
for (let i = 0; i < 10; i++) {
  n.next();
  objects.push(n.next());
}
console.log(objects);

console.clear();
