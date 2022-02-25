"strict mode";
import cards from "./cards/index.js";

const loader = (key) => {
  document.getElementById("middle").innerHTML = cards[key];
};

export default loader;
