import { alert1, arrowright, google, shapes, woman1 } from "../assets/images/images";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const inputStyles = {color: "primary"}
const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate()

    const [error, setError] = useState({
        status: null,
        message: null
    })
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }
    
    const {isLoading, mutate: handleLogin} = useMutation(async () => {
        return await axios.post("https://itrack-server.vercel.app/itrack/create-user", {
            ...fields
        })
    },{
        onSuccess: (res) => {
            console.log(res)
            if(res.status == 203){
                setError({message: res.data.message, status:true})
            }
            else{
                setError({message: null, status: null})
                setTimeout(() => navigate("/sign-in"), 1500)
                setSuccess(true)
            }
        },
        onError: (err) => {
            console.log(err)
            setError({message: err.message, status:true})
        }
    })

    const [fields, setFields] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })

    const handleChange = event => {
        setFields({
          ...fields,
          [event.target.name]: event.target.value,
        });
      };


    return ( 
    <div className="w-full flex">
        <div className="w-full p-16 flex flex-col min-h-screen">
            <a className="inline-flex gap-x-2 items-center" href="/"><img src={arrowright} alt="" /><span className="text-[16px] text-[#2B2A30]">Go back</span></a>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mt-24 my-auto w-full space-y-6">
                    <h3 className="text-[#080808] text-[28px] font-bold">Let’s get started!</h3>
                    <div className="grid grid-cols-2 gap-5">
                        <TextField name="firstName" {...inputStyles} onChange={handleChange} value={fields.firstName} label="First name"/>
                        <TextField name="lastName" {...inputStyles} onChange={handleChange} value={fields.lastName} label="Last name"/>
                        <TextField name="email" {...inputStyles} onChange={handleChange} value={fields.email} className="col-span-2" label="Your Email"/>
                        <TextField name="password" InputProps={{endAdornment: <InputAdornment><IconButton onClick={handleClickShowPassword}>{showPassword ? <Visibility />: <VisibilityOff />}</IconButton></InputAdornment>}} {...inputStyles} onChange={handleChange} value={fields.password} type={showPassword ? "text" : "password"} className="col-span-2" label="Create a password"/>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input type="checkbox" name="" id="policy" />
                        <label className="text-[16px] text-[#50555E]" htmlFor="policy">I agree to iTrack’s <span className="text-primary">Privacy Policy</span>, and <span className="text-primary">Terms and conditions</span>.</label>
                    </div>
                    <button disabled={isLoading} className="text-white w-full bg-primary p-3 rounded">Get started</button>
                    {error.status && <p className="text-red-700 text-[16px]">{error.message}</p>}
                    {success && <p className="text-green-700 text-[16px]">User succesfully created</p>}
                    {/* <p className="text-center text-[18px]">Or</p>
                    <div className="mx-auto flex items-center gap-x-2 w-fit"><img src={google} alt="" /><span className="inline-block text-[16px]">Login with your Google Account</span></div> */}
                </div>
            </form>
        </div>
        <div className="w-[500px] bg-[#ECE3FE] py-16 px-12 flex flex-col min-h-screen relative">
            <Link className="inline-flex gap-x-2 items-center ml-auto text-primary underline" to="/sign-in">Sign in</Link>
            <div className="my-auto mt-16 relative z-20">
                <img className="w-full object-scale-down" src={woman1} alt="" />
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
 
export default Signup;