function changeNavBarColor() {
  const todaNavbar = document.querySelector(".navSection");
  const linkClass = document.querySelectorAll(".navMenu li");
  const btnHamburguer = document.querySelectorAll(".listBtn");
  const whitelogo = document.querySelector(".transparentLogo");
  const blackLogo = document.querySelector(".colorLogo");
  const navHeight = "40";

  window.addEventListener("scroll", function () {
    if (window.scrollY > navHeight) {
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
    if (window.scrollY < navHeight) {
      todaNavbar.style.transition = "0.8s";
      todaNavbar.style.backgroundColor = "transparent";
      todaNavbar.style.borderBottom = "none";
      //   whitelogo.style.display = "block";
      //   blackLogo.style.display = "none";

      for (let index = 0; index < linkClass.length; index++) {
        linkClass[index].style.color = "rgb(195 188 188)";
      }
      for (let indice = 0; indice < btnHamburguer.length; indice++) {
        btnHamburguer[indice].style.backgroundColor = "#ffffff";
      }
    }
  });
}

function mobileMenuEvents() {
  const mobileMenu = document.querySelector(".listBtnBox");
  const listMenu = document.querySelector(".navMenu");
  let listMenuDisplay = window.getComputedStyle(listMenu);
  let listMenuCurretDisplay = listMenuDisplay.getPropertyValue("display");
  let isOpenMenu = false;

  mobileMenu.addEventListener("click", showHideListMenu);

  function showHideListMenu() {
    if (listMenuCurretDisplay === "none" && isOpenMenu === false) {
      listMenu.style.display = "flex";
      isOpenMenu = true;
    } else {
      listMenu.style.display = "none";
      isOpenMenu = false;
    }
  }
}

// Create balloons cards
function createMegaSenaCards(data) {
  try {
    const megaSenaCardBox = document.querySelector(
      '[data-cards="balloonsCard"]'
    );
    let countCard = 0;
    const listSize = data.prices.length;
    console.log(data);
    console.log(data.prices);
    console.log(data.type);
    console.log(data.prices[0]);
    for (let i = 0; i < listSize; i++) {
      countCard++;
      megaSenaCardBox.innerHTML += `<!-- Card ${countCard} -->`;
      const cardBox = document.createElement("div");
      cardBox.classList.add("balloonsCard");
      cardBox.innerHTML = `
      <div class="balloonsCardImgBox">
        <img
          src="${data.prices[i].imagePath}"
          data-src="${data.prices[i].imagePath}"
          loading="lazy"
          alt="Game Image"
          class="balloonsCardImg"
          width=""
          height=""
        />
      </div>
      <p class="typeGame">${data.type}</p>
      <p class="valueGame">R$ ${data.prices[i].price}</p>
      `;
      megaSenaCardBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}
function callSpecificFunctions(data) {
  try {
    const dataSize = data.dataBalloons.length;
    // console.log(data.dataBalloons);
    for (let i = 0; i < dataSize; i++) {
      if (data.dataBalloons[i].type === "Bolão Mega Sena") {
        createMegaSenaCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão Lotofácil") {
        // console.log("Função que cria Lotofácil");
      } else if (data.dataBalloons[i].type === "Bolão Quina") {
        // console.log("Função que cria Quina");
      } else if (data.dataBalloons[i].type === "Bolão Dia de Sorte") {
        // console.log("Função que cria Dia de Sorte");
      } else if (data.dataBalloons[i].type === "Bolão +Milionária") {
        // console.log("Função que cria +Milionária");
      } else if (data.dataBalloons[i].type === "Bolão Timemania") {
        // console.log("Função que cria Timemania");
      } else if (data.dataBalloons[i].type === "Bolão Dupla Sena") {
        // console.log("Função que cria Dupla Sena");
      } else {
        console.log("Não");
      }
    }
  } catch (error) {
    console.warn(error);
  }
}

function fetchCardsInfo() {
  try {
    fetch("../dataBalloons.json")
      .then((response) => response.json())
      .then((data) => callSpecificFunctions(data));
  } catch (error) {
    console.warn(error);
  }
}
// End of code create balloons cards
// Functions called
changeNavBarColor();
mobileMenuEvents();
fetchCardsInfo();
