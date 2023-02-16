let counter = 1;
let myInterval = null;
let checkFirstRadioByDefault = () => {
  document.getElementById("radio1").checked = true;
};

checkFirstRadioByDefault();
console.log(counter);
const interval = 6000;
let sliderInterval = () => {
  clearInterval(myInterval)
  myInterval = setInterval(() => {
    counter++;
    if (counter > 8) {
      counter = 1;
    }
    console.log(counter);
    document.getElementById("radio" + counter).checked = true;
  }, interval);
};
sliderInterval();
let moveImgLeft = () => {
  clearInterval(myInterval);
  if (counter <= 1) {
    counter = 8;
  } else {
    counter--;
  }
  console.log(counter);
  document.getElementById("radio" + counter).checked = true;
  sliderInterval();
};
let moveImgRight = () => {
  clearInterval(myInterval);
  if (counter >= 8) {
    counter = 1;
  } else {
    counter++;
  }
  console.log(counter);
  document.getElementById("radio" + counter).checked = true;
  sliderInterval();
};
console.log(interval);

//jQuery below
$(".radio").click(function () {
  const index = $(".radio").index(this);
  myFunction(index);
});

let myFunction = (index) => {
  counter = index + 1;
  clearInterval(myInterval);
  document.getElementById("radio" + counter).checked = true;
  sliderInterval();
};
