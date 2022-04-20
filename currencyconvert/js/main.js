//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

// document.querySelector('h2').innerHTML = localStorage.getItem('books')

function getFetch(){
  const amount = document.querySelector('#amount').value
  const choice1 = document.querySelector('#orig').value
  const choice2 = document.querySelector('#new').value
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${choice1}/${choice2}.json`
  let description = `${amount} ${choice1.toUpperCase()} is equal to ${(data[choice2] * amount).toFixed(2)} ${choice2.toUpperCase()}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(!localStorage.getItem('currency')) {
          localStorage.setItem('currency', description)
        } else {
          let currency = localStorage.getItem('currency') + '\n' + description
          localStorage.setItem('currency', currency)
        }
        // document.querySelector('h2').innerHTML = localStorage.getItem('books')
        
        document.querySelector('h2').innerHTML = description
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


