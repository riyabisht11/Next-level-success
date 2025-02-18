import { useNavigate } from "react-router";
import tick from "../../assets/SVG/tick.svg";

export default function SubmitPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FF4B4B]">
      {/* White Box */}
      <div className="bg-white flex justify-center items-center shadow-lg text-center w-[280px] h-[230px]">
        <img src={tick} alt="" className="" />
      </div>

      {/* Red Message Box */}
      <div className="bg-[#FF4B4B]  border-2 border-white w-[280px] h-[230px] flex flex-col items-center justify-center gap-12">
        <div>
          <h1 className="text-white font-medium font-raleway text-base text-center">
            Your recommendation has been submitted successfully!
          </h1>
        </div>

        <div className="flex justify-center "><button
          onClick={() => navigate("/")}
          className="bg-white text-[#FF4B4B] w-[139px] border border-[#FF4B4B] font-bold font-raleway text-base py-4   hover:bg-[#FF4B4B] hover:text-white transition"
        >
          Done
        </button></div>

        
      </div>
    </div>
  );
}
