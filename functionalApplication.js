// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1,
//   };
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1,
//   };
// };

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};
let plant = { soil: 0, light: 0, water: 0 };
let human = { water: 0, life: 5 };
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
const die = changeState("life")(-10);
const feedByFive = feed(15);
const waterHuman = changeState("water")(5);

console.log(waterHuman(human));
