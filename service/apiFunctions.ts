import axiosInstance from "./AxiosInstance";


export const searchFlight = (query: string) => {
  return axiosInstance.get(`searchFlights`, { params: { q: query } });
};