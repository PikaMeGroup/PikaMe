// document.getElementById('pokeBut').addEventListener('click', findPoke);
//document.getElementById('pokeBut').addEventListener('click', displayAllGroup);

var myData;

function getEgg(){
        var selEgg = document.getElementById('egggroup');
        var selEggVal = selEgg.options[selEgg.selectedIndex].value;
        var selEggText = selEgg.options[selEgg.selectedIndex].text;

        document.getElementById('eggName').innerHTML = selEggText + ' group';

        console.log(selEggVal);

        return selEggVal;
}


function getData(link) {

    return ($.ajax({
        url: link,
        dataType: 'json',
        async: false,
        success: function(data) {
            return data;
        }
    })).responseJSON;
}

// function findPoke() {
//     var pokemon = document.getElementById('pokeInput').value
//     var pokemonLink = `pokemon/` + pokemon
//     pokemonData = getData(pokemonLink)
//     console.log(pokemonData)
//     var name = pokemonData.name
//     var image = pokemonData.sprites.front_default
//     document.getElementById("pokeName").innerHTML = name;
//     document.getElementById("pokePic").src = image;

//     displayAllGroup()
// }

function displayAllGroup() {
    console.log("displaygroup");
    document.getElementById('display').innerHTML = '';
    var egggroup = getEgg();

    var data = getData('http://pokeapi.co/api/v2/egg-group/' + egggroup);
    var group = data.pokemon_species;

    for (var i = 0;  i < group.length - 1; i++) {
        displayPokemon(group[i]);
    }
}

function changeText(){
    console.log('has been pressed');
}

function displayPokemon(pokemon) {


    console.log("displayPokemon");
    console.log(pokemon);
    var tempData = getData(pokemon.url);
    var newurl = tempData.varieties[0].pokemon.url;
    var data = getData(newurl);
    var name = tempData.name;
    var formatted_name =  name.charAt(0).toUpperCase() + name.slice(1);
    var sprite = data.sprites.front_default;

    // each pokemon in div called pokeDisplay
    var div = document.createElement("DIV");
    div.setAttribute("id", "pokeDisplay");

    // name of pokemon
    var para = document.createElement("p");
    var text = document.createTextNode(formatted_name);
    para.appendChild(text);
    para.setAttribute("id", "pokePara");

    // image 
    var img = document.createElement("img");

    //making poke display clickable 
    // var a_href = $('pokeDisplay').attr('href', "javascript: changeText()");
    // img.setAttribute("href", "javascript: changeText()");

    img.setAttribute("id", "pokeImg");
    img.setAttribute("src", sprite);
    div.appendChild(img);
    div.appendChild(para);
    document.getElementById("display").appendChild(div);
}

