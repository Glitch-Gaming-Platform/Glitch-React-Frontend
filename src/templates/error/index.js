import React from 'react';

function Template() {
  const envVars = Object.keys(process.env).map((key) => (
    <p key={key}>
      {key}: {process.env[key]}
    </p>
  ));

  return (
    <>
      <h1>No Template was found.</h1>
      {envVars}
    </>
  );
}

export default Template;
