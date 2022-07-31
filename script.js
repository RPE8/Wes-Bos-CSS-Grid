const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const image = document.querySelector("img");
const button = document.querySelector(".close");

function generateElement([width, height]) {
  return `
		<div class="item w${width} h${height}">
			<img src="./images/${random(12)}.jpg">
			<div class="item__overlay">
				<button>View</button>
			</div>
		</div>
	`;
}

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

function createGridArray(length, w, w) {
  return Array.from({ length: length }, () => [random(w), random(w)]);
}

const digits = [...createGridArray(50, 4, 4), ...createGridArray(20, 1, 1)];

const newHTML = digits.map(generateElement).join("");
gallery.innerHTML = newHTML;

document.querySelectorAll(".item").forEach((button) => {
  button.addEventListener("click", (event) => {
    const src = event.currentTarget.querySelector("img").src;
    image.src = src;
    overlay.classList.add("open");
  });
});

button.addEventListener("click", () => {
  overlay.classList.remove("open");
});
