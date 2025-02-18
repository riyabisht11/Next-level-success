import React from "react";
import Buisnessleader from "./Buisnessleader";

function Recommend() {
  const form = [
    { label: "Name", type: "text", placeholder: ["First Name", "Last Name"] },
    { label: "Designation", type: "text", placeholder: ["Enter your designation"] },
    { label: "Company Name", type: "text", placeholder: ["Enter company name"] },
    { label: "Email Address", type: "email", placeholder: ["Enter email address"] },
  ];

  return (
    <>
    <div className="flex flex-col w-full md:w-1/2">
      <div className="flex justify-center md:justify-start relative pt-2 ">
        <div className="absolute -bottom-2 w-[30px] md:w-[86px] h-[2px] bg-[#FF4B4B] md:left-15"></div>
        <h1 className="font-raleway md:font-roboto text-2xl md:text-3xl font-bold text-black md:text-[#2C2C2C] text-center ">
          Recommend a <br />
          Business Leader
        </h1>
      </div>

      <div className="form pt-9">
        <div>
          <h1 className="font-raleway md:font-roboto text-2xl md:text-3xl font-bold">
            Your Details
          </h1>
        </div>

        <form action="">
          {form.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-2 mb-5 pt-7"> 
              {/* 20px gap between sections (label + inputs) */}
              <label className="font-raleway md:font-roboto text-base md:text-lg font-bold text-[#949494] mb-2">
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
                      className="px-2 py-4 focus:outline-none rounded-md font-raleway md:font-roboto text-sm md:text-base font-medium text-[#949494] placeholder:text-sm"
                    />
                  ))}
                </div>
              ) : (
                <input
                  type={item.type}
                  placeholder={item.placeholder[0]}
                  className="px-2 py-4 focus:outline-none rounded-md font-raleway md:font-roboto text-sm md:text-base font-medium text-[#949494] placeholder:text-sm"
                />
              )}
            </div>
          ))}
        </form>
      </div>
      </div>
    
   
    </>
  );
}

export default Recommend;
