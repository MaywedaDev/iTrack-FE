import { logoBlue, home, userOctagon, transaction, crypto, create, gear } from "../assets/images/images";

const Sidebar = () => {

    const shadow = '0px 1px 4px 2px #32475C05, 0px 2px 6px 1px #32475C0A, 0px 1px 6px 2px #32475C0F' 

    return ( <div style={{boxShadow: shadow}} className="w-[260px] fixed top-0 bottom-0 z-10 bg-white">
        <div className="w-full px-9 py-6 flex items-center gap-x-1 border-b-[2px] border-[#F7F7F7]">
            <img src={logoBlue} alt="" />
            <h2 className="text-[#565560] font-bold text-[20px]">iTrack</h2>
        </div>
        <ul className="w-full px-6 py-4 space-y-2">
            <li className="flex items-center text-[#8347E7] bg-[#F5EDFF] rounded-lg px-5 py-3"><img src={home} alt="" /><span>Dashboard</span></li>
            <li className="flex items-center text-[#565560] gap-x-2 px-5 py-3"><img src={userOctagon} alt="" /><span>Customers</span></li>
            <li className="flex items-center text-[#565560] gap-x-2 px-5 py-3"><img src={crypto} alt="" /><span>Transactions</span></li>
            <li className="flex items-center text-[#565560] gap-x-2 px-5 py-3"><img src={transaction} alt="" /><span>Invoices</span></li>
            <li className="flex items-center text-[#565560] gap-x-2 px-5 py-3"><img src={create} alt="" /><span>Create New</span></li>
        </ul>
        <ul className="w-full px-6 py-4 space-y-2">
            <h4 className="uppercase text-[12px] font-bold text-[#32475C61] px-5">Settings</h4>
            <li className="flex items-center text-[#565560] gap-x-2 px-5 py-3"><img src={gear} alt="" /><span>Manage Settings</span></li>
        </ul>
    </div> );
}



 
export default Sidebar;