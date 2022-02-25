const meImage = "./images/welcome.me.jpg";
import constants from "../constants.js";

//

const image = `<img src="${meImage}" class="img-responsive center-block py-3" id="image" alt="Responsive image">`;
const text =
  "<p id='bio' class='py-3'>Want a copy of my CV? click on the buttons bellow to contact me!</p>";

const { connections } = constants;

const cvCard = `${image}${text}${connections}`;

export default cvCard;
