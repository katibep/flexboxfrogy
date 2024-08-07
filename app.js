const nextBtns = document.querySelectorAll("#nextBtn")
const prevBtn = document.querySelector("#prevBtn");
const level = document.getElementById("level");
const textarea = document.querySelector("textarea");
const pond = document.getElementById("pond");
const instructionsContainer = document.querySelector("#instructions-container");
const instructions = [
    {
      level: 1,
      description:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bullets: [
        " flex-start: Items align to the left side of the container.",
        "flex-end: Items align to the right side of the container.",
        "center: Items align at the center of the container.",
        "space-between: Items display with equal spacing between them.",
        "space-around: Items display with equal spacing around them.",
      ],
      example:
        "For example, justify-content: flex-end; will move the frog to the right. ",
    },
    {
      level: 2,
      description:
        "Use justify-content again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:",
      bullets: [
        " flex-start: Items align to the left side of the container.",
        "flex-end: Items align to the right side of the container.",
        "center: Items align at the center of the container.",
        "space-between: Items display with equal spacing between them.",
        "space-around: Items display with equal spacing around them.",
      ],
      example:
        "For example, justify-content: flex-end; will move the frog to the right. ",
    },
    {
      level: 3,
      description:
        "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:",
      bullets: [
        " flex-start: Items align to the left side of the container.",
        "flex-end: Items align to the right side of the container.",
        "center: Items align at the center of the container.",
        "space-between: Items display with equal spacing between them.",
        "space-around: Items display with equal spacing around them.",
      ],
      example:
        "For example, justify-content: flex-end; will move the frog to the right. ",
    },
    {
      level: 4,
      description:
        "Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use justify-content. This time, the lilypads have equal spacing between them.:",
      example:
        "For example, justify-content: flex-end; will move the frog to the right. ",
    },
    {
      level: 5,
      description:
        "Now use align-items to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values::",
        bullets: [
            "flex-start: Items align to the top of the container.",
            "flex-end: Items align to the bottom of the container.",
            "center: Items align at the vertical center of the container.",
            "baseline: Items display at the baseline of the container.",
            "stretch: Items are stretched to fit the container.",
          ],
      example:
        "For example, justify-content: flex-end; will move the frog to the right. ",
    },
  ];

let currentLevel = 1;
console.log(currentLevel)
nextBtns.forEach((btn) => {
  btn.addEventListener("click", nextLevel);
});
prevBtn.addEventListener("click", prevLevel)
  
function nextLevel() {
    console.log("btn clicked")
  if (currentLevel == 24) {
    return;
  }
  currentLevel += 1;
  console.log(currentLevel)
  level.textContent = currentLevel;
  renderInstruction(currentLevel);
}
function prevLevel() {
  if (currentLevel == 1) {
    return;
  }
  currentLevel -= 1;
  level.textContent = currentLevel;
  renderInstruction(currentLevel);
}

function renderInstruction(currentLevel) {
  const instruction = instructions[currentLevel - 1];
  instructionsContainer.innerHTML = `
  <div id="instructions-container" class="instructions">
  <p>${instruction.description}********${instruction.level}</p>
</div>
<div class="bulets">
<p><i class='bx bx-check'></i>
    ${instruction.bullets}
</p>
</div>

  `;
}

renderInstruction(currentLevel);

textarea.addEventListener("input", (e) => {
  const cssCode = e.target.value;
  console.log(pond);
  pond.style.cssText = cssCode;
  console.log(e.target.value);
});