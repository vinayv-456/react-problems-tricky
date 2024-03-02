import React, { useEffect, useState } from "react";
import { eventManager } from "../eventManager";
import { EVENTS } from "../../../constants";
import Dropdown from "react-dropdown";

function Cities() {
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  useEffect(() => {
    eventManager.on(EVENTS.ON_COUNTRY_CHANGE, setCities);
  }, []);

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
