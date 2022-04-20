//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=ysx8wgt6MqWEEfBSRYy8zhQxaWXEx69aebosbQrD&search_value=${choice}&search_type=1`
    
    document.querySelector('ul').innerHTML = ''

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            const id = data.results[0].id
            const url2 = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=ysx8wgt6MqWEEfBSRYy8zhQxaWXEx69aebosbQrD`

            fetch(url2)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    let arr = []
                    data.forEach(obj => {
                        if (obj.price == null) {
                            arr.push(obj.name)
                        }
                    })
                    arr = [...new Set(arr)]
                    arr.forEach(e => {
                        const li = document.createElement('li')
                        li.textContent = e
                        document.querySelector('ul').appendChild(li)
                    })
                     
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


