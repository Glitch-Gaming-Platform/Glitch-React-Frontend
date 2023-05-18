import React from "react";

const Success= ({ message }) => {
  return (
    <div className="uk-alert-success" role="alert">
      <p>{message}</p>
    </div>
  );
};

export default Success;
