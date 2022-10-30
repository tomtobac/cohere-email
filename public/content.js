console.log("Cohere - v0.0.0");
const co = {
  className: "cohere-email",
  textContent: "Co:here",
};

const uuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

const attachBtn = (parentNode) => {
  const exist = parentNode.closest("td").querySelector("." + co.className);
  if (exist) return;
  const button = document.createElement("button");
  button.classList.add(co.className);
  button.id = uuid();
  button.textContent = co.textContent;
  button.style.bottom = "12px";
  button.style.left = "0";
  button.onclick = function () {
    if (!parentNode.textContent.trim().length) return;
    chrome.runtime.sendMessage({
      content: parentNode.firstChild.textContent,
      id: button.id,
    });
    button.innerHTML = '<div class="loading"></div>';
  };
  parentNode.appendChild(button);
};

const attachResponse = (text, id) => {
  const button = document.getElementById(id);
  button.innerHTML = co.textContent;

  const parentNode = button.previousSibling; //.closest('[contenteditable]');
  parentNode.innerHTML += "<div><br /></div>" + text;
};

document.addEventListener("click", (e) => {
  if (!e.target.isContentEditable) return;
  const content = e.target.closest("[contenteditable]").parentNode;
  content.style.position = "relative";
  attachBtn(content);
});

chrome.runtime.onMessage.addListener((request) => {
  attachResponse(request.response, request.id);
});
