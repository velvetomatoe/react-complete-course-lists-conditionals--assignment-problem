import React from "react";

const validation = props => {
  let validator = "";

  if (props.count.length > 5) {
    validator = "Text long enough.";
  } else {
    validator = "Text too short.";
  }
  return (
    <div className="Validation">
      <p>{validator}</p>
    </div>
  );
};

export default validation;
