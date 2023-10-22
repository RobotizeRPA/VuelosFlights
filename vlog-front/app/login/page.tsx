'use client'
import Login from "@/components/Login/Login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginApp(){
    const {data: session, status} = useSession()
    const router = useRouter()

    if(status === 'loading'){
        return
    }
    else if(status === 'authenticated'){
        router.push('/admin')
    }else{

        return(
            <>
            <main className='py-20 flex justify-center items-center'>
                <Login/>
            </main>
        </>)
        }
}