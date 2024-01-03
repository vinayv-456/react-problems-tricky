import React from "react";

function Tab(props) {
  const { id, name, details, isActive, setActiveTab } = props;
  return (
    <div style={{ flex: 1, border: "1px solid black" }}>
      <span style={{ cursor: "pointer" }} onClick={() => setActiveTab(id)}>
        {name}
      </span>
      {isActive ? (
        <div
          style={{
            backgroundColor: "green",
            // top: "10px",
            left: "0px",
            position: "absolute",
            width: "100%",
            height: "200px",
          }}
        >
          {details}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Tab;
