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

mobileMenuEvents();
