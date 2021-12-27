const person = {
  name: "Al Nahian Ark",
  id: 12,
  email: "example@gmail.com",
  cell: 98786
};
console.log(Object.values(person)[2]);

//"of" example
const name2 = "Albert Einstein";
let text = "";
for (let x of name2) {
  text += x;
}
document.getElementById("in-test").innerText = text;
