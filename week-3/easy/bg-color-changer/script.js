const red = document.getElementById("red");
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  // console.log(button);
  button.addEventListener("click", () => {
    const color = button.getAttribute("id");
    if (color === "more") {
      const div = document.getElementById("picker");
      const ele = document.createElement("input");
      ele.setAttribute("type", "color");
      ele.value = "choose custom color";
      ele.addEventListener("change", (event) => {
        const selectedColor = event.target.value;
        console.log(selectedColor);
        document.body.style.backgroundColor = selectedColor;
      });
      div.append(ele);
    }
    document.body.style.backgroundColor = color;
  });
}
