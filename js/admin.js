// Navbar section
function getTopDistanceFromNavBar() {
  const navHeight = 40;
  return navHeight;
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
        btnHamburguer[indice].style.backgroundColor = "#ffffff";
      }
    }
    if (listMenu.style.display == "flex") {
      todaNavbar.style.transition = "0.8s";
      todaNavbar.style.backgroundColor = "#ffffff";
      todaNavbar.style.boxShadow = "none";
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
// End of Navbar section

function getCurretYear() {
  const curretYear = document.querySelector(".curretYear");
  const date = new Date();
  curretYear.textContent = date.getFullYear();
}

// Login Window
function verifyEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function loginErrorMsg(msg) {
  const errorMsg = document.querySelector(".loginErrorMsg");
  errorMsg.innerText = msg;
}

function verifyPassword(pw) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
  return passwordPattern.test(pw);
}

function validationLoginForm() {
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginSenha");
  if (email.value === "") {
    console.log(email.value);
    loginErrorMsg("O e-mail não pode ficar vazio!");
    return;
  }
  if (password.value === "") {
    loginErrorMsg("A senha não pode ficar vazia!");
    return;
  }
  if (!verifyEmail(email.value)) {
    loginErrorMsg("Erro! O e-mail precisar conter '@' e '.'.");
    return;
  }
  if (!verifyPassword(password.value)) {
    loginErrorMsg(
      "A senha deve ter 6-20 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
    return;
  }
  document.querySelector(".loginWindow").style.display = "none";
}

function loginWindowEvents() {
  const loginWindow = document.querySelector(".loginWindow");
  if (loginWindow) {
    loginWindow.addEventListener("click", (e) => {
      const elCkd = e.target;
      if (
        elCkd.classList.contains("loginWindowMask") ||
        elCkd.classList.contains("closedLoginBox")
      ) {
        // window.location.href = "/";
      }

      if (elCkd.classList.contains("loginBtn")) {
        e.preventDefault();
        validationLoginForm();
      }
    });
  }
}
document.getElementById("loginEmail").addEventListener("focus", () => {
  document.querySelector(".loginErrorMsg").innerText = "";
});
document.getElementById("loginSenha").addEventListener("focus", () => {
  document.querySelector(".loginErrorMsg").innerText = "";
});
// End of Login Window

// Functions called
changeNavBarColor();
mobileMenuEvents();
loginWindowEvents();
