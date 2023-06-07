import { getUsers } from "@/mongo/users";
import { NextResponse } from 'next/server';


export async function GET() {
    const {users} = await getUsers()
   try{
       return NextResponse.json({ users });
   }catch(error){
    return NextResponse.json({error})
   }
}