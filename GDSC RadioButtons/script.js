let ColorID = {
  Blue: "#5ab5ff",
  Green: "#03c4a1",
  Purple: "#c300ff",
  Sunny: "#FFEB3B",
  NightMode: "#000",
  White: "#fff"
};

function ColorChoice(color) {
  document.body.style.backgroundColor = ColorID[color];
  document.getElementById("SelectedColor").innerText =
    "Your Selected Color is: " + color;
  
}




 