import { AiFillAlert } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { IoSunny, IoNotifications } from "react-icons/io5";
import { MdOutlineInsights } from "react-icons/md";
export default function Header() {
  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 flex px-[4%]">
        <div className=" w-full ">
          <div className="flex  justify-between h-16 items-center ">

            {/* LOGO */}
            <div className=" flex items-center space-x-2 py-3 h-[90%]">
              <img src="/virtualSpaceLogobgremove.png" alt="SmartERP" className="w-full h-full " />
              <a href="" className="text-2xl font-bold font-sans bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">NexusHub</a>
            </div>

            {/*Center Actions SEARCH BAR */}
            <div className=" flex items-center space-x-2 flex-1 justify-evenly max-md:justify-end mr-10">
              <div className="max-md:hidden flex space-x-2 ">
                <div className=" max-lg:max-w-[210px] flex items-center border-2 border-indigo-300 hover:border-blue-500 active:border-blue-500 bg-blue-50 rounded-lg px-3 max-lg:py-1 py-1.5 ">
                  <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" /></svg>
                  <input
                    type="text"
                    placeholder="Search Modules, Members ..."
                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500 "
                  />
                </div>
                <div className="max-lg:hidden flex justify-center items-center ">
                  <IoSunny className="m-auto opacity-65 hover:opacity-100 hover:cursor-pointer text-2xl transition duration-200  text-indigo-700 " />
                </div>
              </div>
              <div className="flex space-x-12  items-center ">
                <div className="max-lg:hidden flex items-center font-semibold text-lg text-indigo-600 space-x-[20%] drop-shadow-xl">
                  <div><a href="">Home</a></div>
                  <div><a href="">Profile</a></div>
                </div>
                <div className=" flex items-center border hover:cursor-pointer rounded-sm text-lg h-8 space-x-2 px-2.5 font-sans font-semibold text-blue-700 bg-linear-to-r from-purple-200 to-pink-200">
                  <p className=" bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg ">AI Insights</p>
                  <MdOutlineInsights className="text-2xl " />
                </div>
              </div>
            </div>


            {/* RIGHT SIDE ACTIONS */}
            <div className="flex items-center space-x-4 h-full">

              {/* AI INSIGHTS BUTTON */}


              {/* NOTIFICATIONS */}
              <IoNotifications className="text-[25px] text-amber-600" />

              {/* PROFILE DROPDOWN */}
              <div className="relative group ">
                <div className="bg-pink-600 text-white text-md px-2 py-1.5 rounded-full">SB</div>
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition p-2">
                  <p className="text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">Profile</p>
                  <p className="text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 rounded">Settings</p>
                  <p className="text-sm text-red-600 px-2 py-1 hover:bg-gray-100 rounded">Logout</p>
                </div>
              </div>

              {/* THEME TOGGLE */}
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}



































