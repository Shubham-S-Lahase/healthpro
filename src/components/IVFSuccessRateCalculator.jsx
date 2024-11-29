import React, { useState } from "react";
import Slider from "./Slider";
import Breadcrumb from "./BreadCrumb";

const ageRanges = [
  { id: "under30", label: "Under 30" },
  { id: "between3034", label: "Between 30 - 34" },
  { id: "between3537", label: "Between 35 - 37" },
  { id: "between3840", label: "Between 38 - 40" },
  { id: "between4143", label: "Between 41 - 43" },
  { id: "above43", label: "Above 43" },
];

const IVFSuccessRateCalculator = () => {
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [undergoneProcedures, setUndergoneProcedures] = useState({
    ICSI: null,
    PGT: null,
  });

  const handleProcedureChange = (procedure, value) => {
    setUndergoneProcedures((prev) => ({
      ...prev,
      [procedure]: value,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-[#FCFAF5] pt-20">
      <div className="absolute left-20 top-24">
        <Breadcrumb />
      </div>
      <form
        className="flex flex-col flex-wrap justify-around gap-8 mt-6 items-center"
        style={{ width: "975px" }}
      >
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-[28px] font-medium leading-[42px] text-center text-[#1E231E]">
            Which age range applies to you?
          </h1>
          <div className="flex flex-wrap gap-x-32 gap-y-3 justify-center">
            {ageRanges.map(({ id, label }) => (
              <div key={id} className="flex items-center">
                <div className="relative top-[3px]">
                  <input
                    type="radio"
                    name="ageRange"
                    id={id}
                    checked={selectedAgeRange === id}
                    onChange={() => setSelectedAgeRange(id)}
                    className="appearance-none w-6 h-6 border-2 border-[#F48265] rounded-full cursor-pointer"
                  />
                  {selectedAgeRange === id && (
                    <div className="absolute top-[6px] left-[6px] w-3 h-3 bg-[#F48265] rounded-full"></div>
                  )}
                </div>
                <label
                  htmlFor={id}
                  className="ml-3 text-[20px] leading-[30px] text-[#1E231E] font-normal"
                  style={{
                    fontWeight: selectedAgeRange === id ? 500 : 400,
                  }}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="text-[28px] font-medium leading-[42px] text-center text-[#1E231E]">
            Number of IVF Cycles?
          </h1>
          <Slider />
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="text-[28px] font-medium leading-[42px] text-center text-[#1E231E]">
            Have you undergone these procedures before?
          </h1>
          <div className="flex justify-around">
            {/* ICSI Procedure */}
            <div className="flex gap-6 items-center">
              <h2 className="text-xl font-semibold text-[#1E231E]">
                ICSI Procedure:
              </h2>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <div className="relative top-[3px]">
                    <input
                      type="radio"
                      id="ICSI-yes"
                      name="ICSI"
                      value="yes"
                      checked={undergoneProcedures.ICSI === "yes"}
                      onChange={() => handleProcedureChange("ICSI", "yes")}
                      className="appearance-none w-6 h-6 border-2 border-[#F48265] rounded-full cursor-pointer"
                    />
                    {undergoneProcedures.ICSI === "yes" && (
                      <div className="absolute top-[6px] left-[6px] w-3 h-3 bg-[#F48265] rounded-full"></div>
                    )}
                  </div>
                  <label
                    htmlFor="ICSI-yes"
                    className="ml-3 text-[20px] leading-[30px] text-[#1E231E] font-normal"
                    style={{
                      fontWeight:
                        undergoneProcedures.ICSI === "yes" ? 500 : 400,
                    }}
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <div className="relative top-[3px]">
                    <input
                      type="radio"
                      id="ICSI-no"
                      name="ICSI"
                      value="no"
                      checked={undergoneProcedures.ICSI === "no"}
                      onChange={() => handleProcedureChange("ICSI", "no")}
                      className="appearance-none w-6 h-6 border-2 border-[#F48265] rounded-full cursor-pointer"
                    />
                    {undergoneProcedures.ICSI === "no" && (
                      <div className="absolute top-[6px] left-[6px] w-3 h-3 bg-[#F48265] rounded-full"></div>
                    )}
                  </div>
                  <label
                    htmlFor="ICSI-no"
                    className="ml-3 text-[20px] leading-[30px] text-[#1E231E] font-normal"
                    style={{
                      fontWeight: undergoneProcedures.ICSI === "no" ? 500 : 400,
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* PGT Testing */}
            <div className="flex gap-6 items-center">
              <h2 className="text-xl font-semibold text-[#1E231E]">
                PGT Testing:
              </h2>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <div className="relative top-[3px]">
                    <input
                      type="radio"
                      id="PGT-yes"
                      name="PGT"
                      value="yes"
                      checked={undergoneProcedures.PGT === "yes"}
                      onChange={() => handleProcedureChange("PGT", "yes")}
                      className="appearance-none w-6 h-6 border-2 border-[#F48265] rounded-full cursor-pointer"
                    />
                    {undergoneProcedures.PGT === "yes" && (
                      <div className="absolute top-[6px] left-[6px] w-3 h-3 bg-[#F48265] rounded-full"></div>
                    )}
                  </div>
                  <label
                    htmlFor="PGT-yes"
                    className="ml-3 text-[20px] leading-[30px] text-[#1E231E] font-normal"
                    style={{
                      fontWeight: undergoneProcedures.PGT === "yes" ? 500 : 400,
                    }}
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <div className="relative top-[3px]">
                    <input
                      type="radio"
                      id="PGT-no"
                      name="PGT"
                      value="no"
                      checked={undergoneProcedures.PGT === "no"}
                      onChange={() => handleProcedureChange("PGT", "no")}
                      className="appearance-none w-6 h-6 border-2 border-[#F48265] rounded-full cursor-pointer"
                    />
                    {undergoneProcedures.PGT === "no" && (
                      <div className="absolute top-[6px] left-[6px] w-3 h-3 bg-[#F48265] rounded-full"></div>
                    )}
                  </div>
                  <label
                    htmlFor="PGT-no"
                    className="ml-3 text-[20px] leading-[30px] text-[#1E231E] font-normal"
                    style={{
                      fontWeight: undergoneProcedures.PGT === "no" ? 500 : 400,
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="text-[28px] font-medium leading-[42px] text-center text-[#1E231E]">
            Do you have any of these medical conditions?
          </h1>
          <div className="flex justify-around">
            {[
              "PCOS",
              "Endometriosis",
              "Low Ovarian Reserve",
              "Male Factor Infertility",
            ].map((condition) => (
              <label
                key={condition}
                className="text-xl font-normal text-[#1E231E] cursor-pointer flex gap-[10px] items-center peer-checked:font-semibold"
              >
                <input type="checkbox" className="peer hidden" id={condition} />
                <div
                  className="w-6 h-6 border-2 border-[#F48265] rounded cursor-pointer flex items-center justify-center 
            peer-checked:bg-[#F48265] relative peer-checked:before:content-['✔'] 
            peer-checked:before:text-white peer-checked:before:text-base 
            peer-checked:before:absolute peer-checked:before:font-bold"
                ></div>
                <span className="peer-checked:font-semibold">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="bg-[#D75555] text-[#ffffff] w-[147px] h-[47px] rounded-[6px] text-[16px] mt-6">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default IVFSuccessRateCalculator;
