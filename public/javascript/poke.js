document.getElementById('pokeBut').addEventListener('click', findPoke);
document.getElementById('pokeBut').addEventListener('click', displayAllGroup);
var myData;

function getData(link) {
    
    return ($.ajax({
        url: `http://pokeapi.co/api/v2/` + link,
        dataType: 'json',
        async: false,
        success: function(data) {
            return data;
        }
    })).responseJSON;
}

function findPoke() {
    var pokemon = document.getElementById('pokeInput').value
    var pokemonLink = `pokemon/` + pokemon
    pokemonData = getData(pokemonLink)
    console.log(pokemonData)
    var name = pokemonData.name
    var image = pokemonData.sprites.front_default
    document.getElementById("pokeName").innerHTML = name;
    document.getElementById("pokePic").src = image;

    displayAllGroup()
}

function displayAllGroup() {
    console.log("displaygroup");
    var data = getData('egg-group/1/');
    var group = data.pokemon_species;
    for (var i = 0;  i < group.length - 1; i++) {
        displayPokemon(group[i]);
    }
}

function displayPokemon(pokemon) {
    console.log("displayPokemon");
    console.log(pokemon);
    var data = getData('pokemon/' + pokemon.name);
    console.log(data);
    var name = data.name;
    var formatted_name =  name.charAt(0).toUpperCase() + name.slice(1);
    var sprite = data.sprites.front_default;
    var div = document.createElement("DIV");
    div.setAttribute("id", "pokeDisplay");
    var para = document.createElement("p");
    var text = document.createTextNode(formatted_name);
    para.appendChild(text);
    para.setAttribute("id", "pokePara");
    var img = document.createElement("img");
    img.setAttribute("id", "pokeImg");
    img.setAttribute("src", sprite);
    div.appendChild(img);
    div.appendChild(para);
    document.getElementById("display").appendChild(div);
}
