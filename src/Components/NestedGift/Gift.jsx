import React from "react";
import { gifts } from "./data";
import NestedGift from "./NestedGift";

function Gift() {
  return (
    <>
      {gifts.map((gift) => {
        return (
          <>
            <NestedGift {...gift} level={1} />
          </>
        );
      })}
    </>
  );
}

export default Gift;
