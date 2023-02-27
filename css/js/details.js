const queryString = document.location.search
const URLparams = new URLSearchParams(queryString)
const gameTitle = URLparams.get("id")
const gameName = document.querySelector(".gameName")
const gameContainer = document.querySelector(".gameContainer")

const url = "https://www.cheapshark.com/api/1.0/deals?id="

async function fetchDeal() {
  try {
    const response = await fetch(url + gameTitle)
    const data = await response.json()
    console.log(data)
    if (data.length === 0) {
      gameContainer.innerHTML = `<p class="errorMessage">Sorry, no deals found for this game</p>`
    } else {
      gameName.innerHTML = data.gameInfo.name
      gameContainer.innerHTML = `<div class="gameInformation">
                                <img src="${data.gameInfo.thumb}"/>
                                <p>Retail price ${data.gameInfo.retailPrice}</p>
                                <p>Sale price ${data.gameInfo.salePrice}</p>
                                <p>Get it at store ${data.gameInfo.storeID}</p>
                                </div>`
    }
  } catch (err) {
    gameContainer.innerHTML = `<p class="errorMessage">Sorry, something went wrong</p>`
  }
}

fetchDeal()
