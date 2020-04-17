import React from 'react';

function NotFoundPage({ location }: any) {
  return (
    <div
      style={{
        padding: "50px",
        width: "100%",
        textAlign: "center"
      }}
    >
      The page <code>{location.pathname}</code> could not be
      found.
    </div>
  );
}

export default NotFoundPage;