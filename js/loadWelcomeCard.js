"strict mode";
import cards from "./cards/index.js";

const loader = () => {
  console.log("test");
  document.getElementById("middle").innerHTML = cards.welcomeCard;
};

export default loader;
