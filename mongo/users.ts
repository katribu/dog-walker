import clientPromise from "./mongodb";

let users:any;

async function run(){
    try {
        const client = await clientPromise
        const db = client.db()
        users = db.collection('users')
    }catch(error){
        console.log(error)
    }
}

(async () => {
   await run()
})()

export async function getUsers() {
    try{
        if(!users) await run()
        const result = await users.find({}).toArray()
        return {users:result}
    }catch(error){
        return {error:"Failed to fetch users"}
    }
}