
import React from "react";

function ReactMemo({ count }) {
  console.log("ReactMemo component rendered");

  return (
    <h3>Current Counter Value: {count}</h3>
  );
}

export default React.memo(ReactMemo);
