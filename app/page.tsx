import { User } from "@/interfaces";
import { getAllUsers } from "@/mongo/crud";

const Home = async () => {
const result = await getAllUsers()

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