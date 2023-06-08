import { getData } from "@/lib/crud";

interface User {
  FirstName:string;
  LastName:string;
}

const Home = async() => {
const result = await getData()
const users = result.users.map((user:User,index:number) => {
  return (
    <div key={index}>
      <h2>{user.FirstName} {user.LastName}</h2>
    </div>
  )
})
  return (
    <main>
      {users}
    </main>
  )
}

export default Home