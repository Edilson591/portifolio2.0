const fechtJson =  async () =>{
    const url = await fetch(`https://raw.githubusercontent.com/Edilson591/portifolio2.0/main/data/profile.json`)
    const getJson =await url.json()
    return await getJson
}




