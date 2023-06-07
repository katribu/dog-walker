
interface User {
  FirstName:string;
  LastName:string;
}

const getData = async()=>{
  const data = await fetch("http://localhost:3000/api/users") 
  const result = await data.json()
  return result;
}

const Home = async() => {
const result = await getData()
const users = result.users.map((user:User,index:number) => {
  return (
    <div key={index}>
      <h2>{user.FirstName}</h2>
    </div>
  )
})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users}
    </main>
  )
}

export default Home