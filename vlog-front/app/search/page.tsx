import Navbar from "@/components/Navbar/Navbar"
import Search from "@/components/Search/Search"

export default function SearchApp() {
    return (
        <>
            <Navbar />
            <main className="w-3/4 mx-auto p-2">
                <Search />
            </main>
        </>)
}