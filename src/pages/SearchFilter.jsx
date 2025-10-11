import React, { useState } from "react";
import data from "../assets/data";
const SearchFilter = () => {
  const [search, setSearch] = useState("");

  const filterData = data.filter((item) => {
    const searchTerm = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      item.rollNo.toString().includes(searchTerm) ||
      item.regNo.toString().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm)
    );
  });
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center rounded-b-lg shadow-md">
        <input
          type="text"
          placeholder="Search by name, roll no, or address..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-1/2 px-4 py-2 text-gray-800 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder-gray-500"
        />
      </div>

      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Roll No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Reg. No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Address
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-6 py-3">Azlan</td>
            <td className="px-6 py-3">121</td>
            <td className="px-6 py-3">30054</td>
            <td className="px-6 py-3">Kasia</td>
          </tr>
          <tr className="hover:bg-gray-100 transition-colors">
            <td className="px-6 py-3">Azlan</td>
            <td className="px-6 py-3">121</td>
            <td className="px-6 py-3">30054</td>
            <td className="px-6 py-3">Kasia</td>
          </tr> */}
          {/* {data.map((item, index) => (
            <tr className="hover:bg-gray-100 transition-colors" key={index}>
              <td className="px-6 py-3">{item.name}</td>
              <td className="px-6 py-3">{item.rollNo}</td>
              <td className="px-6 py-3">{item.regNo}</td>
              <td className="px-6 py-3">{item.address}</td>
            </tr>
          ))} */}

          {filterData.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No matching records found 😕
              </td>
            </tr>
          ) : (
            filterData.map((item, index) => (
              <tr className="hover:bg-gray-100 transition-colors" key={index}>
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.rollNo}</td>
                <td className="px-6 py-3">{item.regNo}</td>
                <td className="px-6 py-3">{item.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default SearchFilter;
