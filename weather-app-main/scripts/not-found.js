export function renderNotFoundUI() {
  const designContainer = document.getElementById("design-container");
  if (!designContainer) {
    return;
  }

  const left = designContainer.querySelector(".left-design");
  const right = designContainer.querySelector(".right-design");

  if (left) left.style.display = "none";
  if (right) right.style.display = "none";

  const oldNotFound = designContainer.querySelector(".not-found");
  if (oldNotFound) oldNotFound.remove();
  const notFoundDiv = document.createElement("div");
  notFoundDiv.classList.add("not-found");
  notFoundDiv.innerHTML = `
      <h2>No search result found!</h2>
  `;
  designContainer.appendChild(notFoundDiv);
}
