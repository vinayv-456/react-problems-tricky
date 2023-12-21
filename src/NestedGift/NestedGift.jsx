import React, { useEffect, useRef, useState } from "react";
import gift from "./gift.svg";

function NestedGift(props) {
  const { level, hasMore, hasGift } = props;
  const [showNested, setShowNested] = useState(false);
  const ref = useRef();
  useEffect(() => {
    ref.current = level + 1;
  });
  return (
    <>
      {/* exposed */}
      {!showNested && (
        <img
          onClick={() => setShowNested(true)}
          src={gift}
          width={`${200 / level}px`}
          height={`${200 / level}px`}
          alt="gift"
        />
      )}
      {/* yet to reveal */}
      {showNested && (
        <>
          {hasMore?.map((e, index) => (
            <NestedGift {...e} level={ref.current} />
          ))}
          {hasGift ? <span>You found</span> : <></>}
        </>
      )}
    </>
  );
}

export default NestedGift;
