document.getElementById('pokeBut').addEventListener('click', findPoke);

var myData;

function getData(link) {
    
    return ($.ajax({
        url: `https://pokeapi.co/api/v2/` + link,
        dataType: 'json',
        async: false,
        success: function(data) {
            return data;
        }
    })).responseJSON;
}

function findPoke() {
    var num = document.getElementById('pokeInput').value
    var pokemonLink = 'pokemon/' + num
    pokemonData = getData(pokemonLink)
    console.log(pokemonData)
    var name = pokemonData.name
    var image = pokemonData.sprites.front_default
    document.getElementById("pokeName").innerHTML = name;
    document.getElementById("pokePic").src = image;
}

