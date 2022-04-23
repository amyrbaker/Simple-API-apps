let deckId = ''
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

document.querySelector('button').addEventListener('click', drawTwo)

let player1Points = 0
let player2Points = 0
let ties = 0
localStorage.setItem('player1', player1Points)
localStorage.setItem('player2', player2Points)
localStorage.setItem('ties', ties)

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        
        let cardsArr = {
            '2' : 2,
            '3' : 3,
            '4' : 4,
            '5' : 5,
            '6' : 6,
            '7' : 7,
            '8' : 8,
            '9' : 9,
            '10' : 10,
            'JACK' : 11,
            'QUEEN' : 12,
            'KING' : 13,
            'ACE' : 14
        }
        let player1Val = cardsArr[data.cards[0].value]
        let player2Val = cardsArr[data.cards[1].value]
        

        if (player1Val > player2Val) {
            document.querySelector('h3').innerHTML = 'Player 1 Wins'
            player1Points += 1
            localStorage.setItem('player1', player1Points)
        } else if (player1Val < player2Val) {
            document.querySelector('h3').innerHTML = 'Player 2 Wins'
            player2Points += 1
            localStorage.setItem('player2', player2Points)
        } else {
            document.querySelector('h3').innerHTML = 'Time for War'
            ties += 1
            localStorage.setItem('ties', ties)
        }
        document.querySelector('h4').innerHTML = `Player 1 : ${localStorage.getItem('player1')}<br/>Player 2 : ${localStorage.getItem('player2')}<br/>Ties : ${ties}`
        if (player1Points + player2Points + ties === 26) {
            let winner = player1Points > player2Points ? 'Player 1' : player1Points < player2Points ? 'Player 2' : 'Tie'
            document.querySelector('h5').innerHTML = 'Game Over' + winner === 'Tie' ? 'You tie!' : `${winner} wins!`
        } 
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

