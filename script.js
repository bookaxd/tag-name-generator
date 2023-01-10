const nameInput = document.getElementById("name-input");
const generateButton = document.getElementById("generate-button");
const clearButton = document.getElementById("clear-button");
const nameTagsSection = document.getElementById("name-tags");

function createNameTag(name) {
  const nameTag = document.createElement("div");
  nameTag.classList.add("name-tag");
  nameTag.innerHTML = `
    <p>Your name is: ${name}</p>
    <span class="delete-icon">×</span>
  `;
  return nameTag;
}

function generateName() {
  const name = nameInput.value;
  if (name) {
    const nameTag = createNameTag(name);
    nameTagsSection.appendChild(nameTag);
  }
}

function deleteNameTag(event) {
  if (event.target.classList.contains("delete-icon")) {
    const nameTag = event.target.parentNode;
    nameTagsSection.removeChild(nameTag);
  }
}

function clearNameTags() {
  nameTagsSection.innerHTML = "";
}

function randomizeBackgroundColor(nameTag) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  nameTag.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

generateButton.addEventListener("click", generateName);
clearButton.addEventListener("click", clearNameTags);
nameTagsSection.addEventListener("click", deleteNameTag);
nameTagsSection.addEventListener("mouseenter", event => {
  if (event.target.classList.contains("name-tag")) {
    randomizeBackgroundColor(event.target);
  }
});
