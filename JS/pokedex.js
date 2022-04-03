//fetch: forma en que se realizara una peticion o consulta a una api
//En esta parter consulta la informacion del link, despues se solicita una respuesta  
//pokeimg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        // el status es cuando se realiza una consulta 
        //con el if se valida si es diferente de 200 se coloca una imagen para anunciar el error 
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://c.tenor.com/QvnSpdGuVXUAAAAC/pikachu-crying.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}