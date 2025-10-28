import React from 'react'
import {
  FaChalkboardTeacher,
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardList,
  FaMoneyBillWave,
  FaBook,
  FaFootballBall,
  FaCalendarAlt,
  FaEnvelope,
  FaBullhorn,
  FaChartBar,
  FaUserFriends,
  FaWhatsapp,
  FaUserCog,
  FaCog,
  FaSignOutAlt,
  FaUniversity,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-[#FFFFFF] text-[#1E1E1E] border-r border-gray-300 w-70 shadow-lg h-full flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-extrabold text-[#6C63FF] text-center py-6 border-b">
          School ERP
        </h1>

        <div className="px-6 mt-6">
          <h1 className="text-xl font-semibold text-gray-600 mb-3">
            Main Menu
          </h1>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaTachometerAlt size={18} /> Dashboard
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaChalkboardTeacher size={18} /> Teachers
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaUserGraduate size={18} /> Students
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaClipboardList size={18} />
              Attendance
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaMoneyBillWave size={18} /> Payments
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaBook size={18} />
              Library
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaFootballBall size={18} />
              Sports
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaCalendarAlt size={18} />
              Events & competition
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaEnvelope size={18} />
              Message
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaBullhorn size={18} />
              Notice Board
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaUniversity size={18} />
              Finance
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaChartBar size={18} />
              Reports & Analytics
            </li>
          </ul>
        </div>
        <div className=" mt-6 px-6">
          <h1 className="text-xl font-semibold text-gray-600 mb-3">
            Communication
          </h1>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaUserFriends size={18} />
              Parent communication
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaWhatsapp size={18} />
              Whatsapp Notifications
            </li>
          </ul>
        </div>
        <div className="px-6 mt-6">
          <h1 className="text-xl font-semibold text-gray-600 mb-3">System </h1>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaUserCog size={18} />
              Profile
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaCog size={18} />
              Settings
            </li>
            <li className="flex items-center gap-4 pl-4 py-2 shadow-md rounded-xl border border-gray-200 text-[#6C63FF] hover:bg-[#F1EEFF] cursor-pointer hover:shadow-lg transition-all duration-300">
              <FaSignOutAlt size={18} />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
