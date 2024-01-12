function changeNavBarColor() {
  const todaNavbar = document.querySelector(".navSection");
  const btnHamburguer = document.querySelectorAll(".listBtn");
  const linkClass = document.querySelectorAll(".navMenu li");
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
  const todaNavbar = document.querySelector(".navSection");
  const btnHamburguer = document.querySelectorAll(".listBtn");

  let listMenuDisplay = window.getComputedStyle(listMenu);
  let listMenuCurretDisplay = listMenuDisplay.getPropertyValue("display");
  let isOpenMenu = false;

  mobileMenu.addEventListener("click", showHideListMenu);

  function showHideListMenu() {
    if (listMenuCurretDisplay === "none" && isOpenMenu === false) {
      listMenu.style.display = "flex";
      todaNavbar.style.backgroundColor = "#ffffff";
      btnHamburguer.forEach((e) => (e.style.backgroundColor = "#000"));
      document.querySelector("body").classList.add("no-scroll");
      isOpenMenu = true;
    } else {
      listMenu.style.display = "none";
      todaNavbar.style.backgroundColor = "transparent";
      btnHamburguer.forEach((e) => (e.style.backgroundColor = "#ffffff"));
      document.querySelector("body").classList.remove("no-scroll");
      isOpenMenu = false;
    }
  }
}

// Create balloons cards
function createDuplaSenaCards(data) {
  try {
    const balloonCardsBox = document.querySelector('[data-cards="dupla-sena"]');
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
      balloonCardsBox.appendChild(cardBox);
    }
  } catch (error) {
    console.warn(error);
  }
}

function createTimemaniaCards(data) {
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
      const elementClicked = document.createElement("div");
      elementClicked.classList.add("cardClicked");
      elementClicked.setAttribute("data-index", countCard - 1);
      let typeName = data.type.replace(/ /g, "-");
      elementClicked.setAttribute("name", typeName);
      elementClicked.setAttribute("data-value", data.prices[i].price);
      cardBox.appendChild(elementClicked);
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
        createTimemaniaCards(data.dataBalloons[i]);
      } else if (data.dataBalloons[i].type === "Bolão Dupla Sena") {
        createDuplaSenaCards(data.dataBalloons[i]);
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
      .then((data) => {
        callSpecificFunctions(data);
        // console.log(data);
      });
  } catch (error) {
    console.warn(error);
  }
}

// Cards events
function redirectCards() {
  const allCards = document.querySelector(".allBalloonsCard");

  function cardsEvents(e) {
    const elCkd = e.target;
    if (elCkd.classList.contains("cardClicked")) {
      const dataIndexValue = elCkd.getAttribute("data-index");
      const nameValue = elCkd.getAttribute("name");
      const productValue = elCkd.getAttribute("data-value");
      window.location.href = `/product.html?product=${nameValue}&productIndex=${dataIndexValue}&productValue=${productValue}`;
      // window.location.href = `https://loterica-trevo-da-sorte.vercel.app/product?product=${nameValue}&productIndex=${dataIndexValue}&productValue=${productValue}`;
    }
  }

  allCards.addEventListener("click", cardsEvents);
}
// End of code create balloons cards

function getCurretYear() {
  const curretYear = document.querySelector(".curretYear");
  const date = new Date();
  curretYear.textContent = date.getFullYear();
}

function showAndEventPopup() {
  const wrapperPopup = document.querySelector(".wrapperPopup");
  const eighteenMoreBtn = document.querySelector(".eighteenMore");
  const minusEighteenBtn = document.querySelector(".minusEighteen");
  const popupBox = document.querySelector(".popupBox");

  eighteenMoreBtn.addEventListener("click", () => {
    document.querySelector("body").classList.remove("no-scroll");
    popupBox.innerHTML = `<p class="popupTitle" style="margin:0">Obrigado pela confirmação!</p>`;
    const windowBox = document.querySelector(".windowBox");
    if (windowBox) windowBox.remove();
    setTimeout(() => {
      popupBox.classList.remove("addPopupAnimation");
      popupBox.classList.add("removePopupAnimation");
      setTimeout(() => {
        wrapperPopup.style.display = "none";
        wrapperPopup.remove();
        const currentTime = new Date().getTime();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const expirationTime = endOfDay.getTime();
        localStorage.setItem("popupExpirationTime", expirationTime);
      }, 500);
    }, 500);
  });

  setTimeout(() => {
    const wrapperPopup = document.querySelector(".wrapperPopup");
    const popupBox = document.querySelector(".popupBox");

    if (wrapperPopup) {
      wrapperPopup.style.display = "flex";
      document.querySelector("body").classList.add("no-scroll");
    }
    setTimeout(() => {
      if (popupBox) {
        popupBox.style.display = "flex";
        popupBox.classList.add("addPopupAnimation");
      }
    }, 180);
  }, 800);

  minusEighteenBtn.addEventListener("click", () => {
    // const windowBox1 = document.querySelector(".windowBox");
    const windowBox = document.createElement("div");
    if (windowBox) windowBox.remove();
    windowBox.classList.add("windowBox");
    windowBox.innerHTML = `
        <div class="windowBox">
          <div class="windowMask"></div>
          <h2 class="titleWindowBox">
            Desculpe, o acesso é permitido apenas para maiores de idade.
          </h2>
          <a href="/" class="windowLink">Voltar a página inícial</a>
        </div>
      `;
    document.querySelector("body").appendChild(windowBox);
    windowBox.classList.add("addPopupAnimation");
    document.querySelector("body").classList.add("no-scroll");
    console.log(windowBox);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const wrapperPopup = document.querySelector(".wrapperPopup");
  const expirationTime = localStorage.getItem("popupExpirationTime");

  if (expirationTime && new Date().getTime() < parseInt(expirationTime, 10)) {
    document.querySelector("body").classList.remove("no-scroll");
    wrapperPopup.style.display = "none";
    wrapperPopup.remove();
  } else {
    localStorage.removeItem("popupExpirationTime");
  }
});

// Functions called
changeNavBarColor();
mobileMenuEvents();
fetchCardsInfo();
redirectCards();
getCurretYear();
showAndEventPopup();
