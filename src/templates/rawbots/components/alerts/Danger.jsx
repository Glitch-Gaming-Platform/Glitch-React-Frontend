import React from "react";

const Danger = ({ message }) => {
  return (
    <div className="uk-alert-danger" role="alert">
      <p>{message}</p>
    </div>
  );
};

export default Danger;
