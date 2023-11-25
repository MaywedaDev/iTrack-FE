import { logoBlue, home, userOctagon, transaction, crypto, create, gear } from "../assets/images/images";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {

    const location = useLocation()

    const shadow = '0px 1px 4px 2px #32475C05, 0px 2px 6px 1px #32475C0A, 0px 1px 6px 2px #32475C0F' 

    return ( <div style={{boxShadow: shadow}} className="w-[260px] fixed top-0 bottom-0 z-10 bg-white">
        <div className="w-full px-9 py-6 flex items-center gap-x-2 border-b-[2px] border-[#F7F7F7]">
            <img src={logoBlue} alt="" />
            <h2 className="text-[#565560] font-bold text-[20px]">iTrack</h2>
        </div>
        <ul className="w-full px-6 py-4 space-y-2">
            <Link to="/">
                <li className={`flex items-center ${location.pathname == "/" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3`}><img src={home} alt="" /><span className="text-[16px]">Dashboard</span></li>
            </Link>
            <Link to="/customers">
                <li className={`flex items-center ${location.pathname == "/customers" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3 gap-x-2`}><img src={userOctagon} alt="" /><span className="text-[16px]">Customers</span></li>
            </Link>
            <Link to="/transactions">
                <li className={`flex items-center ${location.pathname == "/transactions" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3 gap-x-2`}><img src={crypto} alt="" /><span className="text-[16px]">Transactions</span></li>
            </Link>
            <Link to='/invoices'>
                <li className={`flex items-center ${location.pathname == "/invoices" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3 gap-x-2`}><img src={transaction} alt="" /><span className="text-[16px]">Invoices</span></li>
            </Link>
            <Link to='/create-new'>
                <li className={`flex items-center ${location.pathname == "/create-new" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3 gap-x-2`}><img src={create} alt="" /><span className="text-[16px]">Create New</span></li>
            </Link>
        </ul>
        <ul className="w-full px-6 py-4 space-y-2">
            <h4 className="uppercase text-[12px] font-bold text-[#32475C61] px-5">Settings</h4>
            <Link to='/settings'>  
                <li className={`flex items-center ${location.pathname == "/settings" ? "text-[#8347E7] bg-[#F5EDFF]" : "text-[#565560]"} rounded-lg px-5 py-3 gap-x-2`}><img src={gear} alt="" /><span>Manage Settings</span></li>
            </Link>
        </ul>
    </div> );
}



 
export default Sidebar;