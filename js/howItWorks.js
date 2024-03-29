function getTopDistanceFromNavBar() {
  const navHeight = 40;
  return navHeight;
}

function getCurretYear() {
  const curretYear = document.querySelector(".curretYear");
  const date = new Date();
  curretYear.textContent = date.getFullYear();
}

function changeNavBarColor() {
  const todaNavbar = document.querySelector(".navSection");
  const btnHamburguer = document.querySelectorAll(".listBtn");
  const linkClass = document.querySelectorAll(".navMenu li");
  const whitelogo = document.querySelector(".transparentLogo");
  const blackLogo = document.querySelector(".colorLogo");
  const listMenu = document.querySelector(".navMenu");

  window.addEventListener("scroll", function () {
    if (window.scrollY > getTopDistanceFromNavBar()) {
      todaNavbar.style.transition = "0.8s";
      todaNavbar.style.backgroundColor = "#ffffff";
      todaNavbar.style.boxShadow = "0 0 41px 16px #00000017";
      //   whitelogo.style.display = "none";
      //   blackLogo.style.display = "block";
      for (let index = 0; index < linkClass.length; index++) {
        linkClass[index].style.color = "#000";
      }
      for (let indice = 0; indice < btnHamburguer.length; indice++) {
        btnHamburguer[indice].style.backgroundColor = "#000";
      }
    }
    if (window.scrollY < getTopDistanceFromNavBar()) {
      todaNavbar.style.transition = "0.8s";
      todaNavbar.style.backgroundColor = "transparent";
      todaNavbar.style.borderBottom = "none";
      todaNavbar.style.boxShadow = "none";
      //   whitelogo.style.display = "block";
      //   blackLogo.style.display = "none";

      for (let index = 0; index < linkClass.length; index++) {
        linkClass[index].style.color = "rgb(195 188 188)";
      }
      for (let indice = 0; indice < btnHamburguer.length; indice++) {
        btnHamburguer[indice].style.backgroundColor = "#000";
      }
    }
    if (listMenu.style.display == "flex") {
      todaNavbar.style.transition = "0.8s";
      todaNavbar.style.backgroundColor = "#ffffff";
      todaNavbar.style.borderBottom = " 1px solid rgba(34, 34, 34, 0.05)";
      //   whitelogo.style.display = "none";
      //   blackLogo.style.display = "block";
      for (let index = 0; index < linkClass.length; index++) {
        linkClass[index].style.color = "#000";
      }
      for (let indice = 0; indice < btnHamburguer.length; indice++) {
        btnHamburguer[indice].style.backgroundColor = "#000";
      }
    }
  });
}

function mobileMenuEvents() {
  const mobileMenu = document.querySelector(".listBtnBox");
  const todaNavbar = document.querySelector(".navSection");
  const btnHamburguer = document.querySelectorAll(".listBtn");
  const screemSize = window.innerWidth;

  mobileMenu.addEventListener("click", showHideListMenu);

  function showHideListMenu() {
    const listMenu = document.querySelector(".navMenu");

    if (listMenu.style.display != "flex") {
      listMenu.style.display = "flex";
      todaNavbar.style.backgroundColor = "#ffffff";

      if (screemSize < 768) {
        if (window.scrollY <= getTopDistanceFromNavBar()) {
          todaNavbar.style.backgroundColor = "#ffffff";
          btnHamburguer.forEach((e) => (e.style.backgroundColor = "#000"));
        }
      }
    } else {
      listMenu.style.display = "none";
      if (screemSize < 768) {
        if (window.scrollY <= getTopDistanceFromNavBar()) {
          todaNavbar.style.backgroundColor = "transparent";
          btnHamburguer.forEach((e) => (e.style.backgroundColor = "#ffffff"));
        } else {
          todaNavbar.style.backgroundColor = "#ffffff";
          btnHamburguer.forEach((e) => (e.style.backgroundColor = "#000"));
        }
      }
    }
  }
}

// Functions called
changeNavBarColor();
mobileMenuEvents();
getCurretYear();
