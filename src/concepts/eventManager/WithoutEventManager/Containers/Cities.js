import React, { useState } from "react";
import Dropdown from "react-dropdown";

function Cities({ cities }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCitySelected = (opt) => {
    setSelectedCity(opt);
  };
  return (
    <Dropdown
      options={cities}
      onChange={handleCitySelected}
      value={selectedCity}
      placeholder="Select an city"
    />
  );
}

export default Cities;
