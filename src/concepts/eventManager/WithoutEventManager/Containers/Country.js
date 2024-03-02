import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";

function Country({ setCities }) {
  const countries = ["USA", "India"];
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const cities = updateCities(selectedCountry);
    console.log("cities", cities);
    setCities(cities);
  }, [selectedCountry, setCities]);

  const updateCities = (selectedCountry) => {
    let cities = [];
    console.log("inside selectedCountry", selectedCountry);
    switch (selectedCountry.value) {
      case "USA":
        cities = ["New York", "Dallas", "New Jersey", "Chicago"];
        break;
      case "India":
        cities = ["Hyderabad", "New Delhi", "Bengaluru", "Chennai", "Cochin"];
        break;
      default:
        break;
    }
    return cities;
  };

  const handleCountrySelect = (opt) => {
    setSelectedCountry(opt);
  };

  return (
    <Dropdown
      options={countries}
      onChange={handleCountrySelect}
      value={selectedCountry}
      placeholder="Select an country"
    />
  );
}

export default Country;
