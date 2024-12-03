"use strict";

import React from "react";
import { FaCreditCard, FaMoneyBillAlt, FaStethoscope } from "react-icons/fa"; // Importing icons

function CityDetails({ city }) {
  if (!city) {
    return (
      <div className="fixed top-28 right-6 z-20 bg-black text-white p-4 rounded-lg shadow-lg w-[280px]">
        <h3 className="text-sm font-semibold">City Details</h3>
        <p className="text-gray-400 text-xs mt-2">Select a city to view details.</p>
      </div>
    );
  }

  return (
    <div className="fixed top-28 right-6 z-20 bg-black text-white p-4 rounded-lg shadow-lg w-[550px] min-h-[60vh] overflow-y-auto">
      <h3 className="text-md font-semibold">
        {city.city}, {city.state}
      </h3>
      <p className="text-sm text-neutral-100 font-light mt-2">Population: {city.population}</p>

      <h4 className="text-sm font-light mt-4">Largest Employers</h4>

      {/* Grid container */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {city.largest_employers.map((employer) => (
          <div
            key={employer.rank}
            className="bg-gray-900 min-h-60 p-4 rounded-md text-xs"
          >
            <div className="text-md-lg font-normal my-2.5">
              {employer.rank}. {employer.name}
            </div>
            <div className="text-gray-400 text-xs mb-1">
      
                <span className="text-white font-normal">Industry:</span>
           {" "}
              <span className="text-green-300 font-extralight">{employer.industry}</span>
            </div>
            <div className="text-gray-400 text-xs mb-1">
   
                <span className="text-white ont-normal">Employees:</span>
                {" "}
              <span className="text-green-300 font-extralight text-xxsm">{employer.employees}</span>
            </div>
            <div className="text-gray-300 text-xs my-4 border-t border-gray-600 pt-1">
              Finch Accuracy Estimate:{" "}
              <span className="text-white font-extralight ">
                {employer.accuracy_estimate}%
              </span>
            </div>

            {/* Simplified layout with icons and a cleaner design */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center text-gray-400 text-xs">
                <FaCreditCard className="mr-2 text-sm" />
                <p className="text-white  font-extralight text-xxsm">
                  Payment Processor:{" "}
                  <span className="text-green-300 font-extralight text-xs">
                    {employer.payment_processor}
                  </span>
                </p>
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <FaMoneyBillAlt className="mr-2 text-sm" />
                <p className="text-white font-extralight text-xxsm">
                  401k Offered:{" "}
                  <span className="text-green-300 font-extralight text-xs">
                    {employer["401k_offered"]}
                  </span>
                </p>
              </div>
              <div className="flex items-center text-gray-400 text-xs">
                <FaStethoscope className="mr-2 text-sm" />
                <p className="text-white font-extralight text-xxsm">
                  Healthcare:{" "}
                  <span className="text-green-300 font-extralight text-xs">
                    {employer.healthcare}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityDetails;
