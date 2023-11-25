import { Card, TextField, Select, MenuItem, CardHeader } from "@mui/material";

const Settings = () => {

    const inputStyles = {size: "small", color: "primary"}
    return ( <>
        <div className="px-4 space-y-4">
            <div className="flex gap-x-6 mt-4">
                <button className="px-5 w-fit py-3 bg-primary rounded-lg text-white uppercase font-medium text-[16px]">Account</button>
                <button className="px-5 w-fit py-3 rounded-lg text-lighter uppercase font-medium text-[16px]">Security</button>
                <button className="px-5 w-fit py-3 rounded-lg text-lighter uppercase font-medium text-[16px]">Notifications</button>
            </div>
            <Card sx={{p: 3}}>
                <div className="flex gap-3 items-center">
                    <div className="grid w-[140px] h-[140px] bg-[#BDBDBD] text-white text-[18px] rounded-lg place-content-center">SM</div>
                    <div className="w-fit space-y-3">
                        <div className="flex gap-x-4">
                            <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white">Upload new photo</button>
                            <button className="px-5 w-fit py-2 border border-[#FF4D4980] rounded-lg text-[#DC2626]">RESET</button>
                        </div>
                        <p className="text-[12px] text-lighter font-light">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
                <div className="grid mt-7 grid-cols-2 gap-4">
                    <TextField {...inputStyles} label="First name" value="John"/>
                    <TextField {...inputStyles} label="Last name" value="Doe"/>
                    <TextField {...inputStyles} label="Email" value="john.doe@gmail.com"/>
                    <TextField {...inputStyles} label="Business name" value="ThemeSelection"/>
                    <TextField {...inputStyles} label="Phone number" value="+1 (837) 546-7238"/>
                    <TextField {...inputStyles} label="Address" value="123 Main St, New York, NY 10001 "/>
                    <TextField {...inputStyles} label="State" value="New York"/>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="usa"
                        label="Country"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="usa">USA</MenuItem>
                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="usd"
                        label="Currency"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="usd">USD</MenuItem>
                    </Select>
                </div>
                <div className="mt-7 flex gap-4">
                    <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white">Save changes</button>
                    <button className="px-5 w-fit py-2 border border-[#FF4D4980] rounded-lg text-[#DC2626]">Cancel</button>
                </div>
            </Card>
            <Card sx={{p: 3}}>
                <CardHeader title="Delete account"/>
                <div className="my-5 flex gap-2 items-center">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="inline-block text-[14px] text-lighter">I confirm my account deactivation</label>
                </div>
                <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white">Deactivate account</button>
            </Card>
        </div>
    </> );
}
 
export default Settings;