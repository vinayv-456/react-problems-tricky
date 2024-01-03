import React from "react";
import { useState } from "react";
import Tab from "./Tab";

const tabs = [
  { id: 1, name: "tab1", details: "tab1 contents" },
  { id: 2, name: "tab2", details: "tab2 contents" },
  { id: 3, name: "tab3", details: "tab3 contents" },
  { id: 4, name: "tab4", details: "tab4 contents" },
];

function TabList() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          //   backgroundColor: "red",
          width: "800px",
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            {...tab}
            setActiveTab={setActiveTab}
            isActive={activeTab === tab.id}
          />
        ))}
      </div>
    </>
  );
}

export default TabList;
