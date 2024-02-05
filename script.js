const aboutSection = document.getElementById("a-propos");
const projectSection = document.getElementById("projets");
const contactSection = document.getElementById("contact");

const menuElements = document.querySelectorAll("nav ul li");
for (let i = 0; i < menuElements.length; i++) {
  menuElements[i].addEventListener("click", setMenuActive(i));
}
function setMenuActive(index) {
  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove("active");
  }
  menuElements[index].classList.add("active");
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function switchMenu() {
  if (checkVisible(contactSection)) {
    setMenuActive(2);
  } else if (checkVisible(aboutSection)) {
    setMenuActive(0);
  } else {
    setMenuActive(1);
  }
}

document.addEventListener("scroll", switchMenu);
