import React from "react";
import { Link } from "react-router";

function Buisnessleader() {
  const form = [
    { label: "Name", type: "text", placeholder: ["First Name", "Last Name"] },
    {
      label: "Designation",
      type: "text",
      placeholder: ["Enter your designation"],
    },
    {
      label: "Company Name",
      type: "text",
      placeholder: ["Enter company name"],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 ">
      <div className="flex justify-start relative pt-2 ">
        <h1 className="font-raleway md:font-roboto text-2xl md:text-3xl font-bold text-black md:text-[#2C2C2C]">
          Business Leader’s Details
        </h1>
      </div>

      <div className="form pt-0 md:pt-9">
        <form action="" className="pt-6">
          {form.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-2 mb-5  ">
              {/* 20px gap between sections (label + inputs) */}
              <label className="font-raleway md:font-roboto text-base md:text-lg font-bold text-[#949494] mb-2 ">
                {/* 10px gap between label and input */}
                {item.label} <span className="text-[#FF4B4B]">*</span>
              </label>

              {item.label === "Name" ? (
                <div className="flex flex-col space-y-2">
                  {/* 10px gap between First Name & Last Name */}
                  {item.placeholder.map((ph, i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={ph}
                      className="px-2 py-4  focus:outline-none rounded-md font-raleway md:font-roboto text-sm md:text-base font-medium text-[#949494] placeholder:text-sm"
                    />
                  ))}
                </div>
              ) : (
                <input
                  type={item.type}
                  placeholder={item.placeholder[0]}
                  className="px-2 py-4 rounded-md focus:outline-none font-raleway md:font-roboto text-sm md:text-base font-medium text-[#949494] placeholder:text-sm"
                />
              )}
            </div>
          ))}
        </form>
      </div>

      <div>
        <div className="flex flex-col gap-3">
          <h1 className="font-raleway font-medium text-sm  text-black">
            Brief about your relationship with this business leader and why you
            have recommended them for this interview series?
          </h1>
          <textarea
            placeholder=""
            rows="10"
            className="w-full px-3 py-3 focus:outline-none  bg-[#F6F6F6] rounded-md font-raleway md:font-roboto text-sm md:text-base text-[#949494] placeholder:text-sm"
          />
        </div>
      </div>
    
      <Link to ="/submit" className="button bg-[#FF4B4B] flex justify-center  cursor-pointer">
          <button className="text-white font-raleway font-bold text-base px-5 py-3 cursor-pointer ">
          Submit
          </button>
        </Link>
        </div>
        </>
   
  );
}

export default Buisnessleader;
