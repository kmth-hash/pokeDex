const surpriseMe = (mainData , resData , n) =>{

    // console.log('Surprise me function call : ');
    // console.log(mainData )
    // console.log(resData)
    // console.log(n);

    // if n=0 , returns 10 random pokemons
    //if n=1 , returns 20 random pokemons 
    
    let totalCount = Math.min((n+1)*10 , mainData.length);
    while(resData.length<totalCount )
    {
        let x = Math.ceil((Math.random()*1000)%mainData.length);
        let randomPokemonPicked = mainData[x];
        // console.log(resData);
        if(resData.includes(randomPokemonPicked))
        {
            //if pokemon already in result list
            //skip the iteration and find a new unique random
            // console.log('found : ', randomPokemonPicked)
        }
        else{
            resData.push(randomPokemonPicked);
        }
        
    }
    //return resultant array
    return resData;

}


export { surpriseMe}