'use client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

library.add(faTimes);
library.add(faPlus);

function Invoice() {
  const [logoImage, setLogoImage] = useState(null);
  const [products, setProducts] = useState([{ productName: '', quantity: 0, rate: 0, amount: 0 }]);
  const [currency, setCurrency] = useState('');
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const currencyButtonRef = useRef(null);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;

    // Calculate the amount when rate or quantity changes
    if (field === 'rate' || field === 'quantity') {
      updatedProducts[index].amount = updatedProducts[index].rate * updatedProducts[index].quantity;
    }

    setProducts(updatedProducts);
  };

  const addProduct = () => {
    setProducts([...products, { productName: '', quantity: 0, rate: 0, amount: 0 }]);
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const getTotalAmount = () => {
    return products.reduce((total, product) => total + product.amount, 0);
  };

  // Function to handle logo file input
  const handleLogoInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const currencyOptions = ['USD', 'EUR', 'GBP', 'JPY'];

  const toggleCurrencyOptions = () => {
    setShowCurrencyOptions(!showCurrencyOptions);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (currencyButtonRef.current && !currencyButtonRef.current.contains(event.target)) {
        setShowCurrencyOptions(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A3CEF1] to-white flex flex-col justify-center items-center p-8 pt-28">
      <select
        onChange={(e) => setCurrency(e.target.value)}
        value={currency}
        className="border bg-white rounded-full text-center items-center p-2 w-32 h-10 font-bold mb-8 ml-auto mr-80"
      >
        <option value="">Currency</option>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="bg-white rounded-lg shadow-md py-16 space-y-4">
        <div className="flex justify-between px-16">
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="logoInput"
              className="border rounded flex items-center justify-center p-2 h-20 w-36 cursor-pointer text-center"
            >
              {logoImage ? (
                <img src={logoImage} alt="Logo" className="object-contain" />
              ) : (
                <div className="font-frank text-gray-400">Add your logo</div>
              )}
            </label>
            <input
              type="file"
              id="logoInput"
              accept="image/*"
              className="hidden"
              onChange={handleLogoInputChange}
            />
            <input
              type="text"
              placeholder="Enter company's name"
              className="border rounded p-2 w-48"
            />
          </div>
          <div className="font-bold text-4xl font-frank">INVOICE</div>
        </div>
        <div className="border-t border-gray-300 w-full mt-4"></div>
        <div className="grid grid-cols-2 gap-4 px-16">
          {/* Left Column */}
          {/* <div className="space-y-2">
            <div className="flex items-center">
              <span className="mr-2">Bill To:</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Client's Name:</span>
              <input type="text" className="border rounded p-2" />
            </div>
            <div className="flex items-center">
              <span className="mr-2">Wallet Address:</span>
              <input type="text" className="border rounded p-2" />
            </div>
          </div> */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-2">Bill To:</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 w-32">Client's Name:</span>
              <input type="text" className="border rounded p-2" />
            </div>
            <div className="flex items-center">
              <span className="mr-2 w-32">Wallet Address:</span>
              <input type="text" className="border rounded p-2" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 pl-16">
            <div className="flex items-center">
              <span className="mr-2 w-32">Invoice Number:</span>
              {/* <input type="text" className="border rounded p-2" /> */}
            </div>
            <div className="flex items-center">
              <span className="mr-2 w-32">Invoice Date:</span>
              <input type="date" className="border rounded p-2" />
            </div>
            <div className="flex items-center">
              <span className="mr-2 w-32">Due date:</span>
              <input type="date" className="border rounded p-2" />
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-300 w-full mt-4"></div> */}
        {/* <div className=" border-y py-2 border-gray-300 w-full grid grid-cols-4 px-16">
          <div>Product(s)</div>
          <div>Quantity</div>
          <div>Rate</div>
          <div>Amount</div>
        </div>
        <div className="grid grid-cols-4 px-16">
          <div className="space-y-2">
            <input
              type="text"
              id="productName"
              placeholder="Product Name"
              className="border rounded p-2"
            />
          </div>
          <div className="space-y-2">
            <input type="number" id="quantity" className="border rounded p-2" />
          </div>
          <div className="space-y-2">
            <input type="number" id="rate" className="border rounded p-2" />
          </div>
          <div className="space-y-2">
            <input type="number" id="amount" className="border rounded p-2" />
          </div>
        </div> */}

        <div className="border-y py-2 border-gray-300 w-full grid grid-cols-12 px-16">
          <div className="col-span-5">Product(s)</div>
          <div className="col-span-2">Quantity</div>
          <div className="col-span-2">Rate</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-1"></div>
        </div>
        {products.map((product, index) => (
          <div className="grid grid-cols-12 px-16" key={index}>
            <div className="col-span-5 space-y-2">
              <input
                type="text"
                placeholder="Product Name"
                className="border rounded p-2"
                value={product.productName}
                onChange={(e) => handleProductChange(index, 'productName', e.target.value)}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <input
                type="number"
                className="border rounded p-2 w-16"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <input
                type="number"
                className="border rounded p-2 w-16"
                value={product.rate}
                onChange={(e) => handleProductChange(index, 'rate', parseFloat(e.target.value))}
              />
            </div>
            <div className="col-span-2 space-y-2 mt-2">
              {product.amount} {currency || ''}
            </div>
            <div className="col-span-1 space-y-2 flex items-center">
              <button
                onClick={() => deleteProduct(index)}
                className="w-8 h-8 border rounded-full flex items-center justify-center bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white"
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
          </div>
        ))}
        <div className="px-16 border-b pb-4">
          <button className="bg-gray-200 py-2 px-4 border rounded-md" onClick={addProduct}>
            <FontAwesomeIcon icon="plus" className="mr-2" />
            Add
          </button>
        </div>

        <div className="grid grid-cols-12 px-16">
          <div className="col-span-5"></div>
          <div className="col-span-2"></div>
          <div className="col-span-2 font-bold">Total</div>
          <div className="col-span-2">
            {getTotalAmount()} {currency || ''}
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="rounded-full bg-[#A3CEF1] text-black font-bold font-frank py-4 mt-4 px-6 hover:bg-[#389BA0]">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Invoice;
