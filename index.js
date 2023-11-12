let block = document.getElementById("block");
let btn = document.getElementById("btn");

function changeTheme() {
  if (block.getAttribute("theme") == "white") {
    block.setAttribute("theme", "dark");
  } else {
    block.setAttribute("theme", "white");
  }
}

btn.addEventListener("click", changeTheme);
