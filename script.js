function sayHelloWorld() {
  console.log("hello world");
}

sayHelloWorld();

function setHundredBoxes() {
  Array(100)
    .fill()
    .map((_, index) => {
      const box = document.createElement("div");
      // const text = document.createTextNode("hello world");
      box.classList.add("empty-box");
      box.setAttribute("id", index + 1);
      // box.appendChild(text);
      const element = document.getElementById("container");
      element.appendChild(box);
      return element.appendChild(box);
    });
}
setHundredBoxes();
