import { Menu, Search } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <navbar className='bg-[#212731] p-4 flex items-center sm:justify-center max-sm:justify-between w-full gap-5  text-white sticky top-0 z-10 shadow-xl'>
                <div className="flex  items-center bg-white justify-center rounded px-1 gap-2 max-sm:hidden">
                    <Search color="black" />
                    <input type="text" placeholder="search..." className="text-black p-1 focus:outline-none" />
                </div>

                <Search className="sm:hidden" />
                <div className="sm:hidden" >logo</div>

                <div className="max-sm:hidden flex items-center justify-center  gap-5">
                    <span>Categories</span>
                    <span>Website Builders</span>
                    <span>Today's deals</span>
                </div>
                <Menu className="sm:hidden" />
            </navbar>

        </>
    )
}
