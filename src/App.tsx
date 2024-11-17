import {
  PiAirplaneInFlightBold,
  PiArrowLeftBold,
  PiArrowRightBold,
  PiCalendarBlankBold,
  PiDotsThreeBold,
  PiGearSix,
  PiRoadHorizonBold,
  PiUserPlus,
  PiWarehouseBold,
} from "react-icons/pi";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FlightInfo from "./components/FlightInfo";
import HotelInfo from "./components/HotelInfo";
import ActivityInfo from "./components/ActivitiyInfo";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-7 flex gap-x-10">
        <Sidebar />
        <div className="bg-white p-4 rounded w-[calc(100vw-300px)]">
          <div className="relative">
            <img
              src="https://cdn.dropp.cloud/lskqbp.png"
              className="rounded"
              alt=""
            />
            <button className="left-3 top-3 size-12 absolute rounded bg-white/20 flex items-center justify-center hover:bg-white/50 transition-colors">
              <PiArrowLeftBold className="text-[#344054]" size={24} />
            </button>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="">
              <p className="flex gap-x-2 px-2 py-1 bg-[#FEF4E6] font-medium text-[#7A4504] text-sm items-center w-fit">
                <PiCalendarBlankBold size={24} />
                21 March 2024
                <PiArrowRightBold size={24} />
                21 April 2024
              </p>
              <h2 className="font-semibold text-2xl mt-2">
                Bahamas Family Trip
              </h2>
              <p className="font-medium text-[#676E7E]">
                New York,  United States of America | Solo Trip
              </p>
            </div>
            <div className="flex items-center flex-col gap-y-7">
              <div className="flex items-center gap-x-2">
                <button className="bg-[#E7F0FF] text-[#0D6EFD] rounded h-12 w-40 flex items-center justify-center">
                  <PiUserPlus size={20} />
                </button>
                <button>
                  <PiDotsThreeBold size={32} color="#344054" />
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src="https://cdn.dropp.cloud/8vg8tx.png"
                  className="size-10 rounded-full"
                  alt=""
                />
                <div className="h-[2px] bg-[#E7F0FF] w-[31px]"></div>
                <button className="size-10 border-2 border-[#E7F0FF] flex items-center justify-center rounded-full">
                  <PiGearSix />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 mt-5">
            <div className="w-[270px] h-[193px] rounded p-4 flex justify-between flex-col bg-[#000031]">
              <div className="text-white">
                <p className="font-semibold">Activities</p>
                <p className="mt-3 text-sm">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
              </div>
              <button className="rounded w-full bg-[#0D6EFD] text-white h-[48px]">
                Add Activities
              </button>
            </div>
            <div className="w-[270px] h-[193px] rounded p-4 flex justify-between flex-col bg-[#E7F0FF]">
              <div className="">
                <p className="font-semibold text-black">Hotels</p>
                <p className="mt-3 text-sm text-[#1D2433]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
              </div>
              <button className="rounded w-full bg-[#0D6EFD] text-white h-[48px]">
                Add Hotels
              </button>
            </div>
            <div className="w-[270px] h-[193px] rounded p-4 flex justify-between flex-col bg-[#0D6EFD]">
              <div className="text-white">
                <p className="font-semibold">Flights</p>
                <p className="mt-3 text-sm">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
              </div>
              <button className="rounded w-full text-[#0D6EFD] bg-white h-[48px]">
                Add Flights
              </button>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-[#1D2433] text-xl font-semibold">
              Trip itineraries
            </h3>
            <p className="text-sm text-[#647995] font-medium">
              Your trip itineraries are placed here
            </p>
            <div className="p-3 bg-[#F0F2F5] rounded mt-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-x-2">
                  <PiAirplaneInFlightBold color="#344054" size={24} />
                  <span className="font-semibold text-[#1D2433]">Flight</span>
                </p>
                <button className="bg-white text-[#0D6EFD] px-6 py-3 font-semibold rounded text-sm">
                  Add Flights
                </button>
              </div>
              <div className="mt-5 space-y-4">
                <FlightInfo />
                <FlightInfo />
              </div>
            </div>
            <div className="p-3 bg-[#344054] rounded mt-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-x-2 text-white">
                  <PiWarehouseBold size={24} />
                  <span className="font-semibold">Hotels</span>
                </p>
                <button className="bg-white text-[#1D2433] px-6 py-3 font-semibold rounded text-sm">
                  Add Hotels
                </button>
              </div>
              <div className="mt-5 space-y-4">
                <HotelInfo />
                <HotelInfo />
              </div>
            </div>
            <div className="p-3 bg-[#0054E4] rounded mt-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-x-2 text-white">
                  <PiRoadHorizonBold size={24} />
                  <span className="font-semibold">Activities</span>
                </p>
                <button className="bg-white text-[#0D6EFD] px-6 py-3 font-semibold rounded text-sm">
                  Add Activities
                </button>
              </div>
              <div className="mt-5 space-y-4">
                <ActivityInfo />
                <ActivityInfo />
                <ActivityInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
