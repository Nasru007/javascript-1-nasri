const url = "https://www.cheapshark.com/api/1.0/deals"

const container = document.querySelector(".gameContainer")

async function fetchInfo() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    container.innerHTML = ""
    data.map((item) => {
      container.innerHTML += `<div class="game">
                                <a href="details.html?id=${item.dealID}" class="gameName">${item.title}</a>
                                <p class="gameName">${item.title}</p>
                                <img class="gameImage" src="${item.thumb}"/> 
                                </div>`
    })
  } catch (err) {
    console.log(err)
  }
}

fetchInfo()
