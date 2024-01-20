let count = 0;

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

function getLocalStorageDataAndRemoveBolao() {
  const localStorageList = localStorage.getItem("game_list");
  const gameList = JSON.parse(localStorageList);
  const gameNames = gameList.dataBalloons;
  const typeGame = [];
  for (let i = 0; i < gameNames.length; i++) {
    typeGame.push(gameNames[i].type);
  }
  const gameNameList = typeGame.map((item) => item.replace("Bolão ", ""));
  return gameNameList;
}

function accentsRemover(str) {
  return str
    .replace("+", "mais")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .replace(/[^\w\s]/gi, "");
}

//Searh game result
document.querySelector("#inputGameNumber").addEventListener("focus", () => {
  document.querySelector(".searchErrorMsg").textContent = "";
});
document.querySelector("#searchName").addEventListener("focus", () => {
  document.querySelector(".searchErrorMsg").textContent = "";
});

function createOptionGame() {
  const gameList = getLocalStorageDataAndRemoveBolao();
  const select = document.querySelector("#searchName");
  for (let i = 0; i < gameList.length; i++) {
    const option = document.createElement("option");
    option.value = accentsRemover(gameList[i]).toLowerCase();
    option.textContent = gameList[i];
    select.appendChild(option);
  }
  // console.log(gameList);
}

function selectEvents() {
  const searchInput = document.querySelector(".labelSearchInput:nth-child(2)");
  const select = document.querySelector("#searchName");
  const errorMsg = document.querySelector(".searchErrorMsg");
  const input = document.querySelector("#inputGameNumber");
  select.addEventListener("change", () => {
    searchInput.style.display = "flex";
    const selectedOptionValue = select.value;
    errorMsg.textContent = "";
    // const selectedOption = select.selectedOptions[0];
    // const selectedOptionText = selectedOption.text;
  });
}

function fetchSearchField(select, input, name) {
  try {
    const origin = "fetchSearchField function";
    document.querySelector(".searchBox").style.display = "none";
    document.querySelector(".closedResultBtn").style.display = "flex";
    document.querySelector(".searchErrorMsg").textContent = "";
    document.querySelector("#inputGameNumber").value = "";
    document.querySelector("#searchName").selectedIndex = 0;
    [...document.querySelectorAll(".gameInfoContent")].forEach((e) =>
      e.classList.remove("showGameContent")
    );
    const gameBox = document.querySelector(".searchInputBtnBox");
    const searchContent = document.createElement("div");
    searchContent.classList.add("searchContent");
    gameBox.appendChild(searchContent);
    const title = document.createElement("h2");
    title.innerHTML = `<h2 class="searchedTitle">${name}</h2>`;
    searchContent.appendChild(title);

    fetch(`https://loteriascaixa-api.herokuapp.com/api/${select}/${input}`)
      .then((resposta) => resposta.json())
      .then((json) => {
        let resultSearched = criarConteudoHtml(json, name);
        searchContent.innerHTML += resultSearched;
        console.log(json);
        createAwardsInfo(json, origin);
      });
  } catch (error) {
    console.warn(error);
  }
}

document.querySelector("#searchGameBtn").addEventListener("click", () => {
  const select = document.querySelector("#searchName");
  const input = document.querySelector("#inputGameNumber");
  const errorMsg = document.querySelector(".searchErrorMsg");
  const selectedOptionValue = select.value;
  const selectedOption = select.selectedOptions[0];
  const selectedOptionText = selectedOption.text;
  const regex = /^\d+$/;

  if (selectedOptionValue === "default") {
    errorMsg.textContent = "Selecione o jogo desejado!";
    return;
  }
  if (input.value === "") {
    errorMsg.textContent = "Adicione o número do concurso!";
    return;
  }
  if (!regex.test(input.value)) {
    errorMsg.textContent = "Este campo deve conter apenas números!";
    return;
  }
  fetchSearchField(selectedOptionValue, input.value, selectedOptionText);
});
document.querySelector(".closedResultBtn").addEventListener("click", () => {
  document.querySelector(".searchBox").style.display = "flex";
  document.querySelector(".closedResultBtn").style.display = "none";
  document.querySelector(".searchContent").remove();
});
// Create elements
// function fetchAllGames() {}

function formatoMoedaBrasileira(str) {
  const formatoMoedaBrasileira = str.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatoMoedaBrasileira;
}

async function createGameElement() {
  const gameList = getLocalStorageDataAndRemoveBolao();

  for (let i = 0; i < gameList.length; i++) {
    const headerResultsBox = document.querySelector(".headerResultsBox");
    headerResultsBox.innerHTML += `<!-- Game ${i + 1} -->`;
    const idElement = accentsRemover(gameList[i].toLowerCase());
    const eachResultsBox = document.createElement("div");
    eachResultsBox.classList.add("eachResultsBox");
    eachResultsBox.innerHTML = `
    <div class="headerResultGame ${idElement}">
      <p class="headerGameName">${gameList[i]}</p>
      <span class="fa-solid fa-angle-down gameIcon"></span>
      <div class="elementClicked" onclick="openGameInfo(event)"></div>
    </div>
    <div class="gameInfoContent"></div>
    `;
    headerResultsBox.appendChild(eachResultsBox);

    await fetchGameResult(idElement, i, gameList[i]);
  }
}

// Games events
function openGameInfo(event) {
  const elCkd = event.target;
  const elClickedList = document.querySelectorAll(".elementClicked");
  const gameContentList = document.querySelectorAll(".gameInfoContent");
  const gameIconList = document.querySelectorAll(".gameIcon");
  let activeIdx = false;

  for (let i = 0; i < elClickedList.length; i++) {
    if (elCkd === elClickedList[i]) {
      const contentElement = gameContentList[i];

      // Se o elemento clicado já possui a classe, remova-a
      if (contentElement.classList.contains("showGameContent")) {
        contentElement.classList.remove("showGameContent");
        gameIconList[i].classList.remove("rotateIcon");
        activeIdx = false;
        // console.log("Elemento clicado duas vezes: ", activeIdx);
      } else {
        // Caso contrário, adicione a classe
        contentElement.classList.add("showGameContent");
        gameIconList[i].classList.add("rotateIcon");
        activeIdx = true;
        // console.log("Elemento clicado uma vez: ", activeIdx);
      }
    } else {
      // Se não é o elemento clicado, remova a classe
      gameContentList[i].classList.remove("showGameContent");
      gameIconList[i].classList.remove("rotateIcon");
    }
  }
}
// Games fetch
async function fetchGameResult(id, index, name) {
  try {
    const origin = "fetchGameResult function";
    const urlSearched = "https://loteriascaixa-api.herokuapp.com/api/";
    const gameInfo = document.querySelectorAll(`.gameInfoContent`)[index];

    const json = await fetch(`${urlSearched}${id}/latest`).then((resposta) =>
      resposta.json()
    );
    const novoConteudo = criarConteudoHtml(json, name);
    createAwardsInfo(json, origin);
    gameInfo.innerHTML = novoConteudo;
  } catch (error) {
    console.warn(error);
  }
}
function incrementIndex() {
  count++;
  return count;
}

// Get games results .d =
function criarConteudoHtml(json, name) {
  // console.log(json);
  try {
    const valueAccumuletdEspComp = formatoMoedaBrasileira(
      json.valorAcumuladoConcursoEspecial
    );
    const valueAccumuletComp_0_5 = formatoMoedaBrasileira(
      json.valorAcumuladoConcurso_0_5
    );
    const valueAccumuletNextComp = formatoMoedaBrasileira(
      json.valorAcumuladoProximoConcurso
    );
    const collectedAmount = formatoMoedaBrasileira(json.valorArrecadado);
    const estimatedValue = formatoMoedaBrasileira(
      json.valorEstimadoProximoConcurso
    );

    const index = incrementIndex();

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");

    contentContainer.innerHTML = `
    <div class="lineContent">
      <div class="nameNumberDateBox">
        <p class="gameName">Nome jogo: <span>${name}</span></p>
        <p class="gameNumber">Número Concurso: <span>${json.concurso}</span></p>
        <p class="gameDate">Data concurso: <span>${json.data}</span></p>
      </div>
      <div class="drawnDozensBox">
        <p class="drawnDozens">
          Dezenas sorteadas: <span>[${json.dezenas
            .join(", ")
            .replace(/,/g, ", ")}]</span>
        </p>
        <p class="orderOfDrawnNumbers">
          Ordem sorteadas: <span>[${json.dezenasOrdemSorteio
            .join(", ")
            .replace(/,/g, ", ")}]</span>
        </p>
      </div>
      <div class="accumulatedDrawLocationBox">
        <p class="accumulated">Acumulou: <span>${
          json.acumulou ? "Sim" : "Não"
        }</span></p>
        <p class="drawLocation">
          Local do sorteio: <span>${json.local}</span>
        </p>
      </div>
      <div class="nextInformation">
      <button type="button" class="awardsBtn" data-index="${index}" name="${
      json.loteria
    }" aria-labal="Ver premiação" onclick="createTableContent(name, ${index})" >Ver premiação</button>
        <p class="awards">Premiações:</p>
        <table>
          <thead>
            <tr class="headerLineTable">
              <th><b>Acertos</b></th>
              <th><b>Faixa</b></th>
              <th><b>Ganhadores</b></th>
              <th><b>Valor do prêmio</b></th>
            </tr>
          </thead>
          <tbody data-name="${json.loteria}"></tbody>
        </table>
      </div>
    </div>

    <div class="nextValueBox">
      <p class="specialAccumulatedValue">
        Valor especial acumulado: <span>${valueAccumuletdEspComp}</span>
      </p>
      <p class="accumulatedContestValue">
        Valor acumulado no concurso: <span>${valueAccumuletComp_0_5}</span>
      </p>
      <p class="accumulatedValueNextCompetition">
        Valor acumulado próx. concurso: <span>${valueAccumuletNextComp}</span>
      </p>
      <p class="valueRaised">
        Valor arrecadado: <span>${collectedAmount}</span>
      </p>
      <p class="estimatedValueNextCompetition">
        Valor estimado proximo concurso:
        <span>${estimatedValue}</span>
      </p>
      
      
    </div>
    <script>
    
    </script>
    `;

    return contentContainer.outerHTML;
  } catch (error) {
    console.warn(error);
  }
}

function createAwardsInfo(json, origin) {
  try {
    // console.log(json);
    let jsonfile = json.premiacoes;
    // console.log(json.premiacoes);
    if (origin === "fetchGameResult function") {
      // console.log("nextInformation: ", nextInformation);
      // // for (let e = 0; e < nextInformation.length; e++) {:
      // nextInformation.forEach((e, idx) => {
      //   if (nextInformation[idx] === jsonfile[idx]) {
      //     for (let i = 0; i < jsonfile.length; i++) {
      //       const prizeValue = formatoMoedaBrasileira(jsonfile[e].valorPremio);
      //       const tr = document.createElement("tr");
      //       tr.innerHTML = `
      //           <td  class="leftLine firstColor">${jsonfile[e].descricao}</td>
      //           <td class="centerLine secundColor">${jsonfile[e].faixa}</td>
      //           <td  class="centerLine firstColor">${jsonfile[e].ganhadores}</td>
      //           <td  class="centerLine secundColor">${prizeValue}</td>
      //         `;
      //       e.appendChild(tr);
      //       // }
      //     }
      //   }
      // });
      // }
    } else if (origin === "fetchSearchField function") {
      console.log("jsonfile: ", jsonfile.length);
      console.log("nextInformation: ", nextInformation.length);
      const nextInformation = document.querySelector(".searchContent tbody");
      for (let i = 0; i < jsonfile.length; i++) {
        const prizeValue = formatoMoedaBrasileira(jsonfile[i].valorPremio);
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td  class="leftLine firstColor">${jsonfile[i].descricao}</td>
            <td class="centerLine secundColor">${jsonfile[i].faixa}</td>
            <td  class="centerLine firstColor">${jsonfile[i].ganhadores}</td>
            <td  class="centerLine secundColor">${prizeValue}</td>
          `;
        nextInformation.appendChild(tr);
      }
    } else {
      console.warn("Arquivo não encontrado!");
    }
  } catch (error) {
    console.warn(error);
  }
}
function createTableContent(name, index) {
  try {
    const awardsBtnList = [...document.querySelectorAll(".awardsBtn")];
    const tbodyList = [...document.querySelectorAll("tbody")];

    fetch(`https://loteriascaixa-api.herokuapp.com/api/${name}/latest`)
      .then((resposta) => resposta.json())
      .then((json) => {
        const premiacoes = json.premiacoes;
        if (tbodyList[index - 1]) {
          for (let i = 0; i < premiacoes.length; i++) {
            const prizeValue = formatoMoedaBrasileira(
              premiacoes[i].valorPremio
            );
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td  class="leftLine firstColor">${premiacoes[i].descricao}</td>
                <td class="centerLine secundColor">${premiacoes[i].faixa}</td>
                <td  class="centerLine firstColor">${premiacoes[i].ganhadores}</td>
                <td  class="centerLine secundColor">${prizeValue}</td>
              `;
            tbodyList[index - 1].appendChild(tr);
          }
        }
      });
  } catch (error) {
    console.warn(error);
  }
}

// Functions called
changeNavBarColor();
mobileMenuEvents();
getCurretYear();
createGameElement();
// fetchAllGames();
createOptionGame();
selectEvents();
