import Admin from "@/components/Admin/Admin";
import { getAllAdmin } from "./service/admin.service";


export default async function AdminApp(){
    const data = await getAllAdmin()
    
    return(
        <>
            <main>
                <Admin data={data}/>
            </main>
        </>)
}