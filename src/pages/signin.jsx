import { man1,arrowright, alert1, shapes } from "../assets/images/images";
import { TextField } from "@mui/material";




const inputStyles = {size: "small", color: "primary"}

const Signin = () => {
    return ( 
        <div className="w-full flex">
        <div className="w-full p-16 flex flex-col min-h-screen">
            <a className="inline-flex gap-x-2 items-center" href="/"><img src={arrowright} alt="" /><span className="text-[16px] text-[#2B2A30]">Go back</span></a>
            <div className="mt-24 my-auto w-full space-y-6">
                <h3 className="text-[#080808] text-[28px] font-bold">Welcome back!</h3>
                <p className="text-[#292E32] font-light text-[16px]">Sign in to continue to your account</p>
                <div className="grid grid-cols-2 gap-5">
                    <TextField {...inputStyles} className="col-span-2" label="Your name"/>
                    <TextField {...inputStyles} type="password" className="col-span-2" label="Enter password"/>
                </div>
                <div className="flex items-center gap-x-2">
                    <input type="checkbox" name="" id="policy" />
                    <label className="text-[16px] text-[#50555E]" htmlFor="policy">Remain signed in</label>
                </div>
                <button className="text-white w-full bg-primary p-3 rounded">Continue</button>
            </div>
        </div>
        <div className="w-[500px] bg-[#ECE3FE] py-16 px-12 flex flex-col min-h-screen relative">
            <a className="inline-flex gap-x-2 items-center ml-auto text-primary underline" href="/">Sign in</a>
            <div className="my-auto mt-16 relative z-20">
                <img className="w-full object-scale-down" src={man1} alt="" />
                <img src={alert1} alt="" className="absolute -right-[48px] top-[50%]" />
                <div className="mt-5">
                    <h3 className="text-center font-bold text-[24px]">Seamless Payments!</h3>
                    <p className="text-[16px] text-[#2B2A30] font-light text-center">iTrack helps you manage all customer payments related to your small business! Send Invoices and debt reminders while avoiding misleading double entries!</p>
                </div>
            </div>
            <img className="absolute left-0 bottom-0" src={shapes} alt="" />
            <img className="absolute right-0 top-20" src={shapes} alt="" />
        </div>
    </div>
     );
}
 
export default Signin;