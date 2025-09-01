import { FaArchive } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { HiBookmark } from "react-icons/hi2";
import Image from "next/image";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-6">
        {/* Profile */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/download.png"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-800">Account</h2>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg font-medium text-gray-800">
            <FaArchive /> Orders
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg font-medium text-gray-800">
            <HiBookmark /> Saved Items
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg font-medium text-gray-800">
            <VscAccount /> Personal Info
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg font-medium text-gray-800">
            <MdPayment /> Payment Methods
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg font-medium text-gray-800">
            <CiLocationOn /> Addresses
          </button>
        </nav>

        <div className="mt-auto pt-6">
          <button className="flex items-center gap-2 text-sm text-gray-500">
            <FaRegQuestionCircle /> Help
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="py-3 px-4 text-gray-800">Order</th>
                <th className="py-3 px-4 text-gray-800">Date</th>
                <th className="py-3 px-4 text-gray-800">Status</th>
                <th className="py-3 px-4 text-gray-800">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-b">
                <td className="py-3 px-4">#123456</td>
                <td className="py-3 px-4 text-gray-500">May 15, 2024</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-md">Shipped</span>
                </td>
                <td className="py-3 px-4 text-gray-500">$120.00</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">#789012</td>
                <td className="py-3 px-4 text-gray-500">April 20, 2024</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-md">Delivered</span>
                </td>
                <td className="py-3 px-4 text-gray-500">$85.50</td>
              </tr>
              <tr>
                <td className="py-3 px-4">#345678</td>
                <td className="py-3 px-4 text-gray-500">March 10, 2024</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-md">Cancelled</span>
                </td>
                <td className="py-3 px-4 text-gray-500">$45.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

