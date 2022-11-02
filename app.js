const btn = document.querySelector(".btn");

btn.addEventListener("click", promptMe);

function promptMe() {
  const value = prompt("Squares per side?", 16);
  if (value > 100) {
    alert("Must not be greater than 100");
    return;
  }
  blocks(value);
}

function blocks(blocks = 32) {
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

blocks();

function changebg(e) {
  e.addEventListener("click", (f) => {
    f.target.style.backgroundColor = "black";
  });
}
