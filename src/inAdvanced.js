const cars = {
  name: "tesla",
  founder: "Elon Musk",
  netWorth: "1 trillion"
};

console.log("name" in cars);
if ("name" in cars) {
  delete cars.name;
}
console.log(cars);

if ("name" in cars === false) {
  cars.name = "SpaceX";
}

for (let x of cars.name) {
  console.log(x);
}

cars.netWorth.replace(cars.netWorth, 10000);

console.log(cars);
