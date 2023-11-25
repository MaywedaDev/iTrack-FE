
import { Card, CardContent, CardMedia, Tab, Tabs } from '@mui/material';
import { scribble, upTrend, userOrange } from '../assets/images/images';
// import  from '@mui/material';
// import  from '@mui/material';
import { useState } from 'react';
import TabPanel from "../components/tabpanel"

const Home = () => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



    return ( <>
              <div className="grid p-4 grid-cols-3 gap-4">
                <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                  <CardMedia 
                  sx={{height: "180px"}}
                  image={scribble}
                  />
                  <CardContent sx={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                    <h3 className="text-[24px] font-bold">Welcome!</h3>
                    <p className="font-light text-[16px] text-[#32475C99] mb-10">iTrack helps you manage all customer payments related to your small business! Send Invoices and debt reminders while avoiding misleading double entries!</p>
                    <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white mt-auto ml-auto">Create New</button>
                  </CardContent>
                </Card>
                <div className="col-span-2 space-y-4">
                  <div className="flex gap-4">
                    <div className="py-6 px-3 rounded-lg bg-white space-y-4 w-full">
                      <span className="text-[14px] text-light text-[#32475C99]">Total Customers</span>
                      <h3 className="text-bold text-[24px] text-[#32475CDE]">0</h3>
                      <div className="flex text-success itesm-center"><img src={upTrend} alt="" /><span>0%</span></div>
                    </div>
                    <div className="py-6 px-3 rounded-lg bg-white space-y-4 w-full">
                      <span className="text-[14px] text-light text-[#32475C99]">Total Payment</span>
                      <h3 className="text-bold text-[24px] text-[#32475CDE]">0</h3>
                      <div className="flex text-success itesm-center"><img src={upTrend} alt="" /><span>0%</span></div>
                    </div>
                    <div className="py-6 px-3 rounded-lg bg-white space-y-4 w-full">
                      <span className="text-[14px] text-light text-[#32475C99]">Total active invoices</span>
                      <h3 className="text-bold text-[24px] text-[#32475CDE]">0</h3>
                      <div className="flex text-success itesm-center"><img src={upTrend} alt="" /><span>0%</span></div>
                    </div>
                    <div className="py-6 px-3 rounded-lg bg-white space-y-4 w-full">
                      <span className="text-[14px] text-light text-[#32475C99]">Total Debt</span>
                      <h3 className="text-bold text-[24px] text-success">₦ 0</h3>
                      <div className="flex text-success itesm-center"><img src={upTrend} alt="" /><span>0%</span></div>
                    </div>
                  </div>
                  <h3 className='text-[#32475CDE] text-bold text-[20px]'>What would you like to get started with?</h3>
                  <div className="flex gap-x-4">
                    <div className="w-full bg-white rounded-lg px-3 py-6">
                      <img src={userOrange} alt="" />
                      <div className="mt-12">
                        <h4 className='font-bold text-[18px]'>New Customer</h4>
                        <div className="flex gap-2">
                          <p className='text-[16px] text-[#656673] font-light'>Quickly create profiles for your customers!</p>
                          <button className=' shrink-0 w-[40px] h-[40px] bg-primary rounded-full text-white text-[28px]'>+</button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-lg px-3 py-6">
                      <img src={userOrange} alt="" />
                      <div className="mt-12">
                        <h4 className='font-bold text-[18px]'>Just made a sale?</h4>
                        <div className="flex gap-2">
                          <p className='text-[16px] text-[#656673] font-light'>Quickly record transactions!</p>
                          <button className=' shrink-0 w-[40px] h-[40px] bg-primary rounded-full text-white text-[28px]'>+</button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-lg px-3 py-6">
                      <img src={userOrange} alt="" />
                      <div className="mt-12">
                        <h4 className='font-bold text-[18px]'>Get Paid</h4>
                        <div className="flex gap-2">
                          <p className='text-[16px] text-[#656673] font-light'>Send an invoice to a owing customer!</p>
                          <button className=' shrink-0 w-[40px] h-[40px] bg-primary rounded-full text-white text-[28px]'>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <Tabs variant='fullWidth' value={value} onChange={handleChange}>
                    <Tab label="Invoices" {...a11yProps(0)}/>
                    <Tab label="Transactions" {...a11yProps(1)}/>
                    <Tab label="Debts" {...a11yProps(2)}/>
                    <Tab label="Payments" {...a11yProps(3)}/>
                  </Tabs>

                  <div className="mt-4 w-full">
                    <TabPanel index={0} value={value}>
                      <div className="rounded p-6 bg-white w-full min-h-[300px] flex flex-col">
                        <div className="space-y-4 flex flex-col items-center my-auto mx-auto">
                          <h4 className='text-[18px] font-bold'>No invoices yet</h4>
                          <p className='text-lighter text-[16px] font-light'>You’ve not created an invoice yet!</p>
                          <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white mt-auto">Create Invoice</button>
                        </div>
                      </div>
                    </TabPanel> 
                    <TabPanel index={1} value={value}>
                      <div className="rounded p-6 bg-white w-full min-h-[300px] flex flex-col">
                        <div className="space-y-4 flex flex-col items-center my-auto mx-auto">
                          <h4 className='text-[18px] font-bold'>No invoices yet</h4>
                          <p className='text-lighter text-[16px] font-light'>You’ve not created an invoice yet!</p>
                          <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white mt-auto">Create Invoice</button>
                        </div>
                      </div>
                    </TabPanel> 
                    <TabPanel index={2} value={value}>
                      <div className="rounded p-6 bg-white w-full min-h-[300px] flex flex-col">
                        <div className="space-y-4 flex flex-col items-center my-auto mx-auto">
                          <h4 className='text-[18px] font-bold'>No invoices yet</h4>
                          <p className='text-lighter text-[16px] font-light'>You’ve not created an invoice yet!</p>
                          <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white mt-auto">Create Invoice</button>
                        </div>
                      </div>
                    </TabPanel> 
                    <TabPanel index={3} value={value}>
                      <div className="rounded p-6 bg-white w-full min-h-[300px] flex flex-col">
                        <div className="space-y-4 flex flex-col items-center my-auto mx-auto">
                          <h4 className='text-[18px] font-bold'>No invoices yet</h4>
                          <p className='text-lighter text-[16px] font-light'>You’ve not created an invoice yet!</p>
                          <button className="px-5 w-fit py-2 bg-primary rounded-lg text-white mt-auto">Create Invoice</button>
                        </div>
                      </div>
                    </TabPanel> 
                  </div>
                </div>
              </div>
       </> );
}



 
export default Home;