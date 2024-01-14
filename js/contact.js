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

function handleFormSubmit() {
  const formContact = event.target;
  const formData = new FormData(formContact);

  function successWindowEvent() {
    const successWindow = document.querySelector(".successWindow");
    const windowClosed = document.querySelector(".windowClosed");
    const contentWindow = document.querySelector(".successContainer");
    document.querySelector("#name").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#mensagem").value = "";

    function closedWindow() {
      contentWindow.classList.remove("addAnimation");
      contentWindow.classList.add("removeAnimation");
      setTimeout(() => {
        setTimeout(() => {
          successWindow.remove();
        }, 500);
      }, 500);
    }
    successWindow.addEventListener("click", (e) => {
      const elckd = e.target;
      if (elckd.classList.contains("successWindow")) {
        closedWindow();
      }
    });

    windowClosed.addEventListener("click", closedWindow);
  }

  function createSuccessMsg() {
    const successWindow = document.createElement("div");
    successWindow.classList.add("successWindow");
    successWindow.innerHTML = `
    <div class="successContainer">
      <div class="windowClosed"><span class="fa-solid fa-xmark"></span></div>
      <div class="successContent">
        <p class="successTitle">Sua mensagem Foi enviada com sucesso!</p>
        <p class="sucessText">Obrigado pelo contato.</p>
        <p class="sucessText">Responderemos o quanto antes.</p>
        <img
          src="img/logo/transp-logo.webp"
          data-src="img/logo/transp-logo.webp"
          loading="lazy"
          alt="Trevo da Sorte logo"
          class="successWindowImg"
        />
      </div>
    </div>
    `;
    document.getElementsByTagName("body")[0].append(successWindow);
    document.querySelector(".successContainer").classList.add("addAnimation");
    successWindowEvent();
  }

  fetch(formContact.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // console.log(response);
      createSuccessMsg();
    })
    .catch((error) => {
      console.error(error);
      console.error("error");
    });
}

function handleVerification(event) {
  if (event) {
    event.preventDefault();
  }
  const formBtn = document.querySelector(".headerBtn");

  const form = document.querySelector(".headerForm");

  function createErrorMessage(field, msg) {
    const span = document.createElement("span");
    span.classList.add("headerFormErrorMsg");
    span.innerHTML = msg;
    span.classList.add("error-text");
    field.insertAdjacentElement("afterend", span);
  }

  // formBtn.addEventListener("click", (event) => {

  function valitationFields() {
    let valid = true;
    for (let errorText of form.querySelectorAll(".headerFormErrorMsg")) {
      errorText.remove();
    }

    for (let field of form.querySelectorAll(".required")) {
      const label =
        field.previousElementSibling && field.previousElementSibling.innerText;

      if (!field.value) {
        if (label === null) createErrorMessage(field, `Não pode ficar vazio.`);
        valid = false;
        return;
      }

      if (field.classList.contains("name")) {
        if (!validateName(field)) return valid;
      }

      if (field.classList.contains("telefone")) {
        if (!validatePhoneNumber(field)) return valid;
      }

      if (field.classList.contains("message")) {
        if (!validateMsg(field)) return valid;
      }
    }

    handleFormSubmit();
  }

  function validateName(field) {
    const corporateReason = field.value;
    let valid = true;
    const nameRegex = /^[a-zA-ZÀ-ÿ]+(([',. -][a-zA-ZÀ-ÿ ])?[a-zA-ZÀ-ÿ]*)*$/;
    if (corporateReason.length < 5) {
      createErrorMessage(field, "O nome não ter menos que 4 letras");
      valid = false;
      return false;
    }
    if (!nameRegex.test(corporateReason)) {
      createErrorMessage(field, "O nome não poder conter caractere especial");
      valid = false;
      return false;
    }

    return true;
  }

  function validatePhoneNumber(field) {
    const phoneNumber = field.value.replace(/\D/g, "");
    if (/[^\d\s()-]/.test(field.value)) {
      createErrorMessage(field, "Telefone inválido.");
      return false;
    }
    const ddd = phoneNumber.substring(0, 2);
    const bodyPhone = phoneNumber.substring(2, phoneNumber.length);
    let phoneFormated;
    if (bodyPhone.length === 9) {
      phoneFormated = bodyPhone.replace(/^(\d{5})(\d{4})/, "$1-$2");
    } else if (bodyPhone.length === 8) {
      phoneFormated = bodyPhone.replace(/^(\d{4})(\d{4})/, "$1-$2");
    } else {
      createErrorMessage(
        field,
        "O telefone precisa conter de 8 a 9 dígitos + o DDD."
      );
      return false;
    }
    document.getElementById("telefone").value = `(${ddd}) ${phoneFormated}`;
    return true;
  }

  function validateMsg(field) {
    const message = field.value;
    if (message.length < 10) {
      createErrorMessage(field, "A mensagem precisa ter no mínimo 10 letras");
      return false;
    }
    return true;
  }

  valitationFields();
  // });
}

document
  .querySelector(".headerForm")
  .addEventListener("submit", handleVerification);
// Functions called
changeNavBarColor();
mobileMenuEvents();
getCurretYear();
