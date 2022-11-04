let arrCard = document.querySelectorAll(".stat-card");
const valueMin = 0;

arrCard.forEach((card) => {
  // Get the value of the data attribute
  let valueMax = card.getAttribute("value");
  animateValue(card, valueMin, valueMax, 2000);
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    obj.querySelector(".stat-number").innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
