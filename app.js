const color = document.querySelector(".color");
const percent1 = document.querySelector(".percent1");
const percent2 = document.querySelector(".percent2");
const opacity = document.querySelector(".opacity");
const output = document.querySelector(".container");
const value = document.querySelector(".value");

let values = {
  color: color.value,
  per1: percent1.value,
  per2: percent2.value,
  opa: opacity.value,
};

color.addEventListener("input", (e) => {
  outputChange();
  valueChange();
  values.color = e.target.value;
  output.style.background = `left, hsla(${values.color}, ${values.per1}%, ${values.per2}%, ${values.opa} )`;
});

percent1.addEventListener("input", (e) => {
  valueChange();
  outputChange();
  values.per1 = e.target.value;
});

percent2.addEventListener("input", (e) => {
  valueChange();
  outputChange();
  values.per2 = e.target.value;
});

opacity.addEventListener("input", (e) => {
  valueChange();
  outputChange();
  values.opa = e.target.value;
});

function outputChange() {
  output.style.background = `left, hsla(${values.color}, ${values.per1}%, ${values.per2}%, ${values.opa} )`;
}

function valueChange() {
  value.textContent = `hsla(${values.color}, ${values.per1}% , ${values.per2}% , ${values.opa})`;
}
