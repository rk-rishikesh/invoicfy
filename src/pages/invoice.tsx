function Invoice() {
  return (
    <div className="min-h-screen bg-[#1C2541] flex flex-col justify-center items-center p-8 pt-28">
      <h1 className="text-4xl font-bold mb-4 text-white">Create New Invoice</h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Section 1: Invoice */}
        <div className="">
          <h2 className="text-xl font-semibold py-2">Invoice Details</h2>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-sm py-2" />
            <input
              className="border rounded-lg p-3 border-gray-300"
              type="text"
              placeholder="Title of the invoice"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-sm py-2" />
            <textarea
              className="border rounded-lg p-3 border-gray-300"
              placeholder="Description of the invoice"
            />
          </div>
        </div>

        {/* Section 2: General Information */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold py-2">General Information:</h2>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-sm py-2" />
            <input
              className="border rounded-lg p-3 border-gray-300"
              type="text"
              placeholder="Enter your item"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-sm py-2" />
            <input
              className="border rounded-lg p-3 border-gray-300"
              type="number"
              placeholder="Enter the item cost"
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <select className="border rounded-lg p-3 border-gray-300">
              <option value="Select Currency" disabled selected>
                Select Currency
              </option>
              <option value="USDC">USDC</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-sm py-2" />
            <input
              className="border rounded-lg p-3 border-gray-300"
              type="text"
              placeholder="Payment Address"
            />
          </div>
        </div>

        {/* Payment Frequency */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold py-2">Payment Frequency:</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input type="radio" id="one-time" name="payment-frequency" value="one-time" />
              <label htmlFor="one-time" className="ml-2 text-sm ">
                One-time
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="monthly-recurring"
                name="payment-frequency"
                value="monthly-recurring"
              />
              <label htmlFor="monthly-recurring" className="ml-2 text-sm ">
                Monthly Recurring
              </label>
            </div>
          </div>

          <button className="w-1/2 bg-[#5BC0BE] text-black py-3 mt-8 rounded-lg hover:bg-[#1C2541] hover:text-white font-bold">
            Send Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
