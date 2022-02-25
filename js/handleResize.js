"strict mode";

//

const emptyGrid = '<div class="col-sm"></div>';

const handleResize = () => {
  const middle = `<div class="col-sm mb-5" id="middle">${
    document.getElementById("middle").innerHTML
  }</div>`;

  const w = window.innerWidth;

  if (w < 1200) {
    document.getElementById("row").innerHTML = middle;
  } else {
    document.getElementById(
      "row"
    ).innerHTML = `${emptyGrid}${middle}${emptyGrid}`;
  }
};

export default handleResize;
