"use client";
import { useState } from 'react';
import { IoSunny, IoNotifications } from "react-icons/io5";
import { MdOutlineInsights } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// Theme configuration object based on the image - NOW FOR LIGHT MODE
const lightThemes = {
  school: {
    '--primary-color': '#6C63FF',
    '--accent-color': '#A394FF',
    '--bg-color': '#FFFFFF',
    '--hover-color': '#F3F1FF',
    '--text-color': '#1E1E1E',
    '--logo-from': '#6C63FF',
    '--logo-to': '#A394FF',
    '--search-border': '#A394FF',
    '--search-hover-border': '#6C63FF',
    '--search-bg': '#F3F1FF',
    '--search-icon': '#6C63FF',
    '--theme-icon': '#6C63FF',
    '--nav-link': '#6C63FF',
    '--ai-bg-from': '#F3F1FF',
    '--ai-bg-to': '#FFFFFF',
    '--ai-text-from': '#6C63FF',
    '--ai-text-to': '#A394FF',
    '--ai-icon': '#6C63FF',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#6C63FF',
    '--dropdown-bg': '#FFFFFF',
    '--dropdown-hover': '#F3F1FF',
    '--dropdown-text': '#1E1E1E',
    '--ai-insights-border': '#9F9AF0',
    '--menu-bar': '#6C63FF'
  },
  gym: {
    '--primary-color': '#FF6B35',
    '--accent-color': '#FFC7B0',
    '--bg-color': '#FFFFFF',
    '--hover-color': '#FFF3EC',
    '--text-color': '#1E1E1E',
    '--logo-from': '#CA4E20',
    '--logo-to': '#E34E16',
    '--search-border': '#FFC7B0',
    '--search-hover-border': '#FF6B35',
    '--search-bg': '#FFF3EC',
    '--search-icon': '#FF6B35',
    '--theme-icon': '#FF6B35',
    '--nav-link': '#FF6B35',
    '--ai-bg-from': '#FFF3EC',
    '--ai-bg-to': '#FFFFFF',
    '--ai-text-from': '#FF6B35',
    '--ai-text-to': '#FFC7B0',
    '--ai-icon': '#FF6B35',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#CA4E20',
    '--dropdown-bg': '#FFFFFF',
    '--dropdown-hover': '#FFF3EC',
    '--dropdown-text': '#1E1E1E',
    '--ai-insights-border': '#ECB25A',
    '--menu-bar': '#E34E16'
  },
  sports: {
    '--primary-color': '#2ECC71',
    '--accent-color': '#A8E6CF',
    '--bg-color': '#FFFFFF',
    '--hover-color': '#EAFBF1',
    '--text-color': '#1E1E1E',
    '--logo-from': '#3AA50F',
    '--logo-to': '#307F11',
    '--search-border': '#30E29F',
    '--search-hover-border': '#1FA257',
    '--search-bg': '#EAFBF1',
    '--search-icon': '#2ECC71',
    '--theme-icon': '#2ECC71',
    '--nav-link': '#307F11',
    '--ai-bg-from': '#EAFBF1',
    '--ai-bg-to': '#FFFFFF',
    '--ai-text-from': '#307F11',
    '--ai-text-to': '#2ECC71',
    '--ai-icon': '#307F11',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#307F11',
    '--dropdown-bg': '#FFFFFF',
    '--dropdown-hover': '#EAFBF1',
    '--dropdown-text': '#1E1E1E',
    '--ai-insights-border': '#307F11',
    '--menu-bar': '#3AA50F'
  },
};

// --- NEW DARK THEMES ---
const darkThemes = {
  school: {
    '--primary-color': '#6C63FF',
    '--accent-color': '#A394FF',
    '--bg-color': '#1A202C', // Dark bg (e.g., gray-900)
    '--hover-color': '#2D3748', // Darker hover (e.g., gray-800)
    '--text-color': '#F7FAFC', // Light text (e.g., gray-100)
    '--logo-from': '#A394FF', // Lighter accent for visibility
    '--logo-to': '#6C63FF',
    '--search-border': '#4A5568', // Dark border (e.g., gray-700)
    '--search-hover-border': '#A394FF', // Accent on hover
    '--search-bg': '#2D3748', // Dark bg (e.g., gray-800)
    '--search-icon': '#A394FF', // Light accent
    '--theme-icon': '#A394FF', // Light accent
    '--nav-link': '#A394FF', // Light accent
    '--ai-bg-from': '#2D3748', // Dark bg
    '--ai-bg-to': '#1A202C', // Dark bg
    '--ai-text-from': '#A394FF',
    '--ai-text-to': '#6C63FF',
    '--ai-icon': '#A394FF',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#6C63FF',
    '--dropdown-bg': '#2D3748', // Dark dropdown
    '--dropdown-hover': '#4A5568', // Darker hover
    '--dropdown-text': '#F7FAFC', // Light text
    '--ai-insights-border': '#6C63FF',
    '--menu-bar': '#6C63FF'
  },
  gym: {
    '--primary-color': '#FF6B35',
    '--accent-color': '#FFC7B0',
    '--bg-color': '#1A202C',
    '--hover-color': '#2D3748',
    '--text-color': '#F7FAFC',
    '--logo-from': '#FFC7B0', // Lighter accent
    '--logo-to': '#FF6B35',
    '--search-border': '#4A5568',
    '--search-hover-border': '#FFC7B0',
    '--search-bg': '#2D3748',
    '--search-icon': '#FFC7B0',
    '--theme-icon': '#FFC7B0',
    '--nav-link': '#FFC7B0',
    '--ai-bg-from': '#2D3748',
    '--ai-bg-to': '#1A202C',
    '--ai-text-from': '#FFC7B0',
    '--ai-text-to': '#FF6B35',
    '--ai-icon': '#FFC7B0',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#CA4E20', // Darker accent from light theme
    '--dropdown-bg': '#2D3748',
    '--dropdown-hover': '#4A5568',
    '--dropdown-text': '#F7FAFC',
    '--ai-insights-border': '#ECB25A', // From light theme
    '--menu-bar': '#FFC7B0'
  },
  sports: {
    '--primary-color': '#2ECC71',
    '--accent-color': '#A8E6CF',
    '--bg-color': '#1A202C',
    '--hover-color': '#2D3748',
    '--text-color': '#F7FAFC',
    '--logo-from': '#A8E6CF', // Lighter accent
    '--logo-to': '#2ECC71',
    '--search-border': '#4A5568',
    '--search-hover-border': '#A8E6CF',
    '--search-bg': '#2D3748',
    '--search-icon': '#A8E6CF',
    '--theme-icon': '#A8E6CF',
    '--nav-link': '#A8E6CF',
    '--ai-bg-from': '#2D3748',
    '--ai-bg-to': '#1A202C',
    '--ai-text-from': '#A8E6CF',
    '--ai-text-to': '#2ECC71',
    '--ai-icon': '#A8E6CF',
    '--notification-icon': '#FFC107',
    '--avatar-bg': '#307F11', // Darker accent from light theme
    '--dropdown-bg': '#2D3748',
    '--dropdown-hover': '#4A5568',
    '--dropdown-text': '#F7FAFC',
    '--ai-insights-border': '#307F11', // From light theme
    '--menu-bar': '#A8E6CF'
  },
};


export default function Header({ theme = 'sports' }) {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleThemeMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Get the style object for the current theme
  const themeStyles = isDarkMode ? darkThemes[theme] : lightThemes[theme];
  const currentThemeStyles = themeStyles || (isDarkMode ? darkThemes.school : lightThemes.school);


  return (
    <>
      <nav
        className="w-full bg-[var(--bg-color)] shadow-md fixed top-0 left-0 z-50 flex px-[4%] max-xl:px-[6%] max-sm:px-[3%]"
        style={currentThemeStyles} // Apply theme variables here
      >
        <div className=" w-full ">
          <div className="flex justify-between h-16 items-center ">

            {/* LOGO */}
            <div className=" flex items-center space-x-2 py-3 h-[90%]">
              <img src="/virtualSpaceLogobgremove.png" alt="SmartERP" className="w-full h-full " />
              <a href="" className="text-2xl max-sm:text-lg font-bold font-sans bg-gradient-to-r from-[var(--logo-from)] to-[var(--logo-to)] bg-clip-text text-transparent ">NexusHub</a>
            </div>

            {/*Center Actions SEARCH BAR */}
            <div className=" flex items-center space-x-2 flex-1 justify-evenly max-md:justify-end mr-10 max-sm:mr-4">
              <div className="max-md:hidden flex space-x-2 ">
                <div className=" max-lg:max-w-[210px] flex items-center border-2 border-[var(--search-border)] hover:border-[var(--search-hover-border)] active:border-[var(--search-hover-border)] bg-[var(--search-bg)] rounded-lg px-3 max-lg:py-1 py-1.5 ">
                  <svg className="w-6 h-6 text-[var(--search-icon)] mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" /></svg>
                  <input
                    type="text"
                    placeholder="Search Modules, Members ..."
                    className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500 text-[var(--text-color)]"
                  />
                </div>
                {/* THEME TOGGLE */}
                <div className="max-lg:hidden flex justify-center items-center ">
                  {isDarkMode ? (
                    <IoSunny onClick={toggleThemeMode} className="m-auto opacity-65 hover:opacity-100 hover:cursor-pointer text-2xl transition duration-200 text-[var(--theme-icon)] " />
                  ) : (
                    <FaMoon onClick={toggleThemeMode} className="m-auto opacity-65 hover:opacity-100 hover:cursor-pointer text-2xl transition duration-200 text-[var(--theme-icon)] " />
                  )}
                </div>
              </div>
              <div className="flex space-x-12 items-center ">
                <div className="max-lg:hidden flex items-center text-lg text-[var(--nav-link)] space-x-[20%] drop-shadow-xl">
                  <div><a href="">Home</a></div>
                  <div><a href="">Profile</a></div>
                </div>

                {/* AI INSIGHTS BUTTON */}
                <div className=" flex items-center border-2 border-[var(--ai-insights-border)]  hover:cursor-pointer rounded-md text-lg h-8 space-x-2 px-2.5 font-sans font-semibold bg-gradient-to-r from-[var(--ai-bg-from)] to-[var(--ai-bg-to)]">
                  <p className="max-sm:hidden bg-gradient-to-r from-[var(--ai-text-from)] to-[var(--ai-text-to)] bg-clip-text text-transparent drop-shadow-lg ">AI Insights</p>
                  <MdOutlineInsights className="text-2xl text-[var(--ai-icon)]" />
                </div>
              </div>
            </div>


            {/* RIGHT SIDE ACTIONS */}
            <div className="flex items-center space-x-4 h-full">

              {/* NOTIFICATIONS */}
              {/* Notification color is kept amber as it's a standard warning color */}
              <IoNotifications className="max-sm:hidden text-[25px] text-amber-600" />

              {/* PROFILE DROPDOWN */}
              <div className="relative group ">
                <div className=" bg-[var(--avatar-bg)] text-white text-md px-2 py-1.5 rounded-full max-lg:mr-5 max-sm:mr-1 ">SB</div>
                <div className="absolute right-0 mt-2 w-40 bg-[var(--dropdown-bg)] shadow-lg rounded-lg opacity-0 group-active:opacity-100 transition p-2 z-10">
                  <p className="text-sm text-[var(--dropdown-text)] px-2 py-1 hover:bg-[var(--dropdown-hover)] rounded">Profile</p>
                  <p className="text-sm text-[var(--dropdown-text)] px-2 py-1 hover:bg-[var(--dropdown-hover)] rounded">Settings</p>
                  <p className="text-sm text-red-600 px-2 py-1 hover:bg-[var(--dropdown-hover)] rounded">Logout</p>
                </div>
              </div>

            </div>

          </div>
        </div>
        {/* Menubar */}
        <div className='max-sm:hidden flex items-center'>
          <GiHamburgerMenu className="text-[25px]  text-[var(--menu-bar)] absolute right-4 ml-4  " />
        </div>
      </nav>
    </>
  )
}

