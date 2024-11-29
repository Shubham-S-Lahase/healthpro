import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

const IVFResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const successRate = location.state?.successRate;

  if (successRate === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl text-gray-700">
          No results available. Please calculate first.
        </p>
        <button
          className="mt-4 bg-[#D75555] text-[#ffffff] w-[147px] h-[47px] rounded-[6px]"
          onClick={() => navigate("/ivf-success-rate-calculator")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex-grow overflow-hidden">
      <div className="flex items-center justify-center h-screen bg-[#303030]">
        <div className="flex flex-col justify-center items-center w-1/2">
          {/* <div className="absolute left-20 top-24">
            <BreadCrumb />
          </div> */}
          <div className="flex flex-col">
            <div className="flex gap-5 items-center">
              <img src="/res.svg" alt="" />
              <h1 className="text-5xl font-medium text-[#FFFFFF]">
                Your Estimated IVF Success Rate is
              </h1>
            </div>
          </div>
          <p className="text-2xl text-[#F48265] mt-4">{successRate}%</p>
          <button
            className="mt-6 bg-[#D75555] text-[#ffffff] w-[147px] h-[47px] rounded-[6px]"
            onClick={() => navigate("/ivf-success-rate-calculator")}
          >
            Calculate Again
          </button>
        </div>
        <div className="flex w-1/2">
          <img src="/bg.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IVFResult;
