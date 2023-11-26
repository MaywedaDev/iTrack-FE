import { arrowDown, notifs, search } from "../assets/images/images";
import useLocalStorage from "../utils/useLocalstorage";

const Nav = () => {

    const user = useLocalStorage("user")


    return ( <div className="flex w-full px-8 py-5 border-b border-[#F7F7F7] bg-white">
        <div className="w-fit shrink-0 space-y-3">
            <h3 className="text-[18px] font-bold">Hello {user.firstName + " " + user.lastName}</h3>
            <span className="text-[12px] text-text-light">Manage your payments today!</span>
        </div>
        <div className="relative w-fit ml-12">
            <img src={search} alt="" className="absolute left-[16px] top-[calc((100%-19px)/2)]" />
            <input type="text" className="w-full max-w-[300px] outline-none border-none p-3 pl-[48px]" placeholder="Search (Ctrl+/)" />
        </div>
        <div className="flex gap-x-4 items-center ml-auto">
            <img src={notifs} alt="" />
            <div className="rounded-full grid place-content-center bg-[#BDBDBD] text-white text-[18px] shrink-0 w-[44px] h-[44px] uppercase">{user.firstName.charAt(0) + user.lastName.charAt(0)}</div>
            <div className="w-fit shrink-0">
                <h3 className="text-[18px] font-bold">{user.firstName + " " + user.lastName}</h3>
                <span className="text-[12px] text-text-light inline-block">Finnesse Stores</span>
            </div>
            <img src={arrowDown} alt="" />
        </div>
    </div> );
}
 
 
export default Nav;