//Work in Progress version of Shiny event
pokeDetails.addEventListener('click', function(e){
    console.log('pokeDetails event listener triggered');
    console.log(e.target);
    if(e.target.tagName === 'IMG') {
        const baseUrl = e.target.src;
        const shinyUrl = e.target.shinyPoke;

        if(baseUrl === shinyUrl){
            e.target.src = e.target.defaultPoke;
        } else {
            e.target.src = shinyUrl;
        }
    }
});

// Functional pokeBar version of Shiny event
pokeBar.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.tagName === 'IMG') {
        const baseUrl = e.target.src;
        const shinyUrl = e.target.shinyPoke;

        if(baseUrl === shinyUrl){
            e.target.src = e.target.defaultPoke
        } else {
            e.target.src = shinyUrl
        }
    }
})