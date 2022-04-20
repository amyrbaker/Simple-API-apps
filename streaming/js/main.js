//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=ysx8wgt6MqWEEfBSRYy8zhQxaWXEx69aebosbQrD&search_value=${choice}&search_type=1`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            const id = data.results[0].id
            const url2 = `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=ysx8wgt6MqWEEfBSRYy8zhQxaWXEx69aebosbQrD`

            fetch(url2)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                    let arr = []
                    data.forEach(obj => arr.push(obj.name))
                    console.log(arr)
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


