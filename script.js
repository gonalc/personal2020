const CONSTRAINT = 20;

const container = document.getElementById("about");
const movingCard = document.getElementById("watching-pic");

function transforms(x, y, el) {
  const box = el.getBoundingClientRect();
  const calcX = -(y - box.y - box.height / 2) / CONSTRAINT;
  const calcY = (x - box.x - box.width / 2) / CONSTRAINT;

  return `perspective(1000px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

container.onmousemove = function (e) {
  const xy = [e.clientX, e.clientY];
  const position = xy.concat([movingCard]);

  window.requestAnimationFrame(function () {
    transformElement(movingCard, position);
  });
};
