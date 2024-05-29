import React from 'react';


function Backdrop({ children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      
      {children}
    </div>
  );
}

export default Backdrop;