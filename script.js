function add() {
  let image = imageForm.imageInsert.value;
  let img = document.createElement("img");
  img.src = image + "";
  document.body.appendChild(img);
}

function tester() {
  alert("test");
}
