import { Card,TextField, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";


const CreateCustomer = () => {

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
        return await axios.post("https://itrack-server.vercel.app/itrack/create-customer", {
            ...fields
        })
    },{
        onSuccess: (res) => {
            console.log(res)
            useLocalStorage("user", res.data.message)
            setError({message: null, status: null})
                    setTimeout(() => navigate("/customers"), 1500)
                    setSuccess(true)
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
        lastName: "",
        phoneNo: "",
        business: "",
        address: "",
        state: "",
        country: "Nigeria",
        currency: "NGN",
        code: ""
    })

    const handleChange = event => {
        setFields({
          ...fields,
          [event.target.name]: event.target.value,
        });
      };

    const inputStyles = {size: "small", color: "primary"}
    return ( <>
        <Card sx={{p: 3}}>
                <div className="flex gap-3 items-center">
                    <div className="grid w-[140px] h-[140px] bg-[#BDBDBD] text-white text-[18px] rounded-full place-content-center">SM</div>
                    <div className="w-fit space-y-3">
                        <div className="flex gap-x-4">
                            <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white">Upload new photo</button>
                        </div>
                        <p className="text-[12px] text-lighter font-light">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                <div className="grid mt-7 grid-cols-2 gap-4">
                    <TextField {...inputStyles} onChange={handleChange} name="firstName" value={fields.firstName} label="First name" />
                    <TextField {...inputStyles} onChange={handleChange} name="lastName" label="Last name" value={fields.lastName}/>
                    <TextField {...inputStyles} onChange={handleChange} name="email" label="Email" value={fields.email}/>
                    <TextField {...inputStyles} onChange={handleChange} name="business" label="Business name" value={fields.business}/>
                    <TextField {...inputStyles} onChange={handleChange} name="phoneNo" label="Phone number" value={fields.phoneNo}/>
                    <TextField {...inputStyles} onChange={handleChange} name="address" label="Address" value={fields.address}/>
                    <TextField {...inputStyles} onChange={handleChange} name="state" label="State" value={fields.state}/>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="nigeria"
                        label="Country"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="nigeria">Nigeria</MenuItem>
                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="usd"
                        label="Currency"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="usd">NGN</MenuItem>
                    </Select>
                    <TextField {...inputStyles} onChange={handleChange} name="code" label="Zip Code" value={fields.code}/>
                    <TextField {...inputStyles} label="Short note about customer (Optional)" value=""/>
                </div>
                <div className="mt-7 flex gap-4">
                    <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white">Save</button>
                    <button className="px-5 w-fit py-2 border border-[#FF4D4980] rounded-lg text-[#DC2626]">Cancel</button>
                </div>
                </form>
                
            </Card>
    </> );
}
 
export default CreateCustomer;