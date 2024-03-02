import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { eventManager } from "../eventManager";
import { EVENTS } from "../../../constants";

function Country() {
  const countries = ["USA", "India"];
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const cities = updateCities(selectedCountry);
    console.log("cities", cities);
    eventManager.emit(EVENTS.ON_COUNTRY_CHANGE, cities);
  }, [selectedCountry]);

  const updateCities = (selectedCountry) => {
    let cities = [];
    console.log("inside selectedCountry", selectedCountry);
    switch (selectedCountry.value) {
      case "USA":
        cities = ["New York", "Dallas", "New Jersey", "Chicago"];
        break;
      case "India":
        cities = ["Hyderabad", "New Delhi", "Begaluru", "Chennai", "Cochin"];
        break;
      default:
        break;
    }
    return cities;
  };

  const handleCountrySelect = (opt) => {
    console.log("opt", opt);
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
