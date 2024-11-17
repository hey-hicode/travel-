import {
  PiAirplaneLandingBold,
  PiAirplaneTakeoffBold,
  PiCurrencyNgnBold,
  PiFilmSlateBold,
  PiForkKnifeBold,
  PiSuitcaseRollingBold,
  PiUsbBold,
  PiXBold,
} from "react-icons/pi";

const FlightInfo = () => {
  return (
    <div className="h-[274px] flex">
      <div className="h-full rounded-l bg-white w-full flex flex-col justify-evenly">
        <div className="flex justify-between items-center px-3">
          <div className="flex gap-x-4 items-center">
            <img
              src="https://cdn.dropp.cloud/u01no8.png"
              className="size-6"
              alt=""
            />
            <div className="">
              <p className="text-[#1D2433] font-semibold">American Airlines</p>
              <div className="flex items-center text-xs gap-x-2 font-medium text-[#676E7E] mt-1">
                <p>AA-829</p>
                <p>•</p>
                <button className="text-xs font-medium text-white bg-[#0A369D] rounded px-4 py-2">
                  First Class
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="">
              <p className="text-[#1D2433] font-semibold text-xl text-center">
                08:35
              </p>
              <p className="font-medium text-[#676E7E] text-xs text-center whitespace-nowrap">
                Sun, 20 Aug
              </p>
            </div>
            <div className="mx-6 w-[250px]">
              <div className="flex items-center justify-between">
                <PiAirplaneTakeoffBold color="#475367" />
                <p className="font-medium text-[#676E7E] text-sm">
                  Duration: 1h 45m
                </p>
                <PiAirplaneLandingBold color="#475367" />
              </div>
              <div className="bg-[#E7F0FF] rounded-full h-2 flex items-center justify-center my-3">
                <div className="bg-[#0D6EFD] h-full rounded-full w-2/6"></div>
              </div>
              <div className="flex items-center justify-between font-semibold text-sm">
                <p>LOS</p>
                <p className="font-medium text-[#676E7E] text-sm">Direct</p>
                <p>SIN</p>
              </div>
            </div>
            <div className="">
              <p className="text-[#1D2433] font-semibold text-xl text-center">
                09:55
              </p>
              <p className="font-medium text-[#676E7E] text-xs text-center whitespace-nowrap">
                Sun, 20 Aug
              </p>
            </div>
          </div>
          <p className="flex items-center gap-x-1 text-[#1D2433] font-semibold text-xl">
            <PiCurrencyNgnBold color="#344054" />
            123,450.00
          </p>
        </div>
        <div className="text-[#647995] border-y border-[#E4E7EC] py-5 font-medium">
          <div className="px-5 flex text-xs gap-x-3">
            <p>Facilities:</p>
            <p className="flex items-center gap-x-1">
              <PiSuitcaseRollingBold size={16} color="#475367" />
              <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
            </p>
            <p className="flex items-center gap-x-1">
              <PiFilmSlateBold size={16} color="#475367" />
              <span>In flight entertainment</span>
            </p>
            <p className="flex items-center gap-x-1">
              <PiForkKnifeBold size={16} color="#475367" />
              <span>In flight meal</span>
            </p>
            <p className="flex items-center gap-x-1">
              <PiUsbBold size={16} color="#475367" />
              <span>USB Port</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center gap-x-3">
            <button className="font-medium text-[#0D6EFD] text-xs">
              Flight details
            </button>
            <button className="font-medium text-[#0D6EFD] text-xs">
              Price details
            </button>
          </div>
          <button className="font-medium text-[#0D6EFD] text-xs">
            Edit details
          </button>
        </div>
      </div>
      <button className="h-full bg-[#FBEAE9] rounded-r flex items-center justify-center w-12">
        <PiXBold color="#9E0A05" size={24} />
      </button>
    </div>
  );
};

export default FlightInfo;
