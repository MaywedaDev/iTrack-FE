import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import { Card, CardContent, CardMedia } from '@mui/material';
import { scribble, upTrend, userOrange } from '../assets/images/images';

const Home = () => {
    return ( <>
        <div className='min-h-screen w-full flex bg-body'>
          <Sidebar />
            <div className="w-full ml-[260px] min-h-screen">
            <Nav />
            <div className="grid p-4 grid-cols-3 gap-4">
              <div>
                <Card>
                  <CardMedia 
                  sx={{height: "180px"}}
                  image={scribble}
                  />
                  <CardContent>
                    <h3 className="text-[24px] font-bold">Welcome!</h3>
                    <p className="font-light text-[16px] text-[#32475C99] mb-10">iTrack helps you manage all customer payments related to your small business! Send Invoices and debt reminders while avoiding misleading double entries!</p>
                    <button className="px-5 py-2 bg-primary rounded-lg text-white ml-auto">Create New</button>
                  </CardContent>
                </Card>
              </div>
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
                  <div className="w-full bg-white rounded-lg px-2 py-6">
                    <img src={userOrange} alt="" />
                    <div className="mt-12">
                      <h4 className='font-bold text-[18px]'>New Customer</h4>
                      <div className="flex gap-2">
                        <p className='text-[16px] text-[#656673] text-light'>Quickly create profiles for your customers!</p>
                        <button className='w-[40px] h-[40px] bg-primary rounded-full'>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-lg px-2 py-6">
                    <img src={userOrange} alt="" />
                    <div className="mt-12">
                      <h4 className='font-bold text-[18px]'>New Customer</h4>
                      <div className="flex gap-2">
                        <p className='text-[16px] text-[#656673] text-light'>Quickly create profiles for your customers!</p>
                        <button className='w-[40px] h-[40px] bg-primary rounded-full'>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-lg px-2 py-6">
                    <img src={userOrange} alt="" />
                    <div className="mt-12">
                      <h4 className='font-bold text-[18px]'>New Customer</h4>
                      <div className="flex gap-2">
                        <p className='text-[16px] text-[#656673] text-light'>Quickly create profiles for your customers!</p>
                        <button className='w-[40px] h-[40px] bg-primary rounded-full'>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-lg px-3 py-6">
                    <img src={userOrange} alt="" />
                    <div className="mt-12">
                      <h4 className='font-bold text-[18px]'>New Customer</h4>
                      <div className="flex gap-2">
                        <p className='text-[16px] text-[#656673] font-light'>Quickly create profiles for your customers!</p>
                        <button className=' shrink-0 w-[40px] h-[40px] bg-primary rounded-full'>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
       </> );
}
 
export default Home;