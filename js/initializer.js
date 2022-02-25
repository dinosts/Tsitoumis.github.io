import loadCard from "./loadCard.js";
import handleResize from "./handleResize.js";

const CVButton = document.getElementById("CV");
const homeButton = document.getElementById("home");

//  init

handleResize();
loadCard("welcomeCard");

// eventListeners

window.onresize = handleResize;

homeButton.onclick = () => loadCard("welcomeCard");
CVButton.onclick = () => loadCard("cvCard");
