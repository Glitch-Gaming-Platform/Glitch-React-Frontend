import React from "react";

const Warning = ({ message }) => {
  return (
    <div className="uk-alert-warning" role="alert">
      <p>{message}</p>
    </div>
  );
};

export default Warning;
