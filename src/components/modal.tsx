import React, { useState } from 'react';
import { searchFlight } from '../../service/apiFunctions';

const SearchModal: React.FC = () => {
    const [formData, setFormData] = useState <any>({
    fromId: 'BOM.AIRPORT',
    toId: 'DEL.AIRPORT',
    departDate: '11/01/2024',
    returnDate: '',
    pageNo: '1',
    adults: '1',
    children: '',
    sort: 'CHEAPEST',
    cabinClass: 'ECONOMY',
    currency_code: 'AED',
  });

  const [searchResults, setSearchResults] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // Set to true for testing

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const results = await searchFlight(formData); // Pass form data to the API function
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#111] z-[9999] backdrop-blur-md rounded-lg shadow-lg w-full max-w-md p-4">
        <h2 className="text-xl font-bold mb-4 text-white">Search Flights</h2>

        {/* Input Fields */}
        <div className="space-y-3">
          <input
            type="text"
            name="fromId"
            placeholder="From (e.g., BOM.AIRPORT)"
            value={formData.fromId}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <input
            type="text"
            name="toId"
            placeholder="To (e.g., DEL.AIRPORT)"
            value={formData.toId}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <input
            type="date"
            name="departDate"
            placeholder="Departure Date"
            value={formData.departDate}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded" 
          />

          <input
            type="date"
            name="returnDate"
            placeholder="Return Date (optional)"
            value={formData.returnDate}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <input
            type="number"
            name="pageNo"
            placeholder="Page Number"
            value={formData.pageNo}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <input
            type="number"
            name="adults"
            placeholder="Number of Adults"
            value={formData.adults}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <input
            type="text"
            name="children"
            placeholder="Children Ages (e.g., 0,17)"
            value={formData.children}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />

          <select
            name="sort"
            value={formData.sort}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          >
            <option value="CHEAPEST">Cheapest</option>
            <option value="BEST">Best</option>
            <option value="FASTEST">Fastest</option>
          </select>

          <select
            name="cabinClass"
            value={formData.cabinClass}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          >
            <option value="ECONOMY">Economy</option>
            <option value="PREMIUM_ECONOMY">Premium Economy</option>
            <option value="BUSINESS">Business</option>
            <option value="FIRST">First</option>
          </select>

          <input
            type="text"
            name="currency_code"
            placeholder="Currency Code (e.g., AED)"
            value={formData.currency_code}
            onChange={handleInputChange}
            className="input w-full p-2 border rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>

        {/* Results */}
        {searchResults && (
          <div className="mt-4 text-white">
            <h3 className="text-lg font-bold">Results:</h3>
            <pre className="bg-[#222] p-3 rounded">{JSON.stringify(searchResults, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
