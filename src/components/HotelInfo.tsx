import {
  PiBedFill,
  PiCalendarBlankBold,
  PiCurrencyNgnBold,
  PiMapPinBold,
  PiStarFill,
  PiSwimmingPoolBold,
  PiWineBold,
  PiXBold,
} from "react-icons/pi";

const HotelInfo = () => {
  return (
    <div className="h-[274px] flex">
      <div className="h-full rounded-l bg-white w-full p-4 flex items-center">
        <img
          src="https://cdn.dropp.cloud/ow2p2x.png"
          alt=""
          className="h-full w-[232px] rounded"
        />
        <div className="flex flex-col justify-evenly h-full">
          <div className="flex justify-between">
            <div className="ml-4">
              <p className="text-xl font-semibold">Riviera Resort, Lekki</p>
              <p className="font-medium text-[#1D2433] text-sm my-1">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                Lekki Phase1
              </p>
              <div className="flex items-center gap-x-4 text-sm">
                <button className="text-[#0D6EFD] flex items-center gap-x-1">
                  <PiMapPinBold />
                  Show in map
                </button>
                <p className="flex items-center gap-x-1 text-[#676E7E]">
                  <PiStarFill color="#F4B93E" /> 8.5 (436)
                </p>
                <p className="flex items-center gap-x-1 text-[#676E7E]">
                  <PiBedFill />
                  King size room
                </p>
              </div>
            </div>
            <div className="text-[#1D2433] ml-10">
              <p className="flex items-center gap-x-1 font-semibold text-xl">
                <PiCurrencyNgnBold color="#344054" />
                123,450.00
              </p>
              <p className="text-xs font-semibold whitespace-nowrap">
                Total Price: NGN 560,000
              </p>
              <p className="text-xs font-semibold whitespace-nowrap">
                1 room x 10 nights incl. taxes
              </p>
            </div>
          </div>

          <div className="text-[#647995] border-y border-[#E4E7EC] py-5 font-medium flex justify-between items-center">
            <div className="px-5 flex text-xs gap-x-3">
              <p>Facilities:</p>
              <p className="flex items-center gap-x-1">
                <PiSwimmingPoolBold size={16} color="#475367" />
                <span>Pool</span>
              </p>
              <p className="flex items-center gap-x-1">
                <PiWineBold size={16} color="#475367" />
                <span>Bar</span>
              </p>
            </div>
            <div className="px-5 flex text-xs gap-x-3">
              <p className="flex items-center gap-x-1">
                <PiCalendarBlankBold size={16} color="#475367" />
                <span>Check In: 20-04-2024</span>
              </p>
              <p className="flex items-center gap-x-1">
                <PiCalendarBlankBold size={16} color="#475367" />
                <span>Check Out: 29-04-2024</span>
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between items-center px-5 text-xs">
            <div className="flex items-center gap-x-3">
              <button className="font-medium text-[#0D6EFD]">
                Hotel details
              </button>
              <button className="font-medium text-[#0D6EFD]">
                Price details
              </button>
            </div>
            <button className="font-medium text-[#0D6EFD]">Edit details</button>
          </div>
        </div>
      </div>
      <button className="h-full bg-[#FBEAE9] rounded-r flex items-center justify-center w-12">
        <PiXBold color="#9E0A05" size={24} />
      </button>
    </div>
  );
};

export default HotelInfo;
