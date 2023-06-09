import { getAllUsers } from "@/mongo/crud";
import { NextResponse } from 'next/server';


export async function GET() {
    const {users} = await getAllUsers()
   try{
    return NextResponse.json({ users });
   }catch(error){
    return NextResponse.json({error})
   }
}