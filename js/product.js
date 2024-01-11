function assemblingOthersBalloonsPage(data, product, index, price) {
  try {
    // console.log(data);
    const whatsAppLink = `https://api.whatsapp.com/send?phone=5512974011729&text=Ol%C3%A1!%20Acessei%20o%20site%20e%20quero%20comprar%20o%20${product}%20de%20R$%20${price}.%20Como%20devo%20prosseguir%20para%20concluir%20a%20compra?`;
    const infoBox = document.querySelector(".ourBalloonsContainer");
    function createProductInfo() {
      for (let i = 0; i < data.prices.length; i++) {
        if (data.prices[i].price === price) {
          // console.log(data.type);
          const ourBalloonsImgBox = document.createElement("div");
          ourBalloonsImgBox.classList.add("ourBalloonsImgBox");
          ourBalloonsImgBox.innerHTML = `
          <img
            src="${data.prices[i].imagePath}"
            data-src="${data.prices[i].imagePath}"
            alt="Game image"
            class="ourBalloonsImg"
          />
          `;
          infoBox.appendChild(ourBalloonsImgBox);

          const ourBalloonsTextsBox = document.createElement("div");
          ourBalloonsTextsBox.classList.add("ourBalloonsTextsBox");
          ourBalloonsTextsBox.innerHTML = `
          <h2 class="ourBalloonsTextsTitle">${data.type}</h2>
          <div class="balloonsType">
            <p class="balloonsTypeTitle">${data.type}:</p>
            <span class="balloonsTypeExemple">
              <p class="balloonsTypeExempleText">- ${
                data.prices[i].games
              } Jogos</p>
              <p class="balloonsTypeExempleText">- ${
                data.prices[i].numbersPerGame
              } Números</p>
              ${
                data.prices[i].shamrocks
                  ? `<p class="balloonsTypeExempleText"> - ${data.prices[i].shamrocks} </p>`
                  : ""
              }
              <p class="balloonsTypeExempleText">- ${
                data.prices[i].quotas
              } Cotas</p>
            </span>
          </div>
          <p class="balloonsPrice">
            R$ <span class="balloonsPriceReturn">${data.prices[i].price}</span>
          </p>
          <a
            href="${whatsAppLink}"
            area-label="Comprar"
            target="_blank"
            class="balloonsLink"
            ><span class="fa-brands fa-whatsapp balloonsIcon"> </span>
            Comprar</a
          >
          `;
          infoBox.appendChild(ourBalloonsTextsBox);
        }
      }
    }
    createProductInfo();
  } catch (error) {
    console.warn(error);
  }
}
function assemblingQuinaBalloonsPage(data, product, index, price) {
  try {
    // console.log(data);
    // console.log(data.prices);
    const whatsAppLink =
      "https://api.whatsapp.com/send?phone=5512974011729&text=Ol%C3%A1!%20Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20dos%20bol%C3%B5es%20anuncidos%20no%20site";
    const infoBox = document.querySelector(".ourBalloonsContainer");
    let dataContent;
    function createProductInfo() {
      for (let i = 0; i < data.prices.length; i++) {
        if (data.prices[i].price === price) {
          dataContent = data.prices[i].award[0].amount_award[0].content;
          const subTitle = data.prices[i].award[0].amount_award[0].title;

          const ourBalloonsImgBox = document.createElement("div");
          ourBalloonsImgBox.classList.add("ourBalloonsImgBox");
          ourBalloonsImgBox.innerHTML = `
            <img
            src="${data.prices[i].imagePath}" 
            data-src="${data.prices[i].imagePath}" 
            alt="Game image"
            class="ourBalloonsImg"
            />
            `;
          infoBox.appendChild(ourBalloonsImgBox);

          const ourBalloonsTextsBox = document.createElement("div");
          ourBalloonsTextsBox.classList.add("ourBalloonsTextsBox");
          ourBalloonsTextsBox.innerHTML = `
           <h2 class="ourBalloonsTextsTitle">${product}</h2>
            <div class="balloonsType">
            <p class="balloonsTypeTitle">${product}:</p>
            <span class="balloonsTypeExemple">
                <p class="balloonsTypeExempleText">- ${data.prices[i].games} Jogos</p>
                <p class="balloonsTypeExempleText">- ${data.prices[i].numbersPerGame} Números</p>
                <p class="balloonsTypeExempleText">- ${data.prices[i].quotas} Cotas</p>
            </span>
            </div>
            <p class="ourBalloonsTextsSubtitle">${subTitle}
          </p>
          `;
          infoBox.appendChild(ourBalloonsTextsBox);
          for (let e = 0; e < dataContent.length; e++) {
            const infoAward = document.createElement("div");
            infoAward.classList.add("infoAward");
            infoAward.innerHTML = `
            <div class="balloonsExemplo">
            <p class="balloonsExemploTitle">
              * <span class="balloonsExemploTitleReturn">${
                dataContent[e].number
              }</span> Números:
            </p>
            <span class="balloonsExemploPrizes">
              <p class="balloonsExemploText">
                - ${dataContent[e].type_one}
              </p>
              ${
                dataContent[e].type_two
                  ? `<p class="balloonsExemploText"> - ${dataContent[e].type_two} </p>`
                  : ""
              }
              ${
                dataContent[e].type_three
                  ? `<p class="balloonsExemploText"> - ${dataContent[e].type_three} </p>`
                  : ""
              }
              ${
                dataContent[e].type_four
                  ? `<p class="balloonsExemploText"> - ${dataContent[e].type_three} </p>`
                  : ""
              }
            </span>
          </div>
          
            `;
            ourBalloonsTextsBox.appendChild(infoAward);
          }

          const balloonsPrice = document.createElement("p");
          balloonsPrice.classList.add("balloonsPrice");
          balloonsPrice.innerHTML = `
          R$ <span class="balloonsPriceReturn">${price}</span>
          `;
          ourBalloonsTextsBox.appendChild(balloonsPrice);

          const balloonsLink = document.createElement("a");
          balloonsLink.classList.add("balloonsLink");
          balloonsLink.setAttribute("href", whatsAppLink);
          balloonsLink.setAttribute("area-label", "Comprar");
          balloonsLink.setAttribute("target", "_blank");
          balloonsLink.innerHTML = `
          <span class="fa-brands fa-whatsapp balloonsIcon"></span>
            Comprar
          `;
          ourBalloonsTextsBox.appendChild(balloonsLink);
        }
      }
    }
    createProductInfo();
  } catch (error) {
    console.warn(error);
  }
}

function fetchCardsInfo(product, index, price) {
  try {
    fetch("../dataBalloons.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.dataBalloons.length; i++) {
          if (
            data.dataBalloons[i].type === product &&
            product === "Bolão Quina"
          ) {
            assemblingQuinaBalloonsPage(
              data.dataBalloons[i],
              product,
              index,
              price
            );
          } else if (
            product !== "Bolão Quina" &&
            data.dataBalloons[i].type == product
          ) {
            assemblingOthersBalloonsPage(
              data.dataBalloons[i],
              product,
              index,
              price
            );
          } else if (
            product === "Bolão  Milionária" &&
            data.dataBalloons[i].type === "Bolão +Milionária"
          ) {
            assemblingOthersBalloonsPage(
              data.dataBalloons[i],
              product,
              index,
              price
            );
          }
        }
      });
  } catch (error) {
    console.warn(error);
  }
}

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
        btnHamburguer[indice].style.backgroundColor = "#000";
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

function getUrlParms() {
  // Reading URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get("product").replace(/-/g, " ");
  const productIndex = urlParams.get("productIndex");
  const productValue = urlParams.get("productValue");
  fetchCardsInfo(product, productIndex, productValue);
}

// Functions called
changeNavBarColor();
mobileMenuEvents();
getUrlParms();
