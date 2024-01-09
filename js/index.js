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
function createimemaniaCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="timemania"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createMilionarioCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="milionario"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createDiaSorteCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="dia-sorte"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createQuinaCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="quina"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createLotofacilCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="loto-facil"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createMegaSenaCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="mega-sena"]');
    let countCard = 0;
    const listSize = data.prices.length;
    for (let i = 0; i < listSize; i++) {
      countCard++;
      balloonCardsBox.innerHTML += `<!-- Card ${countCard} -->`;
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
      balloonCardsBox.appendChild(cardBox);
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
        createLotofacilCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão Quina") {
        createQuinaCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão Dia de Sorte") {
        createDiaSorteCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão +Milionária") {
        createMilionarioCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão Timemania") {
        createimemaniaCards(data.dataBalloons[i]);
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
