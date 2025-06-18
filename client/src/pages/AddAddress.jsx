import React, { useState } from "react";
import { assets } from "../assets/assets.js";

// Correctly defined InputField component
const InputField = ({ type, placeholder, name, handleChange, value }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={value}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Address:", address);
    // add your submit logic here
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500 mb-10">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler} className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                value={address.firstName}
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <InputField
                handleChange={handleChange}
                value={address.lastName}
                name="lastName"
                type="text"
                placeholder="Last name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              value={address.email}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              handleChange={handleChange}
              value={address.street}
              name="street"
              type="text"
              placeholder="Street Address"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                value={address.city}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                value={address.state}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                value={address.zipcode}
                name="zipcode"
                type="text"
                placeholder="Zipcode"
              />
              <InputField
                handleChange={handleChange}
                value={address.country}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            <InputField
              handleChange={handleChange}
              value={address.phone}
              name="phone"
              type="text"
              placeholder="Phone"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase"
            >
              Submit Address
            </button>
          </form>
        </div>
        <img
          className="max-w-sm mx-auto"
          src={assets.add_address_image}
          alt="add address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
