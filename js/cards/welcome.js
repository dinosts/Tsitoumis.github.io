"use strict";

const meImage = "./images/welcome.me.jpg";
import constants from "../constants.js";

//

const image = `<img src="${meImage}" class="img-responsive center-block py-3" id="image" alt="Responsive image">`;

const name = "<p id='name' class='m-5'> Konstantinos Tsitoumis </p>";

const underTitle = "<p id='text' class=''> Software Engineer </p>";

const { connections } = constants;

const bio =
  "<p id='bio' class='py-3'>Coding with greek meraki and love.<br/><br/>Currently obsessed with Node.js.<br/><br/>Some of his main goals the improvement of his Software engineering skills, being active and mostly have fun in and outside of his career life.<br/><br/>Currently in love with Node.js.<br/><br/>Mainly enjoying working at the backend, but a fine engineer can work on anything.<br/><br/>Some of his main goals the improvement of his Software engineering skills, being active and mostly have fun in and outside of his career life. </p>";

const welcomeCard = `${image}${name}${underTitle}${bio}${connections}`;

export default welcomeCard;
