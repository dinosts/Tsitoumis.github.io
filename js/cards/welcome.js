const meImage = "./images/welcome.me.jpg";

//

const image = `<img src="${meImage}" class="img-responsive center-block py-3" id="image" alt="Responsive image">`;

const name = "<p id='name' class='pt-0'> Konstantinos Tsitoumis </p>";

const underTitle = "<p id='text' class=''> Software Engineer </p>";

const bio =
  "<p id='bio' class='py-3'> Senior at the International Hellenic University studying Software Engineering.<br/><br/>Currently in love with Node.js.<br/><br/>Mainly enjoying working at the backend, but a fine engineer can work on anything.<br/><br/>Some of his main goals the improvement of his Software engineering skills, being active and mostly have fun in and outside of his career life. </p>";

const connect = [
  '<a href="https://www.linkedin.com/in/konstantinos-tsitoumis/" class="btn btn-dark btn-sm " role="button" aria-pressed="true"><i class="bi bi-linkedin"></i></a>',
  '<a href="mailto:dinos.ts@gmail.com" class="btn btn-dark btn-sm " role="button" aria-pressed="true"><i class="bi bi-envelope"></i></a>',
];

const welcomeCard = `${image}${name}${underTitle}${bio}<div class="btn-group  m-4" role="group" aria-label="Basic example">${connect[0]}${connect[1]}</div>`;

export default welcomeCard;
