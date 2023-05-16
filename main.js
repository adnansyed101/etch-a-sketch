import rangeSlider from "range-slider-input";
import "range-slider-input/dist/style.css";

const rangeSliderElemnent = rangeSlider(
  document.querySelector("#range-slider"),
  {
    min: 16,
    max: 32,
    step: 2,
    value: [0, 0],
    thumbsDisabled: [true, false],
    rangeSlideDisabled: true,
    onInput: (value, onUserInteraction) => blocks(value[1]),
  }
);

function changebg(block) {
  block.addEventListener("click", (f) => {
    const bgColor = f.target.style.backgroundColor;
    if (bgColor === "black") {
      f.target.style.backgroundColor = "";
    } else {
      f.target.style.backgroundColor = "black";
    }
  });
}

function blocks(blocks) {
  const totalBlocks = blocks ** 2;
  let output = "";
  for (let i = 1; i <= totalBlocks; i++) {
    output += `<div class="block"></div>`;
    if (i % blocks === 0) {
      output += `</br>`;
    }
  }
  document.querySelector(".block-container").innerHTML = output;
  document.querySelectorAll(".block").forEach((block) => changebg(block));
}
