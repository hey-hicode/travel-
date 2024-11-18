// import { create } from "zustand";
// import { searchFlight } from "../../service/apiFunctions";

// interface Flight {
//   id: string;
//   from: string;
//   to: string;
//   price: number;
//   duration: string;
//   airline: string;
//   departure_time: string;
//   arrival_time: string;
//   [key: string]: any;
// }

// interface FlightSearchState {
//   flights: Flight[];
//   isLoading: boolean;
//   error: string | null;
//   fetchFlights: (params: {
//     fromId: string;
//     toId: string;
//     departDate: string;
//     returnDate?: string;
//     pageNo?: number;
//     adults?: number;
//     children?: string;
//     sort?: "BEST" | "CHEAPEST" | "FASTEST";
//     cabinClass?: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
//     currency_code?: string;
//   }) => Promise<void>;
// }

// export const useFlightSearchStore = create<FlightSearchState>((set) => ({
//   flights: [],
//   isLoading: false,
//   error: null,
//   fetchFlights: async (params) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await searchFlight(params);
//       set({ flights: response.data.data, isLoading: false });
//     } catch (err: any) {
//       set({ error: err.message, isLoading: false });
//     }
//   },
// }));
