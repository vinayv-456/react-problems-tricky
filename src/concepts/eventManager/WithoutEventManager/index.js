import React, { useState } from "react";
import Country from "./Containers/Country";
import Cities from "./Containers/Cities";

function WithoutEventManagerDemo() {
  const [cities, setCities] = useState([]);
  return (
    <>
      <Country setCities={setCities} />
      <Cities cities={cities} />
    </>
  );
}

export default WithoutEventManagerDemo;
