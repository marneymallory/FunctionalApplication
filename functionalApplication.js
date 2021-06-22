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

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
