import React from "react";

const Info = ({ message }) => {
  return (
    <div className="uk-alert-primary" role="alert">
      <p>{message}</p>
    </div>
  );
};

export default Info;