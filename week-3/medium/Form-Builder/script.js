
const selectEle = document.getElementById("select-input");
const labelEle = document.getElementById("label-input");
const preEle = document.getElementById("preview");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (selectEle.value === "text") {
    const div = document.createElement("div");
    const newEle = document.createElement("input");
    newEle.type = "text";
    div.append(newEle);
    preEle.append(div);
  } else if (selectEle.value === "checkbox") {
    const div = document.createElement("div");
    const newEle = document.createElement("input");
    newEle.type = "checkbox";
    div.append(newEle);
    if (labelEle.value != "") {
      const newL = document.createElement("label");
      newL.textContent = labelEle.value;
      div.append(newL);
    }
    preEle.append(div);
  } else if (selectEle.value === "radio") {
    const div = document.createElement("div");
    const newEle = document.createElement("input");
    newEle.type = "radio";
    div.append(newEle);
    if (labelEle.value != "") {
      const newL = document.createElement("label");
      newL.textContent = labelEle.value;
      div.append(newL);
    }
    preEle.append(div);
  }
});
