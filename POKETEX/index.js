let number = 10;
let url = `https://randomuser.me/api/?results=${number}`;
requestPokemons();

const button = document.querySelector('.request');
button.addEventListener('click', function() {
    number = number + 10;
    url = `https://randomuser.me/api/?results=${number}`;
    requestPokemons();
});


function requestPokemons() {
    axios.get(url)
        .then(function (response) {
            const pokemons = response.data.results;
            const list = document.querySelector('.list');
            list.innerHTML = '';
            pokemons.forEach(function (pokemon, number) {
                list.innerHTML = list.innerHTML + `
                <h1>${pokemon.name}</h1>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number + 1}.png">
            `;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}


    