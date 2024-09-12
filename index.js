const cards = [
  // Corazones (Hearts)
  { name: "A-H", value: 10, suit: "H", img: "/assets/cards/A-H.png" },
  { name: "2-H", value: 2, suit: "H", img: "/assets/cards/2-H.png" },
  { name: "3-H", value: 3, suit: "H", img: "/assets/cards/3-H.png" },
  { name: "4-H", value: 4, suit: "H", img: "/assets/cards/4-H.png" },
  { name: "5-H", value: 5, suit: "H", img: "/assets/cards/5-H.png" },
  { name: "6-H", value: 6, suit: "H", img: "/assets/cards/6-H.png" },
  { name: "7-H", value: 7, suit: "H", img: "/assets/cards/7-H.png" },
  { name: "8-H", value: 8, suit: "H", img: "/assets/cards/8-H.png" },
  { name: "9-H", value: 9, suit: "H", img: "/assets/cards/9-H.png" },
  { name: "10-H", value: 10, suit: "H", img: "/assets/cards/10-H.png" },
  { name: "J-H", value: 10, suit: "H", img: "/assets/cards/J-H.png" },
  { name: "Q-H", value: 10, suit: "H", img: "/assets/cards/Q-H.png" },
  { name: "K-H", value: 10, suit: "H", img: "/assets/cards/K-H.png" },

  // Diamantes (Diamonds)
  { name: "A-D", value: 10, suit: "D", img: "/assets/cards/A-D.png" },
  { name: "2-D", value: 2, suit: "D", img: "/assets/cards/2-D.png" },
  { name: "3-D", value: 3, suit: "D", img: "/assets/cards/3-D.png" },
  { name: "4-D", value: 4, suit: "D", img: "/assets/cards/4-D.png" },
  { name: "5-D", value: 5, suit: "D", img: "/assets/cards/5-D.png" },
  { name: "6-D", value: 6, suit: "D", img: "/assets/cards/6-D.png" },
  { name: "7-D", value: 7, suit: "D", img: "/assets/cards/7-D.png" },
  { name: "8-D", value: 8, suit: "D", img: "/assets/cards/8-D.png" },
  { name: "9-D", value: 9, suit: "D", img: "/assets/cards/9-D.png" },
  { name: "10-D", value: 10, suit: "D", img: "/assets/cards/10-D.png" },
  { name: "J-D", value: 10, suit: "D", img: "/assets/cards/J-D.png" },
  { name: "Q-D", value: 10, suit: "D", img: "/assets/cards/Q-D.png" },
  { name: "K-D", value: 10, suit: "D", img: "/assets/cards/K-D.png" },

  // Tréboles (Clubs)
  { name: "A-C", value: 10, suit: "C", img: "/assets/cards/A-C.png" },
  { name: "2-C", value: 2, suit: "C", img: "/assets/cards/2-C.png" },
  { name: "3-C", value: 3, suit: "C", img: "/assets/cards/3-C.png" },
  { name: "4-C", value: 4, suit: "C", img: "/assets/cards/4-C.png" },
  { name: "5-C", value: 5, suit: "C", img: "/assets/cards/5-C.png" },
  { name: "6-C", value: 6, suit: "C", img: "/assets/cards/6-C.png" },
  { name: "7-C", value: 7, suit: "C", img: "/assets/cards/7-C.png" },
  { name: "8-C", value: 8, suit: "C", img: "/assets/cards/8-C.png" },
  { name: "9-C", value: 9, suit: "C", img: "/assets/cards/9-C.png" },
  { name: "10-C", value: 10, suit: "C", img: "/assets/cards/10-C.png" },
  { name: "J-C", value: 10, suit: "C", img: "/assets/cards/J-C.png" },
  { name: "Q-C", value: 10, suit: "C", img: "/assets/cards/Q-C.png" },
  { name: "K-C", value: 10, suit: "C", img: "/assets/cards/K-C.png" },

  // Picas (Spades)
  { name: "A-S", value: 10, suit: "S", img: "/assets/cards/A-P.png" },
  { name: "2-S", value: 2, suit: "S", img: "/assets/cards/2-P.png" },
  { name: "3-S", value: 3, suit: "S", img: "/assets/cards/3-P.png" },
  { name: "4-S", value: 4, suit: "S", img: "/assets/cards/4-P.png" },
  { name: "5-S", value: 5, suit: "S", img: "/assets/cards/5-P.png" },
  { name: "6-S", value: 6, suit: "S", img: "/assets/cards/6-P.png" },
  { name: "7-S", value: 7, suit: "S", img: "/assets/cards/7-P.png" },
  { name: "8-S", value: 8, suit: "S", img: "/assets/cards/8-P.png" },
  { name: "9-S", value: 9, suit: "S", img: "/assets/cards/9-P.png" },
  { name: "10-S", value: 10, suit: "S", img: "/assets/cards/10-P.png" },
  { name: "J-S", value: 10, suit: "S", img: "/assets/cards/J-P.png" },
  { name: "Q-S", value: 10, suit: "S", img: "/assets/cards/Q-P.png" },
  { name: "K-S", value: 10, suit: "S", img: "/assets/cards/K-P.png" }
];

const player = { canPlay: true, points: 0 }
const dealer = { wins: false, points: 0, lose: false }


const $playerCards = document.getElementById("playerCards")
const $dealerCards = document.getElementById("dealerCards")

const $dealButton = document.getElementById("deal")
const $standButton = document.getElementById("stand")
const $resetButton = document.getElementById("reset")

function createCard (img) {
  const $card = document.createElement("img")
  $card.src = img
  $card.className = "cards"
  return $card
}


function chooseCard () {
  return cards[Math.trunc(Math.random() * cards.length)]
}

function getCard () {
  const card = chooseCard()
  return { cardInfo: card, $card: createCard(card.img) }
}

function addPlayerCard () {
  if (player.canPlay) {
    const { cardInfo, $card } = getCard()
    player.points += cardInfo.value
    $playerCards.appendChild($card)
    if (player.points > 21) {
      console.log("Perdiste");
      player.canPlay = false
    }
  }
}

function dealerFunction () {
  while (!dealer.wins || !dealer.lose) {
    if (dealer.points < player.points || dealer.points == 0) {
      const { cardInfo, $card } = getCard()
      $dealerCards.appendChild($card)
      dealer.points += cardInfo.value

      if (dealer.points > player.points) {
        if (dealer.points <= 21) {
          dealer.wins = true
          if (dealer.points === 21) console.log("Blackjack");
        } else {
          dealer.lose = true
        }

        break
      }
    } else {
      break
    }
  }
}

function dealerDelay () {
  const { cardInfo, $card } = getCard()
  $dealerCards.appendChild($card)
  dealer.points += cardInfo.value

  function intervalCallback () {
    if (!dealer.wins && !dealer.lose) {
      if (dealer.points <= player.points) {
        const { cardInfo, $card } = getCard()
        $dealerCards.appendChild($card)
        dealer.points += cardInfo.value

        if (dealer.points > player.points) {
          if (dealer.points <= 21) {
            dealer.wins = true
            if (dealer.points === 21) console.log("Blackjack");
          } else {
            dealer.lose = true
          }

          clearInterval(showCardIntervall)
        }
      }
    }
  }

  const showCardIntervall = setInterval(intervalCallback, 1000)
}

function stand () {
  player.canPlay = false
  $dealerCards.children[0].remove()
  // dealerFunction()
  dealerDelay()
}

function reset () {
  player.canPlay = true
  player.points = 0
  Array.from($playerCards.children).forEach(card => card.remove())

  dealer.wins = false
  dealer.lose = false
  dealer.points = 0
  Array.from($dealerCards.children).forEach(card => card.remove())
  $dealerCards.appendChild(createCard("/assets/cards/BACK.png"))

}

$dealButton.addEventListener("click", addPlayerCard)
$standButton.addEventListener("click", stand)
$resetButton.addEventListener("click", reset)