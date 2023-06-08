const getData = async()=>{
    const data = await fetch("http://localhost:3000/api/users") 
    const result = await data.json()
    return result;
}

export {getData}